import React, { useState, useEffect } from 'react';
import firebase from '../firebase'

const useTime = () => {
    const [times, setTimes] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('time').onSnapshot((snapshot) => {
            const newTimes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTimes(newTimes);
            console.log('newTimes', newTimes);
        })
        return () => unsubscribe()
    }, [])

    return times;
}

const TimeList = () => {
    console.log('render TimeList ')
    const times = useTime()
    return (
        <div>
            <h1> Time List</h1>
            <ol>
                {
                    times.map((time) => {
                        return (
                            <li key={time.id}>
                                <div>{time.title}</div>
                                <div>{time.timeSecond}</div>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
}

export default React.memo(TimeList);
