import './Payments.css'


export function Payment(){
    return(
        <div className='body'>
            <form>
            <fieldset>
                <label for='FirstName'>First Name: <input type='text' id='FirstName'/> </label>
                <label for='LastName'>Last Name: <input id='LastName' type='text'/></label>
                <label for='CardNumber'>Credit Card Number: <input type='text' id='CardNumber'/></label>
                <label for='SecurityCode'>Security code: <input type='password' id='SecurityCode'/></label>
                <label for='Expiry date'>Expiry Date: <input type='date' id='Expiry date'/></label>

               
            </fieldset>
            </form>

        </div>
    )
}