import { useState, useRef } from "react";
import type { Dispatch, SetStateAction, RefObject, KeyboardEvent } from "react";

import SearchItem from "../SearchItem/SearchItem";
import { handleKeyDown } from "../../utils/searchDropdownUtils";
import type { ILocation } from "../../utils/fetchLocations";

interface ISearchDropdownProps {
  searchDropdownRef: RefObject<HTMLDivElement | null>;
  setQuery: Dispatch<SetStateAction<string>>;
  searchFocused: boolean;
  setSearchFocused: Dispatch<SetStateAction<boolean>>;
  locationsData: ILocation[];
}

const SearchDropdown = ({
  searchDropdownRef,
  setQuery,
  searchFocused,
  setSearchFocused,
  locationsData,
}: ISearchDropdownProps) => {
  const [locationsIndex, setLocationsIndex] = useState<number | null>(null);

  const searchItemRefs = useRef<HTMLButtonElement[] | null>([]); // Refs to all SearchItems

  return (
    <div
      ref={searchDropdownRef}
      tabIndex={0}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) =>
        handleKeyDown(
          event,
          searchFocused,
          locationsIndex,
          locationsData.length,
          setLocationsIndex,
          searchItemRefs
        )
      }
      className="absolute right-0 top-full mt-2.5 flex flex-col gap-1 bg-neutral-800 w-full rounded-xl p-2 border-neutral-700 border-1 z-500"
    >
      {locationsData.map((location, index) => (
        <SearchItem
          key={index}
          searchItemRefs={searchItemRefs}
          index={index}
          location={location}
          setQuery={setQuery}
          setSearchFocused={setSearchFocused}
        />
      ))}
    </div>
  );
};

export default SearchDropdown;
