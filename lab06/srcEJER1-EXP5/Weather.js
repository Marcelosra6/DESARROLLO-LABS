import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const city = "Lima";
    const apiKey = "b6907d289e10d714a6e88b30761fae22"; // API pública de ejemplo
    const url = `https://openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(result => setWeather(result))
      .catch(error => console.log("Error al obtener los datos del clima:", error));
  }, []);

  return (
    <div>
      <h2>Clima actual</h2>
      {weather ? (
        <div>
          <p><b>Ciudad:</b> {weather.name}</p>
          <p><b>Temperatura:</b> {weather.main.temp} °C</p>
          <p><b>Condición:</b> {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
}

export default Weather;
