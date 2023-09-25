import { useState } from "react";
import styles from "./Nav.module.css";
import { Navigate, useNavigate } from "react-router-dom";
function Nav() {
  const Navigate = useNavigate();
  const {
    navBar,
    logo,
    searchBox,
    sign,
    btn,
    signIn,
    signUp,
    input,
    input_clicked,
    inp,
    searchBox_clicked,
  } = styles;

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  const handleSignin= ()=>{
    Navigate("signin")
  };
  const handleSignUp = () =>{
    Navigate("choose");
  }
  return (
    <nav className={navBar}>
      <div className={logo} >
        <img src="./logo4b.png" alt="" />
      </div>
      <div className={isInputFocused ? searchBox_clicked : searchBox}>
        <input
          className={`${inp} ${isInputFocused ? input_clicked : input}`}
          type="text"
          placeholder="Search"
          name="searchBar"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      <div className={sign}>
        <button onClick={handleSignin} className={`${btn} ${signIn}`} style={{cursor:`pointer`}}>Sign In</button>
        <button onClick={handleSignUp} className={`${btn} ${signUp}`} style={{cursor:`pointer`}}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Nav;
