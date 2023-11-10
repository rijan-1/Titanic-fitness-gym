import './Workoutplan.css';
import { useState } from 'react';
import axios from 'axios';

export function Workoutplan() {
  const [text, setText] = useState('');
  const [addWorkout, setAddWorkout] = useState([]);

  const getWorkout = () => {
    // Check if text is not empty before making the API call
    if (text.trim() === '') {
      console.error('Muscle parameter is empty');
      return(
        <p>invalid input</p>
      )
    }

    axios
      .get(`https://api.api-ninjas.com/v1/exercises?muscle=${text}`, {
        headers: {
          'X-Api-Key': '+nAmCzYqHGUELZqGa67Aqg==AbAEZISgNXCxq7VR',
        },
      })
      .then((res) => {
        console.log(res);
        setAddWorkout(res.data);
      })
      .catch((error) => {
        console.error('Error fetching workout:', error.message);
        // You might want to set an error state here for better user feedback
      });
  };

  return (
    <div className='apiInput'>
      <h1>Workout Instruction generator</h1>
      <div className='inputworkout1'>
      <input  style={{width:'400px',height:'30px', fontSize:'20px'}}placeholder='Enter the muscle you want to workout'type="text" onChange={(event) => setText(event.target.value)} />
      <button tyle={{width:'50px',height:'500px', fontSize:'20px'}} onClick={getWorkout}>Submit</button>
      </div>
    <div className='workouts-data'>
      {/* Display workout data, assuming it's an array */}
      {addWorkout.map((workout, index) => (
        <div className='workoutNameApi' key={index}>

          <h3>{workout.name}</h3>
          <p>{workout.instructions}</p>
        
        </div>
      ))}
    </div>
      
    </div>
  );
}
