import React from "react";
import "./choose.css"
const Choose=()=>{
    return(
        <div className="choose-container">
            <div className="left-choose">
                <h1>For Universities</h1>
                <p>Join us and showcase your Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur!</p>
                <button className="choose-signup1">Signup</button>
            </div>
            <div className="right-choose">
            <h1>For Students</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quos possimus, adipisci facere velit quis error quam maxime </p>
            <button className="choose-signup2">Signup</button>
            </div>
        </div>
    );
};
export default Choose;