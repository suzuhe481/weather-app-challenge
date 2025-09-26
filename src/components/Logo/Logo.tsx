import { LogoIcon } from "../../assets/icons/pageIcons";

const Logo = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-[10px]">
      <LogoIcon />
      <div className="text-neutral-0 font-primary font-bold">Weather Now</div>
    </div>
  );
};

export default Logo;
