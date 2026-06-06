import React,{useState}from 'react';
import { Link } from "react-router-dom";



function Signup() {
  const handelClick = (e)=>{
    e.preventDefault();
    if (email.trim() ===''){
      alert('Email Required.');
      return;
    }
    if(password.trim() === ''){
      alert('Password Required.');
      return;
    }
    if(confirmpassword !== password){
      alert('Confirm password shold be same as password.');
    }
    if(password.length < 6){
      alert("Password must be at least 6 characters.");
      return;
    }
    if (!email.includes("@")) {
  alert("Please enter a valid email.");
  return;
}
    console.log('worked')
  }
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpassword,setConfirmPassword] = useState("");
  return (
    <main>
        <div className='card-signup'>
          <span className='card-header'>
            <img src='image.png' alt='logo' className='card-logo-signup'/>
            <h1 className='card-title-signup'>Create your account</h1>
          </span>
          <form onSubmit={handelClick}>
          <label>Username:</label>
          <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>

          <label>Email Address:</label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br></br>
          <label>Password:</label>
          <input type='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <label>Confirm Password:</label>
          <input type='password'value={confirmpassword} onChange={(e)=>setConfirmPassword
            (e.target.value)}/>

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
