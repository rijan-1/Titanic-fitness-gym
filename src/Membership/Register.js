import './Register.css'
import {Link} from 'react-router-dom'



export function RegisterPage() {
    return (
      <div className='Menu'>
        <h1>Registration Form</h1>
        <form >
            <fieldset>
                <label for='First-Name'>Enter Your First Name: <input id='First-Name'type='text' placeholder='FirstName' /></label>
                <label for='Last-Name'>Enter Your Last Name: <input id='Last-Name' type='text' placeholder='LastName' /></label>
                <label for='Email'>Enter Your Email: <input id='Email' type='email' placeholder='Email' /></label>
                <label for='Password'>Create a New Password: <input id='Password' type='password' placeholder='New Password' minlength='8' maxlength='55' /></label>
                <label for='PhoneNumber'>Phone Number: <input id='PhoneNumber' type='text' placeholder='Phone Number' /></label>
                <label for='Address'>Address: <input id='Address' type='text' placeholder='Address' /></label>
                <label for='PostCode'>PostCode: <input id='PostCode' type='text' placeholder='PostCode' /></label>
                <label for='DOB'>Date of Birth: <input id='DOB' placeholder='Date of Birth' type='date' ></input></label>
                

            </fieldset>
            <hr/>
            <fieldset className='gender'>
            <legend>Gender: </legend>
            <label for='male'>Male<input type='radio' name='gender' id='male' className='inline'/></label>
            <label for='female' >Female<input type='radio' name='gender' id='female' className='inline'/></label>

            </fieldset>
            <hr/>
            <fieldset >
            <legend>Do you require disabled access? </legend>
            <label for='yesdisability'>Yes<input id='yesdisability' type='radio' /></label>
            <label for='nodisability'>No<input id='nodisability' type='radio'/></label>
            </fieldset>
            <fieldset>
            <Link to='/Pages/Payments'><input type='submit' value='Submit'/></Link>
            </fieldset>
            
          
        </form>

    </div>
     )
    }