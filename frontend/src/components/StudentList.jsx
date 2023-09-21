import ListItem from './ListItem'
import './studentList.css'

function StudentList() {
    return (
        <div className="studentListContainer">
            <ListItem name='Afeefuddin'/>
            <ListItem name='Rohit Kumar'/>
            <ListItem name='Shrutika Jha'/>
            <ListItem name= 'Aftab Alam'/>
            <ListItem name='Subharti Hazra'/>
            <ListItem name ='Abanindra Singh'/>
            <ListItem name='Nirantar Prasad'/>
            <ListItem name='Arman Munshi'/>
        </div>
    )
}

export default StudentList
