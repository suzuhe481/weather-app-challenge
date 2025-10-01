import { SearchIcon } from "../../assets/icons/pageIcons";

const SearchInput = () => {
  return (
    <div className="flex flex-row relative w-full md:w-lg">
      <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search for a place..."
        className="text-preset-5-medium text-neutral-200 pl-15 bg-neutral-800 hover:bg-neutral-700 py-4 rounded-xl cursor-pointer shrink w-full"
      />
    </div>
  );
};

export default SearchInput;
