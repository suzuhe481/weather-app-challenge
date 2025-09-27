import StyledWrapper from "../StyledWrapper/StyledWrapper";
import SearchInput from "../SearchInput/SearchInput";
import SearchButton from "../SearchButton/SearchButton";

const SearchBar = () => {
  return (
    <StyledWrapper>
      <div className="flex flex-row justify-center items-center gap-4 px-0 w-full">
        <SearchInput />
        <SearchButton />
      </div>
    </StyledWrapper>
  );
};

export default SearchBar;
