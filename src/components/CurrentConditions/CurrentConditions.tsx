import CurrentConditionsCard from "../CurrentConditionsCard/CurrentConditionsCard";

const currentConditionsData = {
  humidity: {
    value: 46,
    units: "%",
  },
  wind: {
    value: 14,
    units: "km/h",
  },
  precipitation: {
    value: 0,
    units: "mm",
  },
  uvIndex: {
    value: 0,
  },
};

const CurrentConditions = () => {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center min-w-[343px] w-full gap-5 mt-5">
        <CurrentConditionsCard
          title="Humidity"
          value={currentConditionsData.humidity.value}
          units={currentConditionsData.humidity.units}
        />
        <CurrentConditionsCard
          title="Wind"
          value={currentConditionsData.wind.value}
          units={currentConditionsData.wind.units}
        />
        <CurrentConditionsCard
          title="Precipitation"
          value={currentConditionsData.precipitation.value}
          units={currentConditionsData.precipitation.units}
        />
        <CurrentConditionsCard
          title="UV Index"
          value={currentConditionsData.uvIndex.value}
        />
      </div>
    </div>
  );
};

export default CurrentConditions;
