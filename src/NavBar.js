import { Link } from 'react-router-dom';
import { auth } from './config/firebase';
import {signOut} from 'firebase/auth'

export function NavbarPage() {

const handleSignOut = async() =>{
   await signOut(auth)
}
  return (
    <div>
      <Link to='/pages/Login'>
        <button>Login</button>
      </Link>

      <Link to='/'>
        <button>HomePage</button>
      </Link>

      <div>
        
       
            <h3>{auth.currentUser?.displayName}</h3>
            <img src={auth.currentUser?.photoURL} width="100" height="100" alt="" />
            <button onClick={handleSignOut}>Sign Out</button>
         
          
        
      </div>
    </div>
  );
}
