import React, { useState } from "react";
import "./signin.css";
import { Navigate, useNavigate } from "react-router-dom";
const Signin = () => {
  const [email,setEmail] = useState("");
  const Navigate = useNavigate();
  const handleSignin = (em) => {
    if(em=="tmsl@tmsl.com"){
      Navigate("/CollegePanel");
    }
    else{
      Navigate("/Student");
    }
  };
  const handleSignUp = () => {
      Navigate("/choose")
  };
  return (
  
    <div className="signin-container">
      <div className="signin-box">
        <div className="form-signin">
          <div className="signin-heading">SignIn</div>
          <form onSubmit={()=>handleSignin(email)}>
            <div className="input-signin">
              <span>Email</span>
              <input type="text" name="Email" onChange={(e)=>setEmail(e.target.value)} required="required" />
            </div>
            <div className="input-signin">
              <span>Password</span>
              <input type="text" name="passsword" required="required" />
            </div>
            <div className="submit-signin">
              <input type="submit" value="Sign-in" />
            </div>
          </form>
        </div>
        <div className="right-side">
          <div className="right-heading">Don't have an account?</div>
          <div className="signupRight">
            <button onClick={handleSignUp} className="signup-button-right">Sign-Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
