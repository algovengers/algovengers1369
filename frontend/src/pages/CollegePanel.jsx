import PanelCards from "../components/PanelCards"
import './collegepanel.css'
import img from "../components/people.svg"
import UniNav from "../components/universityNav";
function CollegePanel() {
    const panelOptions= [
        {title:"Student List"},
        {title:"Student"}
    ]
    return (
        <div className="panelContainer">
            <UniNav/>
            <div className="CardContainer">
            <PanelCards  name='groups' title= 'Student List'/>
            <PanelCards name='bookmark_manager' title= 'Projects'/>
            <PanelCards name='pending_actions' title='Pending Approval'/>
            </div>
        </div>
    )
}

export default CollegePanel;
