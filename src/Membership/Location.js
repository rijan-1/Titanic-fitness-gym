import './Location.css'
import {Link} from 'react-router-dom'

export function GymLocation(){
    return(
        <div className='Menu1'>
            <h1 className='Heading'>Choose Your gym</h1>
            <select className='selectGym'>
                <option>Choose a Location</option>
                <option>Uxbridge</option>
                <option>Southall</option>
                <option>Wembley</option>
                <option>Watford</option>
                <option>Northwood</option>
            </select>
            
            <Link to='/Membership/Register'><button>Submit</button></Link>


            
        </div>
    )
}