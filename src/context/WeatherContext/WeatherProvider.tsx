import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { WeatherContext } from "./WeatherContext";

import fetchWeather from "../../utils/fetchWeather";
import { transformWeatherData } from "../../utils/transformWeatherData";
import { useSettingsContext } from "../../hooks/useSettingsContext";

import type {
  WeatherData,
  ICoordinates,
} from "../../types/weatherContextTypes";

interface IWeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: IWeatherProviderProps) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const [locationName, setLocationName] = useState<string | null>(null); // Location name stored in input query (Not selected)
  const [displayedLocation, setDisplayedLocation] = useState<string | null>(
    null
  ); // Displayed location name in the Weather UI
  const [coordinates, setCoordinates] = useState<ICoordinates | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  // Weather loading state
  const [loading, setLoading] = useState<boolean | null>(null);

  const weatherAbortControllerRef = useRef<AbortController | null>(null);

  const {
    temperatureUnits,
    windUnits,
    precipitationUnits,
    setTemperatureUnits,
    setWindUnits,
    setPrecipitationUnits,
  } = useSettingsContext();

  const searchWeather = async () => {
    if (weatherAbortControllerRef.current) {
      weatherAbortControllerRef.current.abort();
    }

    if (coordinates) {
      const weatherController = new AbortController();

      setLoading(true);
      setWeatherData(null);

      const data = await fetchWeather(
        coordinates.latitude,
        coordinates.longitude,
        weatherController.signal,
        temperatureUnits,
        windUnits,
        precipitationUnits
      );

      setUnitsForCountry(); // Sets units appropriate for the country being searched

      const transformedData = transformWeatherData(data);
      setDisplayedLocation(locationName);

      setWeatherData(transformedData);
      setLoading(false);
    }
  };

  function setUnitsForCountry() {
    if (country === "United States") {
      setTemperatureUnits("Fahrenheit");
      setWindUnits("mph");
      setPrecipitationUnits("in");
    } else {
      setTemperatureUnits("Celsius");
      setWindUnits("kmh");
      setPrecipitationUnits("mm");
    }
  }

  // Fetch weather data when units change change
  useEffect(() => {
    if (coordinates) {
      searchWeather();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temperatureUnits, windUnits, precipitationUnits]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        coordinates,
        setCoordinates,
        locationName,
        setLocationName,
        searchWeather,
        displayedLocation,
        setCountry,
        loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
