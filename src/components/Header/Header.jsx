import React from "react";
import style from "./Header.module.css";
import Container from "../Container/Container";
import Choices from "./Choices/Choices";
import { useDispatch } from "react-redux";
import { fetchText } from "../../store/textSlice";
import { fetchImage } from "../../store/imageSlice";
import { useParams } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { holiday } = useParams();

  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button
              className={style.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchText(holiday));
              }}
            >
              Поменять поздравление
            </button>
            <button
              className={style.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchImage(holiday));
              }}
            >
              Поменять фон
            </button>
          </div>
          <Choices />
        </div>
      </Container>
    </header>
  );
};

export default Header;
