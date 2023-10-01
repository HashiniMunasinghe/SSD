import './App.css';
import { useState } from "react";

const api = {
  key: "73e806160e009d34bfdedea955bd7c2c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  // const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  const searchPressed = () => {
    // fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //       setWeather(result);
    //   });
    fetch(`${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Header */}
        <h1>Weather App</h1>

        <div>
          {/* <input
            type="text"
            placeholder="Enter City/Town..."
            onChange={(e) => setSearch(e.target.value)}
          /> */}
          <input
            type="text"
            placeholder="Enter Lon..."
            onChange={(e) => setLon(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Lat..."
            onChange={(e) => setLat(e.target.value)}
          />

          <button onClick={searchPressed}>Search</button>
        </div>
        {/* Location  */}
        <p>{weather.name}</p>

        {/* Temperature */}
        {weather.main ? 
          <div>
            <p>{weather.main.temp} °C</p> 
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </div>
          : ''}
      </header>
    </div>
  );
}

export default App;
