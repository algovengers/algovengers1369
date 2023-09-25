import "./panelCard.css";

function PanelCards(props) {
  return (
    <div className="panelCard" onClick={props.onClick}>
      <div className="imgContainer">
        <div className={`cardImg`} style={{backgroundImage:`url("./${props.name}.svg")`}}></div>
      </div>
      <p className="cardTitle">{props.title}</p>
    </div>
  );
}

export default PanelCards;
