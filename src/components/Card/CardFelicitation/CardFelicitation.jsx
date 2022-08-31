import { useContext } from "react";
import { textContext } from "../../../context/textContext";
import style from "./CardFelicitation.module.css";

const CardFelicitation = () => {
    const {text} = useContext(textContext)
  return <p className={style.felicitation}>{text}</p>;
};

export default CardFelicitation;
