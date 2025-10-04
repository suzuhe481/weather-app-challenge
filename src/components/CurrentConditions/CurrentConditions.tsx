import CurrentConditionsCard from "../CurrentConditionsCard/CurrentConditionsCard";

import { useWeatherContext } from "../../hooks/useWeatherContext";
import { useSettingsContext } from "../../hooks/useSettingsContext";

const CurrentConditions = () => {
  const { weatherData } = useWeatherContext();
  const { windUnits, precipitationUnits } = useSettingsContext();

  const humidity = weatherData && weatherData.currentWeather.humidity;
  const wind = weatherData && weatherData.currentWeather.windSpeed;
  const precipitation = weatherData && weatherData.currentWeather.precipitation;
  const uvIndex = weatherData && weatherData.currentWeather.uvIndex;

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center min-w-[343px] w-full gap-5 mt-5">
        <CurrentConditionsCard title="Humidity" value={humidity} units={"%"} />
        <CurrentConditionsCard title="Wind" value={wind} units={windUnits} />
        <CurrentConditionsCard
          title="Precipitation"
          value={precipitation}
          units={precipitationUnits}
        />
        <CurrentConditionsCard title="Max UV Index" value={uvIndex} />
      </div>
    </div>
  );
};

export default CurrentConditions;
