import styles from "./sidebar.module.css";

const { sideBar } = styles;

const SideBar = () => {
  return (
    <div className={sideBar}>
      <h2>Discover more of what matters to you</h2>
      <div>
        <button>Programming</button>
        <button>Data Science</button>
        <button>Technology</button>
        <button>IOT</button>
        <button>E-commerce</button>
        <button>Web Development</button>
        <button>Artificial Intelligence</button>
        <button>Chatbots</button>
        <button>Game Development</button>
      </div>
    </div>
  );
};

export default SideBar;
