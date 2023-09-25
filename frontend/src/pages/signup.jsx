import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
const SignupForm = ()=>{
    const handleFormSubmit = ()=>{
        console.log("yay");
    }
    const Navigate = useNavigate();
const handleSignin = () =>{
    Navigate("/signin");
}
    return (
        <div className="signup-container">
            <div className="signup-box">
            <div className="left-side">
                <div className="left-heading">
                    Already have an account?
                </div>
                <div className="signinLeft">
                    <button style={{cursor:`pointer`}} onClick={handleSignin} className=" signin-button hover-slide-left">Sign-in</button>
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
                        <input style={{cursor:`pointer`}} type="submit" value="Sign-up"/>
                    </div>
                    
                </form>
            </div>
            </div>
        </div>
    );
};

export default SignupForm;