import React from "react";
import "./signup.css";
const SignupForm = ()=>{
    const handleFormSubmit = ()=>{
        console.log("yay");
    }
    return (
        <div className="signup-container">
            <div className="signup-box">
            <div className="left-side">
                <div className="left-heading">
                    Already have an account?
                </div>
                <div className="signinLeft">
                    <button className="btn btn-1 signin-button hover-slide-left">Sign-in</button>
                </div>
            </div>
            <div className="form-signup">
                <div className="signup-heading">
                    SignUp
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-box">
                        <span>Name</span>
                        <input type="text" name="Name" required="required" />
                    </div>
                    <div className="input-box">
                    <span>Email</span>
                        <input type="email" name="Email" required="required" />
                    </div>
                    <div className="input-box">
                    <span>Password</span>
                        <input type="password" name="password" required="required" />
                    </div>
                    <div className="input-box">
                        <span>College Name</span>
                        <input type="text" name="College Name" required="required" />
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="Sign-up"/>
                    </div>
                    
                </form>
            </div>
            </div>
        </div>
    );
};

export default SignupForm;