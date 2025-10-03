import { useState, useRef } from "react";

import type { Dispatch, SetStateAction, RefObject, KeyboardEvent } from "react";

import SearchItem from "../SearchItem/SearchItem";

import { handleKeyDown } from "../../utils/searchDropdownUtils";

interface ISearchDropdownProps {
  searchDropdownRef: RefObject<HTMLDivElement | null>;
  setQuery: Dispatch<SetStateAction<string>>;
  searchFocused: boolean;
  setSearchFocused: Dispatch<SetStateAction<boolean>>;
}

const exampleLocations = ["New York", "London", "Tokyo"];

const SearchDropdown = ({
  searchDropdownRef,
  setQuery,
  searchFocused,
  setSearchFocused,
}: ISearchDropdownProps) => {
  const [suggestions] = useState(exampleLocations);
  const [suggestionsIndex, setSuggestionsIndex] = useState<number | null>(null);

  const searchItemRefs = useRef<HTMLButtonElement[] | null>([]); // Refs to all SearchItems

  return (
    <div
      ref={searchDropdownRef}
      tabIndex={0}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) =>
        handleKeyDown(
          event,
          searchFocused,
          suggestionsIndex,
          suggestions,
          setSuggestionsIndex,
          searchItemRefs
        )
      }
      className="absolute right-0 top-full mt-2.5 flex flex-col gap-1 bg-neutral-800 w-full rounded-xl p-2 border-neutral-700 border-1 z-500"
    >
      {exampleLocations.map((location, index) => (
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
