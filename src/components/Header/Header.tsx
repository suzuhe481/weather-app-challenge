import Logo from "../Logo/Logo";
import UnitsButton from "../UnitsButton/UnitsButton";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 md:px-12 lg:px-24">
      <Logo />
      <UnitsButton />
    </div>
  );
};

export default Header;
