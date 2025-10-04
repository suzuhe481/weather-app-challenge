import type { Dispatch, SetStateAction } from "react";

export const SYSTEM = ["Metric", "Imperial"] as const;
export type System = (typeof SYSTEM)[number];

export const WIND_UNITS = ["kmh", "mph"] as const;
export type WindUnits = (typeof WIND_UNITS)[number];

export const TEMPERATURE_UNITS = ["Celsius", "Fahrenheit"] as const;
export type TemperatureUnits = (typeof TEMPERATURE_UNITS)[number];

export const PRECIPITATION_UNITS = ["mm", "in"] as const;
export type PrecipitationUnits = (typeof PRECIPITATION_UNITS)[number];

export interface ISettingsContextProps {
  system: System;
  setSystem: Dispatch<SetStateAction<System>>;

  windUnits: WindUnits;
  setWindUnits: Dispatch<SetStateAction<WindUnits>>;

  temperatureUnits: TemperatureUnits;
  setTemperatureUnits: Dispatch<SetStateAction<TemperatureUnits>>;

  precipitationUnits: PrecipitationUnits;
  setPrecipitationUnits: Dispatch<SetStateAction<PrecipitationUnits>>;

  handleSystemChange: () => void;

  hourlyForecastDay: number;
  setHourlyForecastDay: Dispatch<SetStateAction<number>>;
}
