import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext/SettingsContext";

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsProvider"
    );
  }

  return context;
};
