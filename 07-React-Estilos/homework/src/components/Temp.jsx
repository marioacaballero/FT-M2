import React from "react";
import style from "./Styles.module.css";

export default function Temp({label, temp}){
    return <div className={style.temp}>
        <span>{label}</span>
        <span>{temp}</span>
    </div>
}