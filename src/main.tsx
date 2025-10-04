import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { WeatherProvider } from "./context/WeatherContext/WeatherProvider.tsx";
import { SettingsProvider } from "./context/SettingsContext/SettingsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingsProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </SettingsProvider>
  </StrictMode>
);
