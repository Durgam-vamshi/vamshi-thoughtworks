const API_KEY = "ffda3fc32920b5a7d874144e94ad4a40";
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const ONECALL_BASE_URL = "https://api.openweathermap.org/data/2.5/onecall";

export const fetchWeatherData = async (city: string) => {
  console.log(`Fetching weather data for city: ${city}`); // Debug log

  try {
    // Fetch the city coordinates (latitude and longitude)
    const responseGeo = await fetch(
      `${WEATHER_BASE_URL}?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`
    );
    console.log(`Response status for geo data: ${responseGeo.status}`); // Debug log

    if (!responseGeo.ok) {
      const errorMessage = await responseGeo.text();
      throw new Error(
        `City not found or API error: ${responseGeo.statusText} - ${errorMessage}`
      );
    }

    const geoData = await responseGeo.json();
    const { lat, lon } = geoData.coord;

    // Fetch the weather data using the coordinates
    const responseWeather = await fetch(
      `${ONECALL_BASE_URL}?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    );
    console.log(`Response status for weather data: ${responseWeather.status}`); // Debug log

    if (!responseWeather.ok) {
      const errorMessage = await responseWeather.text();
      throw new Error(
        `Failed to fetch weather data: ${responseWeather.statusText} - ${errorMessage}`
      );
    }

    const weatherData = await responseWeather.json();

    return {
      current: weatherData.current,
      daily: weatherData.daily,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw error; // Re-throw error for further handling if needed
  }
};
