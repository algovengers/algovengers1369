import { useState } from "react";
import Nav from "../components/Nav";
import styles from "./Homepage.module.css";
import descriptionImage from "../assets/image.jpg";
import SideBar from "../components/sideBar";

const { main, header, teamLogo, project, nameDiv, descriptionDiv, bo } = styles;

function Main() {
  const [apiData, setApiData] = useState([
    {
      name: "Innovative Web App",
      teamName: "Web Wizards",
      collegeName: "Tech University",
      description:
        "Our Innovative Web App is a modern solution for simplifying daily tasks. It features a user-friendly interface and powerful functionality to streamline your workflow.",
      startDate: "2023-02-10",
      endDate: "2023-12-31",
      categories: ["Web Development", "UI/UX"],
      technologiesUsed: ["React", "Node.js", "CSS Grid", "MongoDB"],
      teamMembers: [
        {
          name: "Alice Johnson",
          role: "Project Manager",
        },
        {
          name: "Bob Smith",
          role: "Frontend Developer",
        },
        {
          name: "Charlie Brown",
          role: "Backend Developer",
        },
      ],
      githubRepository: "https://github.com/webwizards/innovative-web-app",
      website: "https://www.innovativewebapp.com",
      contactEmail: "contact@innovativewebapp.com",
    },
    {
      name: "Smart Home IoT",
      teamName: "IoT Innovators",
      collegeName: "Tech Institute",
      description:
        "Our Smart Home IoT project brings automation and intelligence to your home. Control your devices remotely and enjoy a smarter, more connected lifestyle.",
      startDate: "2023-03-15",
      endDate: "2023-11-30",
      categories: ["IoT", "Home Automation"],
      technologiesUsed: ["Arduino", "Raspberry Pi", "MQTT", "React Native"],
      teamMembers: [
        {
          name: "Ella Davis",
          role: "Project Lead",
        },
        {
          name: "Frank Miller",
          role: "Embedded Systems Engineer",
        },
        {
          name: "Grace Wilson",
          role: "Mobile App Developer",
        },
      ],
      githubRepository: "https://github.com/iotinnovators/smart-home-iot",
      website: "https://www.smarthomeiot.com",
      contactEmail: "contact@smarthomeiot.com",
    },
    {
      name: "E-commerce Platform",
      teamName: "Shopify Stars",
      collegeName: "Business School",
      description:
        "Our E-commerce Platform empowers businesses to thrive in the online marketplace. It offers a feature-rich shopping experience for both customers and merchants.",
      startDate: "2023-04-20",
      endDate: "2023-10-15",
      categories: ["E-commerce", "Web Development"],
      technologiesUsed: ["Ruby on Rails", "React", "PostgreSQL"],
      teamMembers: [
        {
          name: "Olivia Adams",
          role: "Project Manager",
        },
        {
          name: "George White",
          role: "Full Stack Developer",
        },
        {
          name: "Hannah Lee",
          role: "UI/UX Designer",
        },
      ],
      githubRepository: "https://github.com/shopifystars/ecommerce-platform",
      website: "https://www.shopifystars.com",
      contactEmail: "contact@shopifystars.com",
    },
    {
      name: "AI Chatbot",
      teamName: "AI Enthusiasts",
      collegeName: "AI Institute",
      description:
        "Our AI Chatbot is an intelligent virtual assistant that provides natural language interactions and assists users with various tasks. It's designed to enhance user experiences.",
      startDate: "2023-06-05",
      endDate: "2023-12-31",
      categories: ["Artificial Intelligence", "Chatbots"],
      technologiesUsed: ["Python", "TensorFlow", "Natural Language Processing"],
      teamMembers: [
        {
          name: "James Smith",
          role: "Project Lead",
        },
        {
          name: "Sophia Johnson",
          role: "AI Researcher",
        },
        {
          name: "William Brown",
          role: "Frontend Developer",
        },
      ],
      githubRepository: "https://github.com/aienthusiasts/ai-chatbot",
      website: "https://www.aichatbot.ai",
      contactEmail: "contact@aienthusiasts.ai",
    },
    {
      name: "Mobile Game",
      teamName: "Game Changers",
      collegeName: "Game Development School",
      description:
        "Our Mobile Game is an addictive and fun gaming experience for players of all ages. It features exciting gameplay, stunning graphics, and challenging levels.",
      startDate: "2023-07-12",
      endDate: "2023-12-31",
      categories: ["Mobile Games", "Game Development"],
      technologiesUsed: ["Unity", "C#", "3D Graphics"],
      teamMembers: [
        {
          name: "Emma Wilson",
          role: "Game Designer",
        },
        {
          name: "Michael Davis",
          role: "Game Developer",
        },
        {
          name: "Ava Smith",
          role: "Graphics Artist",
        },
      ],
      githubRepository: "https://github.com/gamechangers/mobile-game",
      website: "https://www.mobilegame.com",
      contactEmail: "contact@mobilegame.com",
    },
    {
      name: "Health and Fitness App",
      teamName: "FitTech Innovations",
      collegeName: "Health Sciences Institute",
      description:
        "Our Health and Fitness App is your personal fitness companion. It offers workout plans, diet tracking, and health insights to help you achieve your fitness goals.",
      startDate: "2023-08-20",
      endDate: "2023-12-31",
      categories: ["Health & Fitness", "Mobile Apps"],
      technologiesUsed: ["React Native", "Node.js", "MongoDB"],
      teamMembers: [
        {
          name: "Liam Anderson",
          role: "Product Manager",
        },
        {
          name: "Ella Davis",
          role: "App Developer",
        },
        {
          name: "Oliver Johnson",
          role: "Backend Developer",
        },
      ],
      githubRepository: "https://github.com/fittech/health-fitness-app",
      website: "https://www.fittechapp.com",
      contactEmail: "contact@fittechapp.com",
    },
    {
      name: "Education Platform",
      teamName: "EduTech Explorers",
      collegeName: "Education College",
      description:
        "Our Education Platform is designed to revolutionize online learning. It offers interactive lessons, quizzes, and a personalized learning experience.",
      startDate: "2023-09-15",
      endDate: "2023-12-31",
      categories: ["Education", "Online Learning"],
      technologiesUsed: ["Angular", "Java", "MySQL"],
      teamMembers: [
        {
          name: "Mia White",
          role: "Project Lead",
        },
        {
          name: "Henry Brown",
          role: "Frontend Developer",
        },
        {
          name: "Eva Wilson",
          role: "Backend Developer",
        },
      ],
      githubRepository: "https://github.com/edutech/education-platform",
      website: "https://www.edutechlearning.com",
      contactEmail: "contact@edutechlearning.com",
    },
    {
      name: "Social Networking App",
      teamName: "ConnectX",
      collegeName: "Social Sciences Institute",
      description:
        "ConnectX is a social networking app that connects people around the world. Share your thoughts, make new friends, and discover exciting content.",
      startDate: "2023-10-10",
      endDate: "2023-12-31",
      categories: ["Social Networking", "Mobile Apps"],
      technologiesUsed: ["Flutter", "Firebase", "GraphQL"],
      teamMembers: [
        {
          name: "Sophia Smith",
          role: "App Developer",
        },
        {
          name: "Jackson Davis",
          role: "Backend Developer",
        },
        {
          name: "Aria Brown",
          role: "UI/UX Designer",
        },
      ],
      githubRepository: "https://github.com/connectx/social-app",
      website: "https://www.connectxapp.com",
      contactEmail: "contact@connectxapp.com",
    },
    {
      name: "E-commerce Marketplace",
      teamName: "MarketMasters",
      collegeName: "Business School",
      description:
        "MarketMasters is a comprehensive e-commerce platform where sellers and buyers can connect. It offers secure transactions and a wide range of products.",
      startDate: "2023-11-05",
      endDate: "2023-12-31",
      categories: ["E-commerce", "Marketplace"],
      technologiesUsed: ["Django", "Vue.js", "PostgreSQL"],
      teamMembers: [
        {
          name: "Ethan Wilson",
          role: "Project Lead",
        },
        {
          name: "Lily Johnson",
          role: "Full Stack Developer",
        },
        {
          name: "Lucas Brown",
          role: "UI/UX Designer",
        },
      ],
      githubRepository: "https://github.com/marketmasters/marketplace-app",
      website: "https://www.marketmasters.com",
      contactEmail: "contact@marketmasters.com",
    },
    {
      name: "Travel Planner App",
      teamName: "Wanderlust Explorers",
      collegeName: "Travel & Tourism Institute",
      description:
        "Wanderlust Explorers presents a Travel Planner App that helps you organize your trips. Plan itineraries, book accommodations, and explore the world.",
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      categories: ["Travel", "Mobile Apps"],
      technologiesUsed: ["React Native", "Node.js", "MongoDB"],
      teamMembers: [
        {
          name: "Noah Davis",
          role: "Project Manager",
        },
        {
          name: "Isabella Smith",
          role: "App Developer",
        },
        {
          name: "Elijah White",
          role: "Backend Developer",
        },
      ],
      githubRepository: "https://github.com/wanderlust/travel-planner-app",
      website: "https://www.wanderlustapp.com",
      contactEmail: "contact@wanderlustapp.com",
    },
  ]);

  // useEffect(function () {
  //   fetch("http://localhost:8000/projects")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setApiData(data);
  //     });
  // }, []);

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
