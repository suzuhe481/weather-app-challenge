import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { SettingsContext } from "./SettingsContext";

import type {
  System,
  WindUnits,
  TemperatureUnits,
  PrecipitationUnits,
} from "../../types/settingContextTypes";

interface ISettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: ISettingsProviderProps) => {
  const [system, setSystem] = useState<System>("Metric");
  const [windUnits, setWindUnits] = useState<WindUnits>("kmh");
  const [temperatureUnits, setTemperatureUnits] =
    useState<TemperatureUnits>("Celsius");
  const [precipitationUnits, setPrecipitationUnits] =
    useState<PrecipitationUnits>("mm");

  const setAllToImperial = () => {
    setWindUnits("mph");
    setTemperatureUnits("Fahrenheit");
    setPrecipitationUnits("in");
  };

  const setAllToMetric = () => {
    setWindUnits("kmh");
    setTemperatureUnits("Celsius");
    setPrecipitationUnits("mm");
  };

  const handleSystemChange = () => {
    if (system === "Metric") {
      setAllToImperial();
    } else {
      setAllToMetric();
    }
  };

  // Changes the System state if all of the units are of the same system.
  useEffect(() => {
    if (
      temperatureUnits === "Celsius" &&
      windUnits === "kmh" &&
      precipitationUnits === "mm"
    ) {
      setSystem("Metric");
    } else if (
      temperatureUnits === "Fahrenheit" &&
      windUnits === "mph" &&
      precipitationUnits === "in"
    ) {
      setSystem("Imperial");
    }
  }, [temperatureUnits, windUnits, precipitationUnits, setSystem]);

  return (
    <SettingsContext.Provider
      value={{
        system,
        setSystem,
        windUnits,
        setWindUnits,
        temperatureUnits,
        setTemperatureUnits,
        precipitationUnits,
        setPrecipitationUnits,
        handleSystemChange,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
