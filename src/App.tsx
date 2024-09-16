import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherData } from "./components/WeatherApi";

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
