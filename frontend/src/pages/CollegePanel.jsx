import PanelCards from "../components/PanelCards"
import './collegepanel.css'
import img from "../components/people.svg"
import UniNav from "../components/universityNav";
import { useNavigate } from "react-router-dom";
function CollegePanel() {
    const panelOptions= [
        {title:"Student List"},
        {title:"Student"}
    ]
    const Navigate = useNavigate();
    return (
        <div className="panelContainer">
            <UniNav/>
            <div className="CardContainer">
            <PanelCards onClick={()=>{
                Navigate("/CollegePanel/StudentList")
            }} name='groups' title= 'Student List'/>
            <PanelCards name='bookmark_manager' title= 'Projects'/>
            <PanelCards name='pending_actions' title='Pending Approval'/>
            </div>
        </div>
    )
}

export default CollegePanel;
