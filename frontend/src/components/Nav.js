import { useState } from "react";
import styles from "./Nav.module.css";

function Nav() {
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
        <input
          className={`${inp} ${isInputFocused ? input_clicked : input}`}
          type="text"
          placeholder="Enter the text"
          name="searchBar"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
      <div className={sign}>
        <button className={`${btn} ${signIn}`}>Sign In</button>
        <button className={`${btn} ${signUp}`}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Nav;
