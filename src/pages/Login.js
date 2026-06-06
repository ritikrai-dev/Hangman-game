import { Link } from "react-router-dom";
import React, {useState} from "react";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent reload

    if (email.trim() ===''){
      alert('Email Required');
      return;
    }
    if(password.trim() === ''){
      alert('Password Required');
      return;
    }
    if(password.length < 6){
      alert("Password must be at least 6 characters");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    console.log("submitted")
  };
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  return (
    <main>
      <div className="card">

        <div className="card-header">
          <img src="image.png" alt="logo" className="card-logo" />
          <h1 className="card-title">Hangman Challenge</h1>
        </div>

        <h1 className="H1">Welcome Back!</h1>

        <form onSubmit={handleSubmit}>

          <label>Email Address:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

          <label>Password:</label>
          <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <Link to="/forgot-password" className="Span">
            Forgot Password?
          </Link>

          <button type="submit" >
            Log In
          </button>

        </form>

        <Link to="/signup">
          <p className="Span">
            Don't have an account?{" "}
              Sign Up
          </p>
        </Link>

      </div>
    </main>
  );
}

export default Login;