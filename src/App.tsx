import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SearchBar from "./components/SearchBar/SearchBar";
import MainWeather from "./components/MainWeather/MainWeather";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import CurrentConditions from "./components/CurrentConditions/CurrentConditions";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import StyledWrapper from "./components/StyledWrapper/StyledWrapper";

import { SettingsProvider } from "./context/SettingsContext/SettingsProvider";
import { WeatherProvider } from "./context/WeatherContext/WeatherProvider";

function App() {
  return (
    <SettingsProvider>
      <WeatherProvider>
        <div className="bg-neutral-900 pt-6 pb-10 overflow-hidden min-h-screen">
          <Header />
          <Hero />
          <SearchBar />
          <StyledWrapper>
            <div className="flex justify-center flex-col xl:flex-row gap-8 pt-8 md:pt-[42px]">
              <div className="flex flex-col justify-start w-full xl:max-w-[800px]">
                <MainWeather />
                <CurrentConditions />
                <DailyForecast />
              </div>
              <HourlyForecast />
            </div>
          </StyledWrapper>
        </div>
      </WeatherProvider>
    </SettingsProvider>
  );
}

export default App;
