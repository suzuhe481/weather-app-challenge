import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SearchBar from "./components/SearchBar/SearchBar";
import MainWeather from "./components/MainWeather/MainWeather";
import StyledWrapper from "./components/StyledWrapper/StyledWrapper";

function App() {
  return (
    <div className="bg-neutral-900 pt-6 pb-10">
      <Header />
      <Hero />
      <SearchBar />
      <StyledWrapper>
        <div className="flex justify-center flex-col xl:flex-row gap-8 pt-8 md:pt-[42px]">
          <div className="flex flex-row justify-center min-w-[300px]">
            <MainWeather />
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
}

export default App;
