import React from "react";
import WeatherIcon from "./WeatherIcon";

interface WeatherCardProps {
  weatherData: {
    current: {
      temp: number,
      humidity: number,
      wind_speed: number,
      weather: { main: string }[],
    },
    daily: {
      dt: number,
      temp: { max: number, min: number },
      weather: { main: string }[],
    }[],
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const { current, daily } = weatherData;

  return (
    <div className="bg-white shadow-lg rounded p-4 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Current Weather</h2>
      <div className="flex items-center mb-4">
        <WeatherIcon condition={current.weather[0].main} />
        <div className="ml-4">
          <p className="text-2xl">{Math.round(current.temp)}°C</p>
          <p>Humidity: {current.humidity}%</p>
          <p>Wind Speed: {current.wind_speed} m/s</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {daily.slice(1, 6).map((day, index) => (
          <div key={index} className="bg-white shadow-lg rounded p-4">
            <WeatherIcon condition={day.weather[0].main} />
            <p className="text-lg">{new Date(day.dt * 1000).toDateString()}</p>
            <p>High: {Math.round(day.temp.max)}°C</p>
            <p>Low: {Math.round(day.temp.min)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
