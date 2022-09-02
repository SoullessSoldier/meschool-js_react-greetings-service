import React from 'react';
import Container from '../Container/Container';
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as PIIcon } from '../../img/pinterest.svg';
import { ReactComponent as SUIcon } from '../../img/stumbleupon.svg';

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href='https://t.me/Mrshmallowww/'>Anastasia Ilina</a></p>
                    <p>Coder: <a href='https://github.com/SoullessSoldier/'>SoullessSoldier</a></p>
                    <p>© HBCard, 2022</p>
                </div>
                <ul className={style.socials}>
                    <li className={style.item}>
                        <a href='https://vk.com/methed' className={style.link}>
                            <VKIcon/>
                        </a>
                    </li>
                    <li>
                        <a href='https://t.me/methed_chat_frontend' className={style.link}>
                            <TGIcon/>
                        </a>
                    </li>
                    <li>
                        <a href='https://pinterest.com' className={style.link}>
                            <PIIcon/>
                        </a>
                    </li>
                    <li>
                        <a href='https://stumbleupon.com' className={style.link}>
                            <SUIcon/>
                        </a>
                    </li>                    
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;