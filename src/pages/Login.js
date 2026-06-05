import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent reload 
    console.log("Login clicked");
  };

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
          <input type="email" required />

          <label>Password:</label>
          <input type="password" required />

          <Link to="/forgot-password" className="Span">
            Forgot Password?
          </Link>

          <button type="submit">
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