import React from 'react'
import { Link , useNavigate, useResolvedPath } from 'react-router-dom';
import './login.css'
import { useState } from "react";
import { auth } from './firebase'

function Loginsignup() {
  const navigate = useNavigate();
     // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signIn = async (e) => {
    e.preventDefault();
   try{
    const  resp = await auth.signInWithEmailAndPassword(email, password)
    if(useResolvedPath)
      navigate('/header')
   } 
   catch(error){
    alert(error.message)
   }
  }

   
const register =async e =>{
  e.preventDefault();
  try{
  const resp = auth.createUserWithEmailAndPassword(email, password)
 if (resp)  {
    console.log(auth);
    if(auth) {
      navigate('/');
    }
  }
}
  catch(error){
    alert(error.message)
  }

  //fancy firebase register
}

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
 

 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
 setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h3>User {name} successfully registered!!</h3>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <p>Please enter all the fields</p>
      </div>
    );
  };
 

  return (
    <div className='container' style= {{paddingLeft: '150px', paddingTop:'40px'}}> 
    <div className="form" >
      <h2>User Registration</h2>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        {/* Labels and inputs for form data */}
    
      
 <div>   
  <div className='input'>
       <div> <label className="label">Email</label></div>
       <div> <input onChange={handleEmail} className="input"
          value={email} type="email" /></div>
  </div>
 </div>
 <br></br>
 
 <div className='input'>
      <div><label className="label">Password</label></div>  
      <div> <input onChange={handlePassword} className="input"
          value={password} type="password" />
  </div>
 </div>
        <button onClick={register} className="btn1" type="submit">
          Register
        </button><button type='submit' onClick={signIn} className="btn1" >
          Sign In
        </button>
      </form>
    </div>
    </div>
  )
}

export default Loginsignup