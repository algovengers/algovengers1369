import './sidePanelBtn.css'

function SidePanelBtn(props) {
    return (
        <div className="btn">
            <span>{props.title}</span>
        </div>
    )
}

export default SidePanelBtn;