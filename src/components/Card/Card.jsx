import CardImage from "./CardImage/CardImage";
import CardFelicitation from "./CardFelicitation/CardFelicitation";
import Container from "../Container/Container";

import style from "./Card.module.css";

const Card = (props) => (
  <Container>
    <div className={style.card}>
      <div className={style.wrapper}>
        <CardImage img_src={props.img_src}/>
        <CardFelicitation text={props.text} />
      </div>
    </div>
  </Container>
);

export default Card;
