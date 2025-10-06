import DayCard from "../DayCard/DayCard";

import { useWeatherContext } from "../../hooks/useWeatherContext";

const DailyForecast = () => {
  const { weatherData } = useWeatherContext();

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col gap-5 mt-8 min-w-[375px] xl:mt-12">
        <h2 className="text-preset-5 text-neutral-0">Daily Forecast</h2>
        <div className="flex flex-row gap-4 flex-wrap justify-start items-start lg:grid lg:grid-cols-7">
          {weatherData &&
            weatherData.dailyWeather.map((day, index) => (
              <DayCard
                key={index}
                day={day.date}
                weatherCode={day.weatherCode}
                high={day.high_temperature}
                low={day.low_temperature}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
