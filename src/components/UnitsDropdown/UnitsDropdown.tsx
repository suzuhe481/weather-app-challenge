import { useState, useEffect } from "react";
import type { RefObject } from "react";

import UnitsDropdownGroup from "../UnitsDropdownGroup/UnitsDropdownGroup";

const dropdownData = {
  temperature: {
    title: "Temperature",
    options: ["Celsius", "Fahrenheit"],
    optionsText: ["Celsius (°C)", "Fahrenheit (°F)"],
  },
  windSpeed: {
    title: "Wind Speed",
    options: ["km/h", "mph"],
    optionsText: ["km/h", "mph"],
  },
  precipitation: {
    title: "Precipitation",
    options: ["mm", "in"],
    optionsText: ["Millimeters (mm)", "inches (in)"],
  },
};

const Separator = () => {
  return <div className="w-full h-[1px] bg-neutral-600"></div>;
};

interface IUnitsDropdownProps {
  ref: RefObject<HTMLDivElement | null>;
}

const UnitsDropdown = ({ ref }: IUnitsDropdownProps) => {
  const [system, setSystem] = useState("Metric");
  const [temperature, setTemperature] = useState("Celsius");
  const [windSpeed, setWindSpeed] = useState("km/h");
  const [precipitation, setPrecipitation] = useState("mm");

  const buttonText = system === "Metric" ? "Imperial" : "Metric";

  const handleSystemChange = () => {
    if (system === "Metric") {
      setAllToImperial();
    } else {
      setAllToMetric();
    }
  };

  const setAllToMetric = () => {
    setSystem("Metric");
    setTemperature("Celsius");
    setWindSpeed("km/h");
    setPrecipitation("mm");
  };

  const setAllToImperial = () => {
    setSystem("Imperial");
    setTemperature("Fahrenheit");
    setWindSpeed("mph");
    setPrecipitation("in");
  };

  // Sets the system state if all of the units are of the same system.
  useEffect(() => {
    if (
      temperature === "Celsius" &&
      windSpeed === "km/h" &&
      precipitation === "mm"
    ) {
      setSystem("Metric");
    } else if (
      temperature === "Fahrenheit" &&
      windSpeed === "mph" &&
      precipitation === "in"
    ) {
      setSystem("Imperial");
    }
  }, [temperature, windSpeed, precipitation]);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-2.5 rounded-xl py-1.5 px-2 flex flex-col gap-1 items-start w-[214px] bg-neutral-800 border-neutral-600 border-1 z-50000"
    >
      <button
        onClick={handleSystemChange}
        className="text-preset-7 text-neutral-0 py-2.5 px-2 hover:bg-neutral-700 w-full text-left rounded-lg hover:cursor-pointer"
      >
        Switch to {buttonText}
      </button>

      <Separator />

      {/* Temperature */}
      <UnitsDropdownGroup
        title={dropdownData.temperature.title}
        options={dropdownData.temperature.options}
        optionsText={dropdownData.temperature.optionsText}
        action={setTemperature}
        selected={temperature}
      />

      <Separator />

      {/* Wind Speed */}
      <UnitsDropdownGroup
        title={dropdownData.windSpeed.title}
        options={dropdownData.windSpeed.options}
        optionsText={dropdownData.windSpeed.optionsText}
        action={setWindSpeed}
        selected={windSpeed}
      />

      <Separator />

      {/* Precipitation */}
      <UnitsDropdownGroup
        title={dropdownData.precipitation.title}
        options={dropdownData.precipitation.options}
        optionsText={dropdownData.precipitation.optionsText}
        action={setPrecipitation}
        selected={precipitation}
      />
    </div>
  );
};

export default UnitsDropdown;
