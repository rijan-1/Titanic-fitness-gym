import "./Payments.css"


export function Payment() {
    return (
      <div className='bodyPayment'>
        <h1 style={{marginTop:'0px'}}>Payment Details</h1>
        <form className="payment-form">
          <fieldset>
            <label className="payment-label" for='FirstName'>Full Name: <input className="payment-input" type='text' id='FirstName' placeholder='Enter Your Full Name'/></label>
      
            <label className="payment-label" for='CardNumber'>Credit Card Number: <input className="payment-input" type='text' id='CardNumber'  placeholder='Enter Your 16 digit card number'/></label>
            <label className="payment-label" for='AccountNumber'>Bank Account Number: <input  placeholder='Enter Your 8 digit account number' style={{ height: '25px' }} className="payment-input" class='bank-field' type='text' id='AccountNumber' /></label>

            <label className="payment-label" for='SecurityCode'>Security code: <input placeholder='Enter Your 3 digit security code' style={{width:'10%'}}className="payment-input" type='password' id='SecurityCode' /></label>
            <div className='sortcode-expirydate'>
    <label className="payment-label" for='ExpiryDate'>Expiry Date: <input className="payment-input" style={{ width: '40%' }} type='date' id='ExpiryDate' /></label>
    <label className="payment-label"for='SortCode'>Sort Code: <input className="payment-input"  type='text' id='SortCode' style={{ width: '20%' }} /></label>
</div>
           
          </fieldset>
          <input className='PaymentSubmit'type='submit' value='Submit'/>
        </form>
      </div>
    );
  }