import React from "react";
import Temp from "./Temp";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <div>
        <span>{name}</span>
        <button>X</button>
      </div>
      <div>
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
