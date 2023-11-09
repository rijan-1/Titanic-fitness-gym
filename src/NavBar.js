import './NavBar.css'

import {Link} from 'react-router-dom'

import {auth} from './Pages/config'

import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export function Navbar(){

    const [user] = useAuthState(auth)
    
const signOutHnalde= async()=>{

    await signOut(auth)

}


    return(
<div className='background-image'>
<fieldset className='header-fieldset' >
    <div className='header'>
        <button onClick={signOutHnalde}>Sign Out</button>


        <Link to='/'><button className='FIND-A-GYM-Button'> HOME</button></Link>

     

        <Link to ='/Pages/Login'><button className='LOGIN-Button'> LOGIN</button></Link>


        <Link to='/Membership/Membership' > <button className='JOIN-Button1'>  JOIN NOW</button> </Link>


    </div >
</fieldset >

<fieldset className='subHeading-fieldset'>
    <div className='Subheading'>
<div >
    {user &&(
<
     <h1 className='profileCaption'style ={{color:'white'}}>{user?.displayName}</h1>
        <img className='profileiMAGE'src ={user?.photoURL }alt ='idk'/>
    )
    }
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