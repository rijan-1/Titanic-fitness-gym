import './Homepage.css'
import {Link} from'react-router-dom'

import {useState} from 'react'
export function HomePage() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
       

        <div className='MainPage'>
            
       
            <div className='button-container'>
            <label className='Label-Discount'>Only £16 a Month
            <Link to='/Membership/Membership'> 
            <button className='JOIN-Button2'>JOIN NOW</button> </Link></label> 

            
                
            </div>
            <div className='exporecontainer'>

            <div className='EXPLORE-Button'> 
        <button onClick={handleOpen}>EXPLORE</button>
        {open ? (
        <ul className="menu">
          <li className="Contact-us">
            <button>Contact Us</button>
          </li>
          <li className="Fitness-classes">
            <button>Fitness Classes</button>
          </li>
          <li className="FAQ">
            <button>FAQ</button>
          </li>
          <li className="Workout-videos">
            <button>Workout videos</button>
          </li>
          <li className="Workout-plan">
            <Link to='/Options/Workoutplan'><button>Workout plan</button></Link>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </ul>
      ) : null}
      

        </div>
        </div>
          </div>
            

       
       

    )
}