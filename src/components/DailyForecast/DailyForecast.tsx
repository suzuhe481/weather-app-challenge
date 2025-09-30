import DayCard from "../DayCard/DayCard";

const dailyForecastData = [
  {
    day: "Tue",
    weather: "Rain",
    high: "20°",
    low: "14°",
  },
  {
    day: "Wed",
    weather: "Drizzle",
    high: "21°",
    low: "15°",
  },
  {
    day: "Thu",
    weather: "Sunny",
    high: "24°",
    low: "14°",
  },
  {
    day: "Fri",
    weather: "Snow",
    high: "20°",
    low: "14°",
  },
  {
    day: "Sat",
    weather: "Cloudy",
    high: "20°",
    low: "14°",
  },
  {
    day: "Sun",
    weather: "Overcast",
    high: "20°",
    low: "14°",
  },
  {
    day: "Mon",
    weather: "Rain",
    high: "20°",
    low: "14°",
  },
];

const DailyForecast = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col gap-5 mt-8 min-w-[375px] xl:mt-12">
        <h2 className="text-preset-5 text-neutral-0">Daily Forecast</h2>
        <div className="flex flex-row gap-4 flex-wrap justify-start items-start lg:grid lg:grid-cols-7">
          {dailyForecastData.map((day, index) => (
            <DayCard
              key={index}
              day={day.day}
              weather={day.weather}
              high={day.high}
              low={day.low}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
