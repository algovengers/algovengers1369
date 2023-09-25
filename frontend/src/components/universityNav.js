import { useState } from "react";
import styles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";

function UniNav() {
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
  const Navigate = useNavigate();
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleSignout= () =>{
    Navigate("/")
  }
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <nav className={navBar}>
      <div className={logo}><img src="./logo4b.png" alt="" /></div>
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
        <button onClick={handleSignout} style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"0.4rem"}} className={`${btn} ${signIn}`}>Sign Out</button>
      </div>
    </nav>
  );
}

export default UniNav;
