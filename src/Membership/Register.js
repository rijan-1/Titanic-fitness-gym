
import './Register.css';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <div className='Menu'>
      <h1 className='regsterationform'>Registration Form</h1>
      <form>
        <fieldset>
          <label htmlFor='First-Name'>Enter Your First Name:</label>
          <input id='First-Name' type='text' placeholder='FirstName' />
          
          <label htmlFor='Last-Name'>Enter Your Last Name:</label>
          <input id='Last-Name' type='text' placeholder='LastName' />
          
          <label htmlFor='Email'>Enter Your Email:</label>
          <input id='Email' type='email' placeholder='Email' />
          
          <label htmlFor='Password'>Create a New Password:</label>
          <input id='Password' type='password' placeholder='New Password' minLength='8' maxLength='55' />
          
          <label htmlFor='PhoneNumber'>Phone Number:</label>
          <input id='PhoneNumber' type='text' placeholder='Phone Number' />
          
          <label htmlFor='Address'>Address:</label>
          <input id='Address' type='text' placeholder='Address' />
          
          <label htmlFor='PostCode'>PostCode:</label>
          <input id='PostCode' type='text' placeholder='PostCode' />
          
          <label htmlFor='DOB'>Date of Birth:</label>
          <input id='DOB' type='date' />
        </fieldset>
        
        <hr />
        
        <fieldset className='gender'>
          <legend>Gender:</legend>
          <label className='inline' htmlFor='male'>Male</label>
          <input type='radio' name='gender' id='male' />
          <label className='inline' htmlFor='female'>Female</label>
          <input type='radio' name='gender' id='female' />
        </fieldset>
        
        <hr />
        
        <fieldset>
          <legend>Do you require disabled access?</legend>
          <label class='inline' htmlFor='yesdisability'>Yes</label>
          <input id='yesdisability' type='radio' />
          <label class='inline' htmlFor='nodisability'>No</label>
          <input id='nodisability' type='radio' />
        </fieldset>
        
        <fieldset>
          <Link to='/Pages/Payments'><input type='submit' value='Submit' /></Link>
        </fieldset>
      </form>
    </div>
  );
}