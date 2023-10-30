import './Membership.css';
import { Link } from 'react-router-dom';

export function Membership() {
    return (
        <div className='MainMenu'>
            <h1 className='MembershipHeading'>Gym Membership</h1>

            <div className='Box1'>
                <h2>Off peak</h2>
                <h3>From Only £14.99 a Month</h3>
                <p className='p1'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem "Sed ut perspiciatis 
                    unde omnis iste natus error sit voluptatemdddddddede3gkueygvciluerlgfcqkeruygciluerglivr
                    eflvfglierqgvilyefruvcleirgvcigerligvcylerlycgierqgcvygeilygcrr.
                </p>
                <Link to="/Membership/Location"><button className='Button1'>Choose Plan</button></Link>
            </div>

            <div className='Box2'>
                <h2>Standard</h2>
                <h3>From £21.99 a Month</h3>
                <p className='p2'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatemdddddddede3gkueygvcilue
                    rlgfcqkeruygciluerglivreflvfglierqgvilyefruvcleirgvcigerligvcylerlycgierqgcvygeilygcrr...
                </p>
                <Link to="/Membership/Location"><button className='Button2'>Choose Plan</button></Link>
            </div>

            <div className='Box3'>
                <h2>Plus</h2>
                <h3>From £27.99 a Month</h3>
                <p className='p3'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem "Sed ut perspiciatis unde 
                    omnis iste natus error sit voluptatemdddddddede3gkueygvciluerlgfcqkeruygciluerglivr
                    eflvfglierqgvilyefruvcleirgvcigerligvcylerlycgierqgcvygeilygcrr.
                </p>
                <Link to="/Membership/Location"><button className='Button1'>Choose Plan</button></Link>
            </div>
            
        </div>
    );
}