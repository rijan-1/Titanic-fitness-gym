import './Workoutplan.css';
import { useState } from 'react';
import axios from 'axios';

export function Workoutplan() {
  const [text, setText] = useState('');
  const [addWorkout, setAddWorkout] = useState(null);

  const getWorkout = () => {
    // Check if text is not empty before making the API call
    if (text.trim() === '') {
      console.error('Muscle parameter is empty');
      return;
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
    <div>
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <button onClick={getWorkout}>Submit</button>
      {/* Display workout data, assuming it's an array or an object */}
      {addWorkout.map((workouts) =>{
        
        return ( <p>{workouts.instructions}</p>
    )
      }
        <div>
          <h2>Workout Details:</h2>
          <pre>{JSON.stringify(addWorkout, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
