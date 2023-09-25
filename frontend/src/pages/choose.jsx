import React from "react";
import "./choose.css"
import { Navigate, useNavigate } from "react-router-dom";
const Choose=()=>{
    const Navigate = useNavigate();
    const handleSignup1 = () =>{
        Navigate("/signup/univ")
    }
    const handleSignup2 = () =>{
        Navigate("/signup/user")
    }
    return(
        <div className="choose-container">
            <div className="left-choose">
                <h1>For Universities</h1>
                <p>Join us and showcase your Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur!</p>
                <button onClick={handleSignup1} className="choose-signup1">Signup</button>
            </div>
            <div className="right-choose">
            <h1>For Students</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quos possimus, adipisci facere velit quis error quam maxime </p>
            <button onClick={handleSignup2} className="choose-signup2">Signup</button>
            </div>
        </div>
    );
};
export default Choose;