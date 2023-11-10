import './NavBar.css'

import {Link} from 'react-router-dom'

import {auth} from './Pages/config'

import ClickAwayListener from 'react-click-away-listener';
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

import {useState}from 'react'

export function Navbar(){
    const [popup, setPopup] = useState(false)

    const [user] = useAuthState(auth)
    
const signOutHnalde= async()=>{

    await signOut(auth)

}


    return(
<div className='background-image'>
<fieldset className='header-fieldset' >
    <div className='header'>
        <button className='signOutButton'onClick={signOutHnalde}>Sign Out</button>


        <Link to='/'><button className='FIND-A-GYM-Button'> HOME</button></Link>

     

        <Link to ='/Pages/Login'><button className='LOGIN-Button'> LOGIN</button></Link>


        <Link to='/Membership/Membership' > <button className='JOIN-Button1'>  JOIN NOW</button> </Link>


    </div >
</fieldset >

<fieldset className='subHeading-fieldset'>
    <div className='Subheading'>
<div >
    {user &&(
<>
     <h1 className='profileCaption'style ={{color:'white'}}>{user?.displayName}</h1>
        <img className='profileiMAGE'src ={user?.photoURL }alt ='idk'/>
        </>
    )
    }
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
   
        <Link to='/Pages/AboutUs'><button >About Us</button></Link>
        <Link to='/Pages/Facilities'><button>Facilities</button></Link>
        <Link to='/MakesUsDiff'><button>What makes us different?</button></Link>

       <Link to='/TimeTable'> <button>Timetable</button></Link>

        <button>Reviews</button>

    </div>

</fieldset >
</div>
)
}