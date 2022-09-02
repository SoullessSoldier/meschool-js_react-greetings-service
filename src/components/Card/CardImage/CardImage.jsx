import React from 'react';
import { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';
import CardBG from '../../../img/card-bg.jpg'

const CardImage = () => {
    const {urlImg} = useContext(imgContext);
    
    return (
        <img src={urlImg || CardBG} alt="Фон поздравления"/>
    );    
};

export default CardImage;