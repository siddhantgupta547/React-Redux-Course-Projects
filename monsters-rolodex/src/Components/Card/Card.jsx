import React from "react";

import "./Card.css";

function Card(props) {
  const monster = props.monster;
  return (
    <div className="card">
      <img
        alt={`monster ${monster.id}`}
        src={`https://robohash.org/${monster.id}?set=set2`}
      />
      <h3 style={{ textAlign: "center" }}>{monster.name}</h3>
    </div>
  );
}

export default Card;
