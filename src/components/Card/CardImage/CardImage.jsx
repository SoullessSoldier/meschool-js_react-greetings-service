import style from './CardImage.module.css'

const CardImage = (props) => (
    <div className={style.image}>
        <img className={style.img} src={props.img_src} alt="Фон поздравления"/>
    </div>
);

export default CardImage;