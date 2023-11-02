
import './Register.css';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <div className='Menu'>
      <h1 className='regsterationform'>Registration Form</h1>
      <form>
        <fieldset>
          <label className='RegisterLabel' htmlFor='First-Name'>Enter Your First Name:
          <input className='RegisterInput'id='First-Name' type='text' placeholder='FirstName' /></label>
          
          <label className='RegisterLabel' htmlFor='Last-Name'>Enter Your Last Name:
          <input className='RegisterInput'id='Last-Name' type='text' placeholder='LastName' /></label>
          
          <label className='RegisterLabel' htmlFor='Email'>Enter Your Email:
          <input className='RegisterInput' id='Email' type='email' placeholder='Email' /></label>
          
          <label className='RegisterLabel'htmlFor='Password'>Create a New Password:
          <input className='RegisterInput'id='Password' type='password' placeholder='New Password' minLength='8' maxLength='55' /></label>
          
          <label className='RegisterLabel'htmlFor='PhoneNumber'>Phone Number:
          <input className='RegisterInput'id='PhoneNumber' type='text' placeholder='Phone Number' /></label>
          
          <label className='RegisterLabel' htmlFor='Address'>Address:
          <input className='RegisterInput'id='Address' type='text' placeholder='Address' /></label>
          
          <label className='RegisterLabel' htmlFor='PostCode'>PostCode:
          <input className='RegisterInput'id='PostCode' type='text' placeholder='PostCode' /></label>
          
          <label htmlFor='DOB'>Date of Birth:
          <input id='DOB' type='date' /></label>
        </fieldset>
        
        <hr />
        
        <fieldset className='gender'>
          <legend>Gender:</legend>
          <label className='inline' htmlFor='male'>Male
          <input type='radio' name='gender' id='male' /></label>
          <label className='inline' htmlFor='female'>Female
          <input type='radio' name='gender' id='female' /></label>
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