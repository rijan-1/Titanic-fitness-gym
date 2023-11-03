import './NavBar.css'

import {Link} from 'react-router-dom'



export function Navbar(){
    
    
    
 


    return(
<div className='background-image'>
<fieldset className='header-fieldset' >
    <div className='header'>


        <Link to='/'><button className='FIND-A-GYM-Button'> HOME</button></Link>

     

        <button className='LOGIN-Button'> LOGIN</button>


        <Link to='/Membership/Membership' > <button className='JOIN-Button1'>  JOIN NOW</button> </Link>


    </div >
</fieldset >

<fieldset className='subHeading-fieldset'>
    <div className='Subheading'>
   
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