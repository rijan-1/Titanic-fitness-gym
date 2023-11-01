export function Payment() {
    return (
      <div className='body'>
        <form>
          <fieldset>
            <label for='FirstName'>First Name: <input type='text' id='FirstName' /></label>
            <label for='LastName'>Last Name: <input id='LastName' type='text' /></label>
            <label for='CardNumber'>Credit Card Number: <input type='text' id='CardNumber' /></label>
            <label for='AccountNumber'>Bank Account Number: <input class='bank-field' type='text' id='AccountNumber' /></label>

            <label for='SecurityCode'>Security code: <input type='password' id='SecurityCode' /></label>
            <div className='sortcode-expirydate'>
    <label for='ExpiryDate'>Expiry Date: <input style={{ width: '40%' }} type='date' id='ExpiryDate' /></label>
    <label for='SortCode'>Bank Card Sort Code: <input class='bank-field' type='text' id='SortCode' style={{ width: '40%' }} /></label>
</div>
           
          </fieldset>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }