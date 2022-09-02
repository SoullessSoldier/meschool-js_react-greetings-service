import React from 'react';
import CardImage from "./CardImage/CardImage";
import CardFelicitation from "./CardFelicitation/CardFelicitation";
import Container from "../Container/Container";

import style from "./Card.module.css";

const Card = (props) => (
  <Container>
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <CardImage />
          <CardFelicitation text={props.text} />
        </div>
      </div>
    </div>
  </Container>
);

export default Card;
