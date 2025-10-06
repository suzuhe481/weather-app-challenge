import type { RefObject } from "react";

import { getIconFromWeatherCode } from "../../utils/getIconFromWeatherCode";

interface IHourCardProps {
  hourcardsRefs: RefObject<HTMLDivElement[] | null>;
  index: number;
  time: string;
  temperature: number;
  currentHour: number;
  weatherCode: number;
}

export const HourCard = ({
  hourcardsRefs,
  index,
  time,
  temperature,
  currentHour,
  weatherCode,
}: IHourCardProps) => {
  const dateObject = new Date(time);
  const hour = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    hourCycle: "h12",
  });

  const WeatherIcon = getIconFromWeatherCode(weatherCode);

  const handleRefAssign = (el: HTMLDivElement | null) => {
    if (hourcardsRefs && hourcardsRefs.current && el !== null) {
      hourcardsRefs.current[index] = el;
    }
  };

  // Assigns background and border color depending on current hour.
  // The hour card for the current hour gets highlighted.
  const bgColors =
    index === currentHour
      ? "bg-neutral-900 border-neutral-200"
      : "bg-neutral-700 border-neutral-600";

  return (
    <div
      ref={(el) => handleRefAssign(el)}
      className={`flex flex-row items-center justify-between ${bgColors} rounded-lg h-15 py-[18px] pl-3 pr-4 border-1`}
    >
      <div className="flex flex-row justify-center items-center gap-2">
        <WeatherIcon animate={true} className="size-10" />
        <div className="text-preset-5-medium text-neutral-0">{hour}</div>
      </div>
      <div className="text-preset-7 text-neutral-0">
        {Math.round(temperature)}°
      </div>
    </div>
  );
};

export default HourCard;
