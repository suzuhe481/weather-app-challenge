import {
  DecorativeStar,
  DecorativeSmallCloud,
  DecorativeBigCloud,
} from "../../assets/icons/pageIcons";

import { useWeatherContext } from "../../hooks/useWeatherContext";

const MainWeather = () => {
  const { weatherData, displayedLocation } = useWeatherContext();

  const currentLocalDate = weatherData?.currentWeather.time
    ? new Date(weatherData.currentWeather.time)
    : new Date();

  // Formats the current date into "Month Day, Year"
  const currentDate = currentLocalDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const currentTemperature =
    weatherData && weatherData.currentWeather.temperature;
  const currentFeelsLike = weatherData && weatherData.currentWeather.feelsLike;

  return (
    <div className="relative flex flex-col gap-4 md:gap-0 md:flex-row justify-center md:justify-between items-center px-6 bg-gradient-to-tr from-blue-500 to-blue-700 w-full xl:w-[800px] h-[286px] rounded-[20px] overflow-hidden">
      <DecorativeStar className="absolute top-[14px] md:top-[34px] right-[50px] md:left-[356px] text-orange z-10" />
      <DecorativeStar
        className="absolute bottom-[26px] md:bottom-[46px] left-[32px] md:left-[310px] text-orange"
        z-10
      />
      <DecorativeStar className="absolute top-[29px] md:top-[41px] left-[-10px] md:left-[48px] text-neutral-0 opacity-20 z-10" />
      <DecorativeStar className="absolute bottom-[27px] md:bottom-[37px] right-[27px] md:right-[106px] xl:right-[186px] text-neutral-0 opacity-20 z-10" />
      <DecorativeSmallCloud className="absolute left-[-225px] bottom-[-150px] z-10" />
      <DecorativeBigCloud className="absolute right-[-300px] bottom-[-200px] z-5" />

      <div className="flex flex-col gap-3 z-100">
        <span className="text-preset-4 text-neutral-0">
          {displayedLocation}
        </span>
        <span className="text-preset-6 text-neutral-0">{currentDate}</span>
      </div>
      <div className="flex flex-row items-center gap-5 z-100">
        <div className="bg-white size-30 rounded-xl"></div>
        <div className="flex flex-col">
          <span className="text-preset-1 text-neutral-0">
            {currentTemperature && Math.round(currentTemperature)}°
          </span>
          <span className="text-preset-6 text-neutral-0 italic">
            Feels like {currentFeelsLike && Math.round(currentFeelsLike)}°
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
