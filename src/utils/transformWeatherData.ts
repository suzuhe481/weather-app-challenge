import type { IAPIWeatherResponse } from "./fetchWeather";
import type { WeatherData } from "../types/weatherContextTypes";

/**
 * Transforms API weather response data into a format usable by the WeatherContext.
 *
 * @param {IAPIWeatherResponse} data - The API weather response data to be transformed.
 * @returns {WeatherData} - The transformed weather data.
 */
export const transformWeatherData = (
  data: IAPIWeatherResponse
): WeatherData => {
  const currentWeather = {
    time: data.current.time,
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    weatherCode: data.current.weather_code,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    windDirection: data.current.wind_direction_10m,
    uvIndex: data.daily.uv_index_max[0], // Uses daily max of first day becuase there's no UV index for current weather.
    precipitation: data.current.precipitation,
  };

  const dailyWeather = data.daily.time.map((time, index) => ({
    date: time,
    weatherCode: data.daily.weather_code[index],
    high_temperature: data.daily.temperature_2m_max[index],
    low_temperature: data.daily.temperature_2m_min[index],
  }));

  const hourlyWeather = data.hourly.time.map((time, index) => ({
    time: time,
    weatherCode: data.hourly.weather_code[index],
    temperature: data.hourly.temperature_2m[index],
  }));

  return {
    currentWeather: currentWeather,
    dailyWeather: dailyWeather,
    hourlyWeather: hourlyWeather,
  };
};
