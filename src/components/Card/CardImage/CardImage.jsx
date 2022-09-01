import { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';
import style from './CardImage.module.css';

const CardImage = (props) => {
    const img = useContext(imgContext);
    console.log(img)
    return (
        <img className={style.img} src={img.img} alt="Фон поздравления"/>
    )    
};

export default CardImage;