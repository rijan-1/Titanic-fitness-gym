import './Login.css'
 import {auth, provider} from '../Pages/config'

 import {signInWithPopup} from 'firebase/auth'

import {useNavigate} from 'react-router-dom'

export function LoginPage(){

const navigate =useNavigate()

const handleLogin= async()=>{

    const result = await signInWithPopup(auth, provider)
    console.log(result)
    navigate('/')
}

    return(
        <div className='LoginBody'>

        <button className='LoginButton'onClick={handleLogin}>Google Login</button>

      

        </div>
      


    )
}