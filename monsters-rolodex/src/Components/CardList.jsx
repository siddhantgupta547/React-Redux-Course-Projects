import React from "react";

function CardList(props) {
  const monsters = props.monsters;
  return (
    <div>
      {monsters.length > 0
        ? monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)
        : "Loading"}
    </div>
  );
}

export default CardList;
