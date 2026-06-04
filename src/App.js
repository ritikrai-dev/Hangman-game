
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.js';
import Start from './Start.js';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={<Start />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
