import { useState } from "react";
import type { RefObject } from "react";

import DayDropdownItem from "../DayDropdownItem/DayDropdownItem";

const availableDays = [
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
];

interface IDayDropdownProps {
  ref: RefObject<HTMLDivElement | null>;
}

const DayDropdown = ({ ref }: IDayDropdownProps) => {
  const [selectedDay, setSelectedDay] = useState(availableDays[0]);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full flex flex-col gap-1 w-[214px] mt-2.5 p-2 rounded-xl bg-neutral-800 border-1 border-neutral-600 z-500"
    >
      {availableDays.map((day, index) => (
        <DayDropdownItem
          key={index}
          day={day}
          selectedDay={selectedDay}
          action={handleDayClick}
        />
      ))}
    </div>
  );
};

export default DayDropdown;
