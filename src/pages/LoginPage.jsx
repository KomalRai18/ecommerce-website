import React from 'react'
import '../CSS/Login.css'
const LoginPage = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className='login-feilds'>
          <input type="name"  name='name' placeholder='Your name'/>
          <input type="email" name='email' placeholder='Email'/>
          <input type="password" name='password'placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='account'>
          Already have an account ? <span>Login</span>
        </p>
        <div className='term-and-condition'>
          <input type="checkbox" name='terms' height='25px'/>
          <p>By Continuing, I agree to all terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage