import React from 'react';
import Container from "../Container/Container";

import style from "./EmptyCard.module.css";

const EmptyCard = (props) => (
  <Container>
    <div className={style.card}>
      <p>Выберите повод для поздравления!</p>
    </div>
  </Container>
);

export default EmptyCard;