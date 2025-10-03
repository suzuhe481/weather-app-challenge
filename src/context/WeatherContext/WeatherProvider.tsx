import { useState } from "react";
import type { ReactNode } from "react";
import { WeatherContext } from "./WeatherContext";

import type { WeatherData } from "../../types/weatherContextTypes";

interface IWeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: IWeatherProviderProps) => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    currentWeather: null,
    hourlyWeather: null,
    dailyWeather: null,
  });

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
