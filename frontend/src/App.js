import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./signin";
import UnivSignup from "./univSignup";
import Choose from "./choose";
import SignupForm from "./signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signin" element={<Signin/>} />
        <Route path="choose" element={<Choose/>}/>
        <Route path="SignUp/User" element={<SignupForm/>}/>
        <Route path="SignUp/University" element={<UnivSignup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
