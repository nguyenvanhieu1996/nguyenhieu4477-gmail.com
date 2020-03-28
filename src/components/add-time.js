import React, { useState } from 'react';
import firebase from '../firebase'
const AddTime = () => {
    console.log('render add')
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [time1, setTime1] = useState('')

    const onAdd = () => {
        firebase
            .firestore()
            .collection('time')
            .add({ title, timeSecond: parseInt(time) })
            .then(() => {
                setTitle('')
                setTime('')
            })
    }
    return (
        <form>
            <label >Title</label><br />
            <input type="text" id="title" name="title" value={title} required onChange={(e) => setTitle(e.target.value)} /><br />
            <label >Time</label><br />
            <input type="number" id="time" name="time" value={time} required onChange={(e) => setTime(e.target.value)} /><br /><br />
            <button type="button" onClick={() => onAdd()}>Submit</button>
        </form>
    );
}

export default AddTime;
