import SidePanelBtn from './SidePanelBtn'
import './sidepanel.css'

function SidePanel() {
    return (
        <div className="sidePanel">
            <SidePanelBtn title='Student List'/>
            <SidePanelBtn title='Projects'/>
            <SidePanelBtn title= 'Pending Approval'/>
        </div>
    )
}

export default SidePanel
