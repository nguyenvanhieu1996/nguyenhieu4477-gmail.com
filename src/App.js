import React from 'react';
import './App.css';
import firebase from './firebase'
import TimeList from './components/time-list';
import AddTime from './components/add-time';
function App() {
  // firebase.firestore().collection('time').add({
  //   title:'ABC',
  //   timeSecond: 45
  // })
  console.log('render App')
  return (
    <div className="App">
      <TimeList />
      <AddTime />
    </div>
  );
}

export default App;
