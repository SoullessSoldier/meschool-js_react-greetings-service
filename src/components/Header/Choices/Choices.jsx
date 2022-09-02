import React from 'react';
import { useState, useEffect } from "react";
import style from "./Choices.module.css";
//import { holidaysContext } from "../../../context/holidayContext";
import { useSelector, useDispatch } from 'react-redux';
import { setHoliday, fetchHolidays } from '../../../store/holidaysSlice.js'; 
import { fetchText } from '../../../store/textSlice.js'; 

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  //const { holidays, holiday, changeHoliday } = useContext(holidaysContext);
  const { holiday, holidays, loading } = useSelector(state => state.holidays);
  const dispatch = useDispatch();
  //const { holidays } = useContext(holidaysContext);

  const toggleChoices = () => {
    if (loading !== 'success') return;
    setIsOpenChoices(!isOpenChoices);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  /*const holiday = useContext(holidaysContext);
  console.log("holiday: ", holiday);*/
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {loading !== 'success' ?
        'Загрузка...' :
         holidays[holiday] || "Выбрать праздник"}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                //changeHoliday(item[0]);
                dispatch(setHoliday(item[0]));
                dispatch(fetchText(item[0]));
                toggleChoices();
              }}
            >
              {item[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choices;
