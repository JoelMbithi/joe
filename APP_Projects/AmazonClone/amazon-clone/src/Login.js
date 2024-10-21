
import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from './firebase';
function Login() {
   
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  // button to signIn
  const sigIn = e =>{
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      navigate('/')
    })
    .catch(error => alert('Incorrect Details Please Check and try again'))
  }

  const register = e => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email, password)
   .then((auth) =>{
        console.log(auth)
        if (auth) {
          navigate('/')
        }
    })
    .catch(error => alert('Incorrect Details Please Check and try again'))
  }

  return (
    <div className='login'>
        <Link to="/">
      <img className='login_logo' src='./image/login_logo.png' alt='login_logo' />
       </Link>
       <div className='login_container'>
       <h1>Sign-in</h1>
       <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={
            e => setEmail(e.target.value)
            }/>

        <h5>Password</h5>
        <input type='password' value={password} onChange={
            e => setPassword (e.target.value)
        } />
        <button onClick={sigIn} type='submit' className='login_signInButton'>Sign In</button>
       </form>

       <p>
        By signin you agree to Amazon's Clone Condition of Use & Sale. Please see our Privacy Notice,cour Cookies Notice and our Interest-Based Ads Notice.
        </p>


        <button onClick={register} type='submit' className='login_registerButton'>Create your Amazon Account</button>
       </div>
    </div>
  )
}

export default Login
