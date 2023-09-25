import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import UnivSignup from "./pages/univSignup";
import SignupForm from "./pages/signup";
import Signin from "./pages/signin";
import Choose from "./pages/choose";
import CollegePanel from "./pages/CollegePanel";
import StudentDashboard from "./pages/StudentDashboard"
import StudentListPage from "./pages/StudentListPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/user" element={<SignupForm />} />
        <Route path="/signup/univ" element={<UnivSignup />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/CollegePanel" element={<CollegePanel />} />
        <Route path="/Student" element={<StudentDashboard />} />
        <Route path="/CollegePanel/StudentList" element={<StudentListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
