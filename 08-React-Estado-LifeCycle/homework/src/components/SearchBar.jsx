import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => setCity(e.target.value)} //cada vez que hay un evento cambia el estado
        value={city}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
