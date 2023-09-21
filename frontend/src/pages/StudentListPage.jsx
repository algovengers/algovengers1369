import StudentList from "../components/StudentList";
import SidePanel from "../components/SidePanel";
import StudentListNav from "../components/StudentListNav";
import "./studentListPage.css";

function StudentListPage() {
  return (
    <div className="StudentListPageContainer">
      <StudentListNav />
      <main className="studentMain">
        <SidePanel />
        <StudentList />
      </main>
    </div>
  );
}

export default StudentListPage;
