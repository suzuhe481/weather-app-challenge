import type { RefObject } from "react";

import DayDropdownItem from "../DayDropdownItem/DayDropdownItem";

import { useWeatherContext } from "../../hooks/useWeatherContext";
import { useSettingsContext } from "../../hooks/useSettingsContext";

interface IDayDropdownProps {
  ref: RefObject<HTMLDivElement | null>;
}

const DayDropdown = ({ ref }: IDayDropdownProps) => {
  const { weatherData } = useWeatherContext();
  const { hourlyForecastDay, setHourlyForecastDay } = useSettingsContext();

  const dailyWeatherData = weatherData && weatherData?.dailyWeather;

  // Creates an array of available days
  const availableDays =
    dailyWeatherData &&
    dailyWeatherData.map((day, index) => {
      const dateObject = new Date(`${day.date}T00:00:00`);

      if (index === 0) return "Today";
      return dateObject.toLocaleDateString("en-US", {
        weekday: "long",
      });
    });

  const handleDayClick = (day: number) => {
    setHourlyForecastDay(day);
  };

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full flex flex-col gap-1 w-[214px] mt-2.5 p-2 rounded-xl bg-neutral-800 border-1 border-neutral-600 z-500"
    >
      {availableDays &&
        availableDays.map((day, index) => (
          <DayDropdownItem
            key={index}
            dayText={day}
            dayValue={index}
            selectedDay={hourlyForecastDay}
            action={handleDayClick}
          />
        ))}
    </div>
  );
};

export default DayDropdown;
