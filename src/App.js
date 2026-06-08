
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.js';
import Start from './Start.js';
import Signup from "./pages/Signup.js";
import ForgotPassword from "./pages/ForgotPassword.js"
import PlayingStage from "./game/PlayingStage.js";
import Win from './pages/Win.js';
import Lose from './pages/Lose.js';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/forgot-password" element = {<ForgotPassword/>}/>
        <Route path="/game" element={<Start />} />
        <Route path="/play" element={<PlayingStage/>}/>
        <Route path="/win" element={<Win/>}/>
        <Route path="/lose" element={<Lose/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
