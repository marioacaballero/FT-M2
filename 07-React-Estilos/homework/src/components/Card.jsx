import React from "react";
import Temp from "./Temp";
import style from "./Styles.module.css";

export default function Card({ name, min, max, img, onClose }) {
  // acá va tu código
  return (
    <div className={style.card}>
      <div>
        <span className={style.head}>{name}</span>
        <button className={style.button}>X</button>
      </div>
      <div className={style.box}>
        <Temp label="Min" temp={min} />
        <Temp label="Max" temp={max} />
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="Clima"
        />
      </div>
    </div>
  );
}
