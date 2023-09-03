import React from "react";

import Card from "../component/card.component";
import "./cardList.component.styles.scss";

const CardList = (props) => {
  return (
    <div className="container">
      {props.robots.map((robot) => {
        return <Card key={robot.id} robotItem={robot} />;
      })}
    </div>
  );
};

export default CardList;
