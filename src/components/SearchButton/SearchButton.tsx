import { useWeatherContext } from "../../hooks/useWeatherContext";

const SearchButton = () => {
  const { searchWeather } = useWeatherContext();

  return (
    <button
      onClick={searchWeather}
      className="text-preset-5-medium bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-xl text-neutral-0 px-6 py-4 w-full md:w-[114px]"
    >
      Search
    </button>
  );
};

export default SearchButton;
