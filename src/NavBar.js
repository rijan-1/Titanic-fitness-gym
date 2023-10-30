import './NavBar.css'

import {Link} from 'react-router-dom'


export function Navbar(){
    return(
<div className='background-image'>
<fieldset className='header-fieldset'>
    <div className='header'>


        <Link to='/'><button className='FIND-A-GYM-Button'> HOME</button></Link>

        <select className='EXPORE-Button'> 
        <option>EXPLORE</option>
        <option>Contact Us</option>
        <option><p>Fitness Classes</p></option>
        <option>FAQ</option>
        <option>Student Gym Membership</option>
        <option>Workout Videos</option>
        <option>Heathly eating advice</option>
        </select>
       

        <button className='LOGIN-Button'> LOGIN</button>


        <Link to='/Membership/Membership' > <button className='JOIN-Button1'>  JOIN NOW</button> </Link>


    </div >
</fieldset >

<fieldset className='subHeading-fieldset'>
    <div className='Subheading'>
        <button >Memberships</button>
        <button>Facilities</button>
        <button>What makes us different?</button>

        <button>Timetable</button>

        <button>Reviews</button>

    </div>

</fieldset >
</div>
)
}