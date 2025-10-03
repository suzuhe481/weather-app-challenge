import type { Dispatch, SetStateAction } from "react";

export type WeatherData = {
  currentWeather: {
    temperature: number;
    feelsLike: number;
    weatherCode: number;

    humidity: number;
    windSpeed: number;
    windDirection: number;
    uvIndex: number;
  } | null;
  dailyWeather:
    | {
        date: string;
        weatherCode: number;
        high_temperature: number;
        low_temperature: number;
      }[]
    | null;

  hourlyWeather:
    | {
        time: string;
        weatherCode: number;
        temperature: number;
      }[]
    | null;
};

export interface IWeatherContextProps {
  weatherData: WeatherData;
  setWeatherData: Dispatch<SetStateAction<WeatherData>>;
}
