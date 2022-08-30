import CardImage from "./CardImage/CardImage";
import CardFelicitation from "./CardFelicitation/CardFelicitation";
import Container from "../Container/Container";

import style from './Card.module.css';

const Card = (props) => {
    <Container>
        <div className={style.wrapper}>
            <CardImage/>
            <CardFelicitation text={props.text}/>
        </div>
    </Container>
};

export default Card;