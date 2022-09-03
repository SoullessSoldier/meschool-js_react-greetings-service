import React from "react";
//import { useContext } from 'react';
//import { imgContext } from '../../../context/imgContext';
import { useSelector } from "react-redux";
import CardBG from "../../../img/card-bg.jpg";

const CardImage = () => {
  //const {urlImg} = useContext(imgContext);
  const { image, loading } = useSelector((state) => state.image);

  return (
    <img
      src={image || CardBG}
      alt={`${image} ? 'Фон поздравления' : ${loading}`}
      width={840}
      height={520}
    />
  );
};

export default CardImage;
