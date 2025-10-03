import { useState, useRef, useEffect } from "react";

import { SearchIcon } from "../../assets/icons/pageIcons";
import SearchDropdown from "../SearchDropdown/SearchDropdown";

import fetchLocations from "../../utils/fetchLocations";
import type { ILocation } from "../../utils/fetchLocations";

const SearchInput = () => {
  const [query, setQuery] = useState<string>("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [locationsData, setLocationsData] = useState<ILocation[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideInputClick = (event: MouseEvent) => {
    const target = event.target as Node;

    // If clicked inside dropdown
    if (
      searchFocused &&
      searchDropdownRef.current &&
      searchDropdownRef.current.contains(target)
    ) {
      // Does nothing
      return;
    }
    // If outside the input is clicked
    else if (inputRef.current && !inputRef.current.contains(target)) {
      setSearchFocused(false);
    }
  };

  // Adds/removes event listener for disabling input focus on outside button click.
  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener("mousedown", handleOutsideInputClick, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  });

  return (
    <div className="flex flex-row relative w-full md:w-lg">
      <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a place..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setSearchFocused(true)}
        onClick={() => setSearchFocused(true)}
        className="text-preset-5-medium text-neutral-200 pl-15 bg-neutral-800 hover:bg-neutral-700 py-4 rounded-xl cursor-pointer shrink w-full"
      />

      {query !== "" && searchFocused && (
        <SearchDropdown
          searchDropdownRef={searchDropdownRef}
          setQuery={setQuery}
          searchFocused={searchFocused}
          setSearchFocused={setSearchFocused}
        />
      )}
    </div>
  );
};

export default SearchInput;
