import type { Dispatch, SetStateAction, RefObject } from "react";

interface ISearchItemProps {
  searchItemRefs: RefObject<HTMLButtonElement[] | null>;
  index: number;
  location: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setSearchFocused: Dispatch<SetStateAction<boolean>>;
}

const SearchItem = ({
  searchItemRefs,
  index,
  location,
  setQuery,
  setSearchFocused,
}: ISearchItemProps) => {
  const handleButtonClick = () => {
    setQuery(location);
    setSearchFocused(false);
  };

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
