import React from "react";
import "./univSignup.css";
const UnivSignup= ()=>{
    const handleFormSubmit = () =>{
        console.log("yo");
    }
    return(
        <div className="univ-signup-container">
                <div className="univ-signup-box">
            <div className="univ-left-side">
                <div className="univ-left-heading">
                    Already have an account?
                </div>
                <div className="univ-signinLeft">
                    <button className="univ-signin-button ">Sign-in</button>
                </div>
            </div>
            <div className="univ-form-signup">
                <div className="univ-signup-heading">
                    SignUp
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="univ-input-box">
                        <span>University Name</span>
                        <input type="text" name="Name" required="required" />
                    </div>
                    <div className="univ-input-box">
                    <span>University Email</span>
                        <input type="email" name="Email" required="required" />
                    </div>
                    <div className="univ-input-box">
                    <span>Password</span>
                        <input type="password" name="password" required="required" />
                    </div>
                    <div className="univ-input-box">
                        <span>UIP <em>(*Provided by us)</em> </span>
                        <input type="text" name="College Name" required="required" />
                    </div>
                    <div className="univ-submit-button">
                        <input type="submit" value="Sign-up"/>
                    </div>
                    
                </form>
            </div>
            </div>
        </div>
    );
};
export default UnivSignup;