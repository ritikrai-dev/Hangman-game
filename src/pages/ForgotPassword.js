import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    
       <div className='card-forget'>
          <span className='card-header'>
            <img src='image.png' alt='logo' className='card-logo-signup'/>
            <h1 className='card-title-signup'>Forgot Password</h1>
          </span>
          <h2 className="H1">Don't worry! Enter your email and we'll send you a password reset link.</h2>
          <form>
          <label>Email Address:</label>
          <input type='email'/>
          <br></br>
          <button>Send Reset Link</button>
          </form>
          <Link to="/">
            <p className="Span">
            ← Back to Login
            </p>
          </Link>
        </div>
    
  )
}

export default ForgotPassword
