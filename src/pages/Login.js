
import {auth, provider} from '../config/firebase'

import {signInWithPopup} from 'firebase/auth'

import {useNavigate} from 'react-router-dom'

export function LoginPage(){

    const navigate = useNavigate()

const HandleAuth=()=>{

   
    const result = signInWithPopup(auth, provider).then((res)=> res.data)
    console.log(result)
    navigate('/')
}   
        

    

    return(
        <div>
        <h1> Sign in with google to continue</h1>
        <button onClick={HandleAuth}>Sign in</button>
       
        </div>
    )
}