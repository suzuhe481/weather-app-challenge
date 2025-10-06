import { useEffect, useRef } from "react";

import DayButton from "../DayButton/DayButton";
import HourCard from "../HourCard/HourCard";

import { useWeatherContext } from "../../hooks/useWeatherContext";
import { useSettingsContext } from "../../hooks/useSettingsContext";

export const HourlyForecast = () => {
  const { weatherData } = useWeatherContext();
  const { hourlyForecastDay } = useSettingsContext();

  const hourlyForecastContainerRef = useRef<HTMLDivElement | null>(null);
  const hourcardsRefs = useRef<HTMLDivElement[]>([]);

  const currentLocalTime = weatherData?.currentWeather.time
    ? new Date(weatherData.currentWeather.time)
    : new Date();

  // Returns the current hour for the given time
  const currentHour = new Date(currentLocalTime).getHours();

  const interval = 24; // Data for a day is stored in 24 hour intervals

  // Slices the hourly weather data for the current day
  const hourlyData =
    weatherData &&
    weatherData.hourlyWeather.slice(
      hourlyForecastDay * interval,
      hourlyForecastDay * interval + interval
    );

  // Auto scrolls the hourly forecast container to the current hour card
  useEffect(() => {
    const currentHourCard = hourcardsRefs.current[currentHour];

    if (currentHourCard && hourlyForecastContainerRef.current) {
      const container = hourlyForecastContainerRef.current;

      container.scrollTo({
        top: currentHourCard.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
    }
  }, [hourlyForecastDay, currentHour]);

  return (
    <div className="flex flex-col gap-4 bg-neutral-800 w-full xl:w-[384px] h-[693px] rounded-[20px] p-6">
      <div className="flex flex-row gap-2 justify-between items-center">
        <h3 className="text-preset-5 text-neutral-0">Hourly Forecast</h3>
        <DayButton />
      </div>
      <div
        ref={hourlyForecastContainerRef}
        className="flex flex-col gap-4 overflow-y-auto h-[700px]"
      >
        {hourlyData &&
          hourlyData.map((hourWeather, index) => (
            <HourCard
              key={index}
              index={index}
              hourcardsRefs={hourcardsRefs}
              time={hourWeather.time}
              temperature={hourWeather.temperature}
              currentHour={currentHour}
              weatherCode={hourWeather.weatherCode}
            />
          ))}
      </div>
    </div>
  );
};
export default HourlyForecast;
