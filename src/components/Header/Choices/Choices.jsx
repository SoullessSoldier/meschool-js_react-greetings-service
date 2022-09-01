//import React from 'react';
import { useState, useContext } from "react";
import style from "./Choices.module.css";
import { holidaysContext } from "../../../context/holidayContext";



/*const holidays = {
  newyear: "Новый год",
  birtdayWomen: "День рождения  Ж",
  birthdayMen: "День рождения  М",
  womenDay: "8 марта",
  knowledgeDay: "День знаний",
};*/

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holidays, holiday, changeHoliday } = useContext(holidaysContext);
  
  

  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  

  /*const holiday = useContext(holidaysContext);
  console.log("holiday: ", holiday);*/
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                changeHoliday(item[0]);
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
