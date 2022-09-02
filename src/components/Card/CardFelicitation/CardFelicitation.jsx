import React from "react";
//import { useContext } from "react";
//import { textContext } from "../../../context/textContext";
import { useSelector } from "react-redux";
import style from "./CardFelicitation.module.css";

const CardFelicitation = () => {
  //const { text } = useContext(textContext);
  const { text, loading } = useSelector((state) => state.text);
  return (
    <p className={style.felicitation}>
      {loading === "loading"
        ? "загрузка"
        : text === ""
        ? "Выберите повод для поздравления"
        : text}
    </p>
  );
};

export default CardFelicitation;
