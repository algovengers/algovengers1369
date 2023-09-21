import './listItem.css'

function ListItem(props) {
    return (
        <div className="listItem">
            <p className="name">{props.name}</p>
            <p className="projectCount">Total project : 10</p>
        </div>
    )
}

export default ListItem
