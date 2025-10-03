import { createContext } from "react";

import type { ISettingsContextProps } from "../../types/settingContextTypes";

export const SettingsContext = createContext<ISettingsContextProps | undefined>(
  undefined
);
