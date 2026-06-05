import React from 'react';
import { Link } from "react-router-dom";


function Signup() {
  return (
    <main>
        <div className='card-signup'>
          <span className='card-header'>
            <img src='image.png' alt='logo' className='card-logo-signup'/>
            <h1 className='card-title-signup'>Create your account</h1>
          </span>
          <form>
          <label>Username:</label>
          <input type='email'/>

          <label>Email Address:</label>
          <input type='email'/>
          <br></br>
          <label>Password:</label>
          <input type='password'/>

          <label>Confirm Password:</label>
          <input type='password'/>

          <br></br>

          <button>Sign Up</button>

          </form>

          <Link to="/">
          <p className="Span">
          Already have an account?{" "}
            LogIn
        </p>
          </Link>
          
        </div>
    </main>
  )
}

export default Signup
