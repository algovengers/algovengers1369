import React from "react";
import "./signin.css";
const Signin = () => {
  const handleSignin = () => {
    console.log("yaya");
  };
  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="form-signin">
          <div className="signin-heading">SignIn</div>
          <form onSubmit={handleSignin}>
            <div className="input-signin">
              <span>Email</span>
              <input type="text" name="Email" required="required" />
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
            <button className="signup-button-right">Sign-Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
