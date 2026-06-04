import React from 'react'

function Login() {
  return (
    <main>
        <div className='card'>
          <span className='card-header'>
            <img src='image.png' alt='logo' className='card-logo'/>
            <h1 className='card-title'>Hangman Challenge</h1>
          </span>

          <h1 className='H1'>Welcome Back !</h1>
          <label>Email Address:</label>
          <input type='email'/>
          <br></br>
          <label>Password:</label>
          <input type='password'/>
          <br></br>
          <span className='Span'>Forget Password ?</span>

          <button>Log in</button>

          <span className='Span'>Don't have an account? Sign Up</span>
          
        </div>
    </main>
  )
}

export default Login
