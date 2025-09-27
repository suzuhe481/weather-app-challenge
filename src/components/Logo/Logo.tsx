import { LogoIcon } from "../../assets/icons/pageIcons";

const Logo = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-[10px]">
      <LogoIcon />
      <div className="font-primary text-neutral-0 font-bold text-[22px]">
        Weather Now
      </div>
    </div>
  );
};

export default Logo;
