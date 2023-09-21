import "./panelCard.css";

function PanelCards(props) {
  return (
    <div className="panelCard">
      <div className="imgContainer">
        <span class={`material-symbols-outlined cardImg`}>{props.name}</span>
      </div>
      <p className="cardTitle">{props.title}</p>
    </div>
  );
}

export default PanelCards;
