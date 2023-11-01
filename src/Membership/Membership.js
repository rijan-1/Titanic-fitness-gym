// Membership.js
import './Membership.css';
import { Link } from 'react-router-dom';

export function Membership() {
    return (
        <div className='MainMenu'>
            <h1 className='MembershipHeading'>Gym Membership</h1>

            <div className='box'>
                <h2>Off peak</h2>
                <h3>From Only £14.99 a Month</h3>
                <p className='p1'>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut perspiciatis unde omnis iste natus error sit voluptatem..."
                </p>
                <Link to="/Membership/Location"><button className='button'>Choose Plan</button></Link>
            </div>

            <div className='box'>
                <h2>Standard</h2>
                <h3>From £21.99 a Month</h3>
                <p className='p2'>
                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <Link to="/Membership/Location"><button className='button'>Choose Plan</button></Link>
            </div>

            <div className='box'>
                <h2>Plus</h2>
                <h3>From £27.99 a Month</h3>
                <p className='p3'>
                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <Link to="/Membership/Location"><button className='button'>Choose Plan</button></Link>
            </div>
        </div>
    );
}