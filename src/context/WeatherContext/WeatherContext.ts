import { createContext } from "react";

import type { IWeatherContextProps } from "../../types/weatherContextTypes";

export const WeatherContext = createContext<IWeatherContextProps | undefined>(
  undefined
);
