import "./Payments.css"


export function Payment() {
    return (
      <div className='bodyPayment'>
        <h1 style={{marginTop:'0px'}}>Payment Details</h1>
        <form className="payment-form">
          <fieldset>
            <label className="payment-label" for='FirstName'>First Name: <input className="payment-input" type='text' id='FirstName' /></label>
            <label className="payment-label" for='LastName'>Last Name: <input className="payment-input" id='LastName' type='text' /></label>
            <label className="payment-label" for='CardNumber'>Credit Card Number: <input className="payment-input" type='text' id='CardNumber' /></label>
            <label className="payment-label" for='AccountNumber'>Bank Account Number: <input className="payment-input" class='bank-field' type='text' id='AccountNumber' /></label>

            <label className="payment-label" for='SecurityCode'>Security code: <input className="payment-input" type='password' id='SecurityCode' /></label>
            <div className='sortcode-expirydate'>
    <label className="payment-label" for='ExpiryDate'>Expiry Date: <input className="payment-input" style={{ width: '40%' }} type='date' id='ExpiryDate' /></label>
    <label className="payment-label"for='SortCode'>Bank Card Sort Code: <input className="payment-input" class='bank-field' type='text' id='SortCode' style={{ width: '40%' }} /></label>
</div>
           
          </fieldset>
          <input className='PaymentSubmit'type='submit' value='Submit'/>
        </form>
      </div>
    );
  }