import React, { useEffect } from 'react';
import CardImage from "./CardImage/CardImage";
import CardFelicitation from "./CardFelicitation/CardFelicitation";
import Container from "../Container/Container";
import { useParams } from 'react-router-dom';

import style from "./Card.module.css";
import { useDispatch } from 'react-redux';
import { fetchTextId } from '../../store/textSlice';
import { fetchImageId } from '../../store/imageSlice';

const Card = () => {
  const {idText, idImage} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (idText && idImage){
      dispatch(fetchTextId(idText));
      dispatch(fetchImageId(idImage));
    }
  });

  return (<Container>
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <CardImage />
          <CardFelicitation />
        </div>
      </div>
    </div>
  </Container>);
};

export default Card;
