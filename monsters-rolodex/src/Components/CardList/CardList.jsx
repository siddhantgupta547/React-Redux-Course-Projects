import React from "react";

import "./CardList.css";
import Card from "../Card/Card";

function CardList(props) {
  const monsters = props.monsters;
  return (
    <div className="card-list">
      {monsters.length > 0
        ? monsters.map((monster) => <Card key={monster.id} monster={monster} />)
        : "Loading"}
    </div>
  );
}

export default CardList;
