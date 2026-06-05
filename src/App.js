
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.js';
import Start from './Start.js';
import Signup from "./pages/Signup.js";
import ForgotPassword from "./pages/ForgotPassword.js"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/forgot-password" element = {<ForgotPassword/>}/>
        <Route path="/game" element={<Start />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
