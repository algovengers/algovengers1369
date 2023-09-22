import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import UnivSignup from "./pages/univSignup";
import Choose from "./pages/choose";
import SignupForm from "./pages/signup";
import Signin from "./pages/signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Signin />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
