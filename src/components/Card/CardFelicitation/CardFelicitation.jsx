import style from './CardFelicitation.module.css';

const CardFelicitation = (props) => (
    <p className={style.felicitation}>
        {props.text}
    </p>
);

export default CardFelicitation;