import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

const Login = () => {
  const [FirstName, setFirstName] = useState('');
  const [SecondName, setSecondName] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(Email, password)
      .then((auth) => {
        if (auth) {
          navigate('/'); // Redirect to home on successful login
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.message);
        alert("Please Enter Correct Details?"); // Display error to the user
      });
  };

  const Register = e =>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(Email,password)
    .then((auth) => {
      console.log(auth)
      //if the history is not empty redirect the url to home

      if (auth) {
        navigate('/')
      }
    })
    .catch(error => alert("Please Enter  Valid Details To Continue your Registration?"))
     
  }

  return (
    <div className='login'>
      <h3>Sign-in</h3>
      <div className='login_form'>
        <form>
          <h5>First Name</h5>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            value={FirstName}
            placeholder='First Name'
          />
          <h5>Second Name</h5>
          <input
            onChange={(e) => setSecondName(e.target.value)}
            type='text'
            value={SecondName}
            placeholder='Second Name'
          />
          <h5>E-mail</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            value={Email}
            placeholder='E-mail'
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
            placeholder='Password'
          />
          <button onClick={SignIn} className='signBtn' type='submit'>
            Sign-in
          </button>

          <p>If you have an account, please Register.</p>
          <button onClick={Register} className='signBtn' type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;