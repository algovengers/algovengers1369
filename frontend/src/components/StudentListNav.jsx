import { useState } from "react";
import styles from "./Nav.module.css";

function StudentListNav() {
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

  return (
    <nav className={navBar}>
      <h1 className={logo}>LOGO</h1>
      <div className={isInputFocused ? searchBox_clicked : searchBox}>
        <p
          className={ input}
         style={{fontSize:"1.5rem"}}   
        >Student List</p>
      </div>
      <div className={sign}>
        <button style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"0.4rem"}} className={`${btn} ${signIn}`}>Techno India<span class="material-symbols-outlined" >power_settings_new</span></button>
      </div>
    </nav>
  );
}

export default StudentListNav;
