import React from 'react';
import style from "./Styles.module.css"

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <form action="submit">
      <input type="text" placeholder='Ciudad...' className={style.searchBarPH}/>
      <input type="submit" value="Agregar" className={style.searchBarButton}/>
    </form>
  </div>
};