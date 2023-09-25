import { useState } from "react";
import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

function StudentListNav() {
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
  const handleSignout = () =>{
    Navigate("/")
  }

  return (
    <nav className={navBar}>
      <div className={logo}>
      <img src="../logo4b.png" alt="" />
      </div>
      <div className={isInputFocused ? searchBox_clicked : searchBox}>
        <p
          className={ input}
         style={{fontSize:"1.5rem"}}   
        >Student List</p>
      </div>
      <div className={sign}>
        <button onClick={handleSignout} style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"0.4rem"}} className={`${btn} ${signIn}`}>Sign Out</button>
      </div>
    </nav>
  );
}

export default StudentListNav;
