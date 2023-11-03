
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
          
          <label className='RegisterLabel' htmlFor='PostCode'style={{display:'inline-block', marginRight:'50px'}}>PostCode:
          <input className='RegisterInput'id='PostCode' type='text' placeholder='PostCode' style={{marginBottom:'40px',width:'150px',marginLeft:'10px'}}/></label>
          
          <label htmlFor='DOB'>Date of Birth:
          <input id='DOB' type='date' style={{marginBottom:'30px',marginLeft:'10px'}} /></label>
        </fieldset>
        
        <hr />
        
        <fieldset className='gender' >
          <legend style={{marginBottom:'25px'}}>Gender:</legend>
          <label className='inline' htmlFor='male'>Male
          <input type='radio' name='gender' id='male' style={{marginRight:'30px'}}/></label>
          <label className='inline' htmlFor='female'>Female
          <input type='radio' name='gender' id='female' /></label>
        </fieldset>
        
        <hr />
        
        <fieldset >
          <legend style={{marginBottom:'25px'}}>Do you require disabled access?</legend>
          <label class='inline' htmlFor='yesdisability' >Yes</label>
          <input id='yesdisability' type='radio' name='Disibilityquestion' ClassName='DisabledAccess' style={{marginRight:'30px'}}/>
          <label class='inline' htmlFor='nodisability' >No</label>
          <input id='nodisability' type='radio' ClassName='DisabledAccess' name='Disibilityquestion'/>
        </fieldset>
        
        <fieldset>
          <Link to='/Pages/Payments'><input type='submit' value='Submit'className='ButtonRegister' /></Link>
        </fieldset>
      </form>
    </div>
  );
}