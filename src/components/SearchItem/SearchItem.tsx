import type { Dispatch, SetStateAction, RefObject } from "react";
import type { ILocation } from "../../utils/fetchLocations";
import { useWeatherContext } from "../../hooks/useWeatherContext";

interface ISearchItemProps {
  searchItemRefs: RefObject<HTMLButtonElement[] | null>;
  index: number;
  locationData: ILocation;
  setQuery: Dispatch<SetStateAction<string>>;
  setSearchFocused: Dispatch<SetStateAction<boolean>>;
}

const SearchItem = ({
  searchItemRefs,
  index,
  locationData,
  setQuery,
  setSearchFocused,
}: ISearchItemProps) => {
  const { setLocationName, setCoordinates, setCountry } = useWeatherContext();

  const location = transformLocationName(locationData);

  const handleButtonClick = () => {
    setQuery(location);

    setLocationName(location);
    setCoordinates({
      latitude: locationData.latitude,
      longitude: locationData.longitude,
    });
    setCountry(locationData.country);

    setSearchFocused(false);
  };

  /**
   * Transforms the location name to a more readable format.
   * Displays city, state for United States.
   * Displays city, country for other locations.
   *
   * @param locationData The location data to be transformed.
   * @returns The transformed location name.
   */
  function transformLocationName(locationData: ILocation) {
    if (locationData.country === "United States") {
      return `${locationData.name}, ${locationData.admin1}`;
    }

    return `${locationData.name}, ${locationData.country}`;
  }

  /**
   * Assigns the given HTMLButtonElement to the corresponding index in the searchItemRefs array.
   * The assignment is only done if searchItemRefs is not null and the given element is not null.
   */
  const handleRefAssign = (el: HTMLButtonElement | null) => {
    if (searchItemRefs && searchItemRefs.current && el !== null) {
      searchItemRefs.current[index] = el;
    }
  };

  return (
    <button
      ref={(el) => handleRefAssign(el)}
      onClick={handleButtonClick}
      className="text-preset-7 text-neutral-0 rounded-lg text-left hover:bg-neutral-700 hover:border-neutral-600 border-transparent border-1 py-2.5 px-2 cursor-pointer"
    >
      {location}
    </button>
  );
};

export default SearchItem;
