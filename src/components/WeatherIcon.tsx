import React from "react";

interface WeatherIconProps {
  condition: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
  const getIcon = (condition: string) => {
    switch (condition) {
      case "Clear":
        return "☀️"; // Sun icon
      case "Clouds":
        return "☁️"; // Cloud icon
      case "Rain":
        return "🌧️"; // Rain icon
      case "Snow":
        return "❄️"; // Snow icon
      default:
        return "🌫️"; // Default icon for unknown conditions
    }
  };

  return <span className="text-4xl">{getIcon(condition)}</span>;
};

export default WeatherIcon;
