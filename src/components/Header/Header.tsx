import Logo from "../Logo/Logo";
import UnitsButton from "../UnitsButton/UnitsButton";
import StyledWrapper from "../StyledWrapper/StyledWrapper";

const Header = () => {
  return (
    <StyledWrapper>
      <div className="flex flex-row justify-between items-center">
        <Logo />
        <UnitsButton />
      </div>
    </StyledWrapper>
  );
};

export default Header;
