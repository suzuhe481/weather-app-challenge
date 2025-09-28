import DayButton from "../DayButton/DayButton";
import HourCard from "../HourCard/HourCard";

const hourlyData = {
  currentDay: "Tuesday",
  hours: [
    {
      hour: "3 PM",
      temperature: "20°",
      weather: "Overcast",
    },
    {
      hour: "4 PM",
      temperature: "20°",
      weather: "Partly Cloudy",
    },
    {
      hour: "5 PM",
      temperature: "20°",
      weather: "Clear",
    },
    {
      hour: "6 PM",
      temperature: "19°",
      weather: "Overcast",
    },
    {
      hour: "7 PM",
      temperature: "18°",
      weather: "Snow",
    },
    {
      hour: "8 PM",
      temperature: "18°",
      weather: "Fog",
    },
    {
      hour: "9 PM",
      temperature: "17°",
      weather: "Snow",
    },
    {
      hour: "10 PM",
      temperature: "17°",
      weather: "Overcast",
    },
  ],
};

export const HourlyForecast = () => {
  return (
    <div className="flex flex-col gap-4 bg-neutral-800 w-full xl:w-[384px] h-[693px] rounded-[20px] p-6">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-preset-5 text-neutral-0">Hourly Forecast</h3>
        <DayButton currentDay={hourlyData.currentDay} />
      </div>
      <div className="flex flex-col gap-4">
        {hourlyData.hours.map((hour, index) => (
          <HourCard
            key={index}
            hour={hour.hour}
            temperature={hour.temperature}
            weather={hour.weather}
          />
        ))}
      </div>
    </div>
  );
};
export default HourlyForecast;
