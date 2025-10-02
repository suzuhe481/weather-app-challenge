import type { RefObject } from "react";

import UnitsDropdownGroup from "../UnitsDropdownGroup/UnitsDropdownGroup";

import { useSettingsContext } from "../../hooks/useSettingsContext";

import {
  TEMPERATURE_UNITS,
  WIND_UNITS,
  PRECIPITATION_UNITS,
} from "../../types/settingContextTypes";

import type {
  WindUnits,
  TemperatureUnits,
  PrecipitationUnits,
} from "../../types/settingContextTypes";

// Data for each UnitsDropdownGroup component.
// Options are the unit values accepted by the API.
// OptionsText are the values that will be displayed to the user.
const dropdownData = {
  temperature: {
    title: "Temperature",
    options: TEMPERATURE_UNITS,
    optionsText: ["Celsius (°C)", "Fahrenheit (°F)"],
  },
  windSpeed: {
    title: "Wind Speed",
    options: WIND_UNITS,
    optionsText: ["km/h", "mph"],
  },
  precipitation: {
    title: "Precipitation",
    options: PRECIPITATION_UNITS,
    optionsText: ["Millimeters (mm)", "inches (in)"],
  },
};

const Separator = () => {
  return <div className="w-full h-[1px] bg-neutral-600"></div>;
};

interface IUnitsDropdownProps {
  ref: RefObject<HTMLDivElement | null>;
}

/**
 * A component that renders a dropdown for selecting units.
 * The component takes in a ref which is passed to the outermost div element.
 * The currently selected option for each unit is highlighted with a background color.
 */
const UnitsDropdown = ({ ref }: IUnitsDropdownProps) => {
  const {
    system,
    temperatureUnits,
    windUnits,
    precipitationUnits,
    setTemperatureUnits,
    setWindUnits,
    setPrecipitationUnits,
    handleSystemChange,
  } = useSettingsContext();

  // Displays the system state of the opposite of the current system.
  const switchToSystem = system === "Metric" ? "Imperial" : "Metric";

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-2.5 rounded-xl py-1.5 px-2 flex flex-col gap-1 items-start w-[214px] bg-neutral-800 border-neutral-600 border-1 z-50000"
    >
      <button
        onClick={handleSystemChange}
        className="text-preset-7 text-neutral-0 py-2.5 px-2 hover:bg-neutral-700 w-full text-left rounded-lg hover:cursor-pointer"
      >
        Switch to {switchToSystem}
      </button>

      <Separator />

      {/* Temperature */}
      <UnitsDropdownGroup<TemperatureUnits>
        title={dropdownData.temperature.title}
        options={dropdownData.temperature.options}
        optionsText={dropdownData.temperature.optionsText}
        action={setTemperatureUnits}
        selected={temperatureUnits}
      />

      <Separator />

      {/* Wind Speed */}
      <UnitsDropdownGroup<WindUnits>
        title={dropdownData.windSpeed.title}
        options={dropdownData.windSpeed.options}
        optionsText={dropdownData.windSpeed.optionsText}
        action={setWindUnits}
        selected={windUnits}
      />

      <Separator />

      {/* Precipitation */}
      <UnitsDropdownGroup<PrecipitationUnits>
        title={dropdownData.precipitation.title}
        options={dropdownData.precipitation.options}
        optionsText={dropdownData.precipitation.optionsText}
        action={setPrecipitationUnits}
        selected={precipitationUnits}
      />
    </div>
  );
};

export default UnitsDropdown;
