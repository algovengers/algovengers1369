import "../components/StudentDashboard.css";

const dummy_userdata = {
  userId: "h6kJgT",
  name: "Subharthi Hazra",
  institute: "Techno Main Saltlake",
};

const dummy_projects = [
  {
    projectId: "A4j7pV",
    title: "Implementation of 2bit Subtractor using basic gates",
    uploadedOn: "17/09/2023",
    description:
      "Our project aims to design and implement a 2-bit binary subtractor circuit using fundamental logic gates, including XOR, AND, and NOT gates. This subtractor takes two 2-bit binary numbers as input (minuend and subtrahend) and computes their difference, along with a borrow-out bit. The key components of our project include bitwise subtraction, borrow calculation for each bit position, and a final borrow-out determination. The resulting circuit provides an essential building block for arithmetic operations in digital systems and showcases our proficiency in digital logic design and implementation.",
    thumbnailUrl: "",
  },
  {
    projectId: "tRe5Qa",
    title: "Multiplayer Tic-Tac-Toe Game Using Socket.IO and Node.js",
    uploadedOn: "23/06/2022",
    description:
      "Our project involves the creation of an engaging multiplayer Tic-Tac-Toe game, implemented with the help of Socket.IO and Node.js. This game allows players to connect in real-time over the internet and enjoy a classic game of Tic-Tac-Toe with friends or opponents from anywhere in the world.",
    thumbnailUrl: "",
  },
  {
    projectId: "kL8nY2",
    title:
      "Simple Shopping Cart App Using Node.js and React of 2bit Subtractor using basic gates",
    uploadedOn: "13/08/2023",
    description:
      "Our project aims to create a user-friendly shopping cart application by combining the power of Node.js for the back-end and React for the front-end. This application will provide an intuitive and responsive interface for users to browse, select, and manage items in a virtual shopping cart. Key features will include real-time updates, seamless item addition/removal, dynamic pricing calculations, and a visually appealing user interface. By utilizing Node.js and React, we will ensure efficient server-side processing and a seamless, interactive user experience. This project highlights our expertise in full-stack development and modern web application design.",
    thumbnailUrl: "",
  },
];

export default function StudentDashboard() {
  return (
    <div className="container" id="student_dashboard_container">
      <div className="left_panel">
        <div className="profile_picture"></div>
        <div className="profile_userId">{dummy_userdata.userId}</div>
        <div className="profile_name">{dummy_userdata.name}</div>
        <div className="profile_institute">{dummy_userdata.institute}</div>
        <button className="edit_profile">Edit Profile</button>
        <button className="new_project">New Project</button>
      </div>
      <div className="right_panel">
        <div id="heading">Your Projects</div>
        <input type="text" id="project_search" placeholder="Search here ..." />
        <div className="project_list">
          {dummy_projects.map((project) => (
            <div className="project" key={project.projectId}>
              <div className="title">{project.title}</div>
              <div className="uploadedOn">{project.uploadedOn}</div>
              <div className="description">
                {project.description.length <= 300
                  ? project.description
                  : `${project.description.substring(0, 300)} ...`}
              </div>
              {/* <img className="thumbnailImg" src={project.thumbnailUrl} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
