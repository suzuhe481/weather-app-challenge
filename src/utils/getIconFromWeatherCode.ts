import type { JSX } from "react";

import {
  ClearDay,
  MainlyClearDay,
  PartlyCloudyDay,
  MostlyCloudyDay,
  HazeFogDustSmoke,
  Drizzle,
  RainShowers,
  HeavyRain,
  MixedRainSnow,
  Flurries,
  SnowShowers,
  HeavySnow,
  Thunderstorms,
} from "../assets/icons/weatherIcons";

import type { IIconProps } from "../assets/icons/weatherIcons";

interface IWeatherIconMapProps {
  [key: number]: (props: IIconProps) => JSX.Element;
}

const weatherIconMap: IWeatherIconMapProps = {
  0: ClearDay,
  1: MainlyClearDay,
  2: PartlyCloudyDay,
  3: MostlyCloudyDay,
  45: HazeFogDustSmoke,
  48: HazeFogDustSmoke,
  51: Drizzle,
  53: Drizzle,
  55: Drizzle,
  56: MixedRainSnow,
  57: MixedRainSnow,
  61: Drizzle,
  63: RainShowers,
  65: HeavyRain,
  66: MixedRainSnow,
  67: MixedRainSnow,
  71: Flurries,
  73: SnowShowers,
  75: HeavySnow,
  77: SnowShowers,
  80: Drizzle,
  81: RainShowers,
  82: HeavyRain,
  85: SnowShowers,
  86: HeavySnow,
  95: Thunderstorms,
  96: Thunderstorms,
  99: Thunderstorms,
};

const defaultIcon = ClearDay;

export const getIconFromWeatherCode = (code: number | null) => {
  if (code === null) return defaultIcon;

  const weatherIcon = weatherIconMap[code] || defaultIcon;

  return weatherIcon;
};
