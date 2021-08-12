import React, { useState, useEffect } from "react"
// import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
// import UserHeader from './UserHeader';
import Workout from './Workout';
// import ChooseWorkout from './ChooseWorkout';

export default function Workouts(props) {
  const { pickWorkout, socket } = props;
  const [workouts, setWorkouts] = useState([]);
  
  socket.on('getWorkouts', data => {
    if (data) {
      setWorkouts(data);
    };
  });
  console.log('Workouts')
  console.log(workouts)

  
  const availableWorkouts = workouts
  .filter(e => e.available)
  .map(e => (
    <Workout pickWorkout={pickWorkout} workout={e} key={e.id} />
    ))
    
    const windowHeight = window.innerHeight;
    const window80 = Math.floor(windowHeight * .8)
    return (
      <div style={{overflow: "scroll", height: `${window80}px` }}>
      <h3>Available Workouts</h3>
      {availableWorkouts}
    </div>
  )
}