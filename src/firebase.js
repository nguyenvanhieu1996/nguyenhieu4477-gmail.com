import firebase from 'firebase'
import 'firebase/firestore'
import { func } from 'prop-types';


// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyA-J3s-r6hwiaicJuXgaOQDP-ZOO0s6iXw",
    authDomain: "react-hook-firebase-394cb.firebaseapp.com",
    databaseURL: "https://react-hook-firebase-394cb.firebaseio.com",
    projectId: "react-hook-firebase-394cb",
    storageBucket: "react-hook-firebase-394cb.appspot.com",
    messagingSenderId: "875314909532",
    appId: "1:875314909532:web:a1bd85145d3a246b8cb199",
    measurementId: "G-D15ZP8TLTZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();


// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.requestPermission()
    .then(function () {
        console.log('run')
        return messaging.getToken()

    })
    .then(function (token) {
        console.log('token', token)
    })
    .catch(function (e) {
        console.log('error', e)
    })


// messaging.setBackgroundMessageHandler((payload) => {
//     const title = 'Hello World'
//     const options = {
//         body: payload.data.status,
//     }
//     return self.registration.showNotification(title, options)
// })


messaging.onMessage((payload) => {
    console.log('payload', payload)
})
export default firebase