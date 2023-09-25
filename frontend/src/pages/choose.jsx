import React from "react";
import "./choose.css"
import { Navigate, useNavigate } from "react-router-dom";
const Choose = () => {
    const Navigate = useNavigate();
    const handleSignup1 = () => {
        Navigate("/signup/univ")
    }
    const handleSignup2 = () => {
        Navigate("/signup/user")
    }
    return (
        <div className="choose-container">
            <div className="left-choose">
                <h1>For Universities</h1>
                <p>Universities, join us now to empower your students by showcasing their projects globally. Join our vibrant community today!</p>
                <button onClick={handleSignup1} className="choose-signup1">Signup</button>
            </div>
            <div className="right-choose">
                <h1>For Students</h1>
                <p>Student looking to showcase your projects? Join us to connect with peers from your university for collaborative opportunities!</p>
                <button onClick={handleSignup2} className="choose-signup2">Signup</button>
            </div>
        </div>
    );
};
export default Choose;