import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import styles from "./Homepage.module.css";
import descriptionImage from "../assets/image.jpg";
import SideBar from "../components/sideBar";

const { main, header, teamLogo, project, nameDiv, descriptionDiv, bo } = styles;

function Main() {
  const [apiData, setApiData] = useState([]);

  useEffect(function () {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      });
  }, []);

  return (
    <div className={main}>
      {apiData.map((item) => (
        <MainComponent
          teamName={item.teamName}
          name={item.name}
          description={item.description}
          collegeName={item.collegeName}
          key={item.teamName}
        />
      ))}
    </div>
  );
}

function MainComponent({ name, teamName, description, collegeName }) {
  return (
    <div className={project}>
      <div className={header}>
        <div className={teamLogo}>R</div>
        <div className={nameDiv}>
          <h2>{name}</h2>
          <div>
            <h3>{teamName}</h3>
            <h4>{collegeName}</h4>
          </div>
        </div>
      </div>
      <div className={descriptionDiv}>
        <img src={descriptionImage} alt="descriptionImage" />
        <p>{description}</p>
      </div>
    </div>
  );
}

function Homepage() {
  return (
    <>
      <Nav />
      <div className={bo}>
        <Main />
        <SideBar />
      </div>
    </>
  );
}
export default Homepage;
