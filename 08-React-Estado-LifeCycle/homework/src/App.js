import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";

const apikey = process.env.REACT_APP_APIKEY;

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          const exist = cities.find((c) => c.id === city.id)
          if(!exist){
          setCities((oldCities) => [...oldCities, city]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id != id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}

export default App;
