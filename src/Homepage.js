import './Homepage.css'
import { Link } from 'react-router-dom'

import { useState } from 'react';

import ClickAwayListener from 'react-click-away-listener';


export function HomePage() {
 

 
  const [popup, setPopup] = useState(false)

  return (


    <div className='MainPage'>
   


      <div className='button-container'>
        <label className='Label-Discount'>Only £16 a Month
          <Link to='/Membership/Membership'>
            <button className='JOIN-Button2'>JOIN NOW</button> </Link></label>



      </div>
     

      <div className='MenuNavBar'>
    <button onClick={() => setPopup(true)}>Menu</button>
        
       
        {popup && (
            <ClickAwayListener onClickAway={() => setPopup(false)}>
                    <div className={'popup'}>
                    <ul className="menuNavbar">
              <li className="Contact-us">
                <button>Contact Us    </button>
              </li>
              <li className="Fitness-classes">
                <button>Fitness Classes</button>
              </li>
              <li className="FAQ">
              <Link to='/Pages/FAQ'><button>FAQ</button></Link>
              </li>
              <li className="Workout-videos">
                <button>Workout videos</button>
              </li>
              <li className="Workout-plan">
                <Link to='/Options/Workoutplan'><button>Workout plan</button></Link>
              </li>
         
           
            </ul>
                    </div>
            </ClickAwayListener>
        )}
       
        </div>
      </div>
   





  )
}