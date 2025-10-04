import type { Dispatch, SetStateAction } from "react";

export type WeatherData = {
  currentWeather: {
    time: string;

    temperature: number;
    feelsLike: number;
    weatherCode: number;

    humidity: number;
    windSpeed: number;
    windDirection: number;
    uvIndex: number;
    precipitation: number;
  };
  dailyWeather:
    | {
        date: string;
        weatherCode: number;
        high_temperature: number;
        low_temperature: number;
      }[];

  hourlyWeather:
    | {
        time: string;
        weatherCode: number;
        temperature: number;
      }[];
};

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IWeatherContextProps {
  weatherData: WeatherData | null;
  setWeatherData: Dispatch<SetStateAction<WeatherData | null>>;

  locationName: string | null;
  setLocationName: Dispatch<SetStateAction<string | null>>;

  coordinates: ICoordinates | null;
  setCoordinates: Dispatch<SetStateAction<ICoordinates | null>>;

  searchWeather: () => void;

  displayedLocation: string | null;

  setCountry: Dispatch<SetStateAction<string | null>>;
}
