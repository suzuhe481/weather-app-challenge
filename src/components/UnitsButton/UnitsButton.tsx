import { CogIcon, ArrowIcon } from "../../assets/icons/pageIcons";

const UnitsButton = () => {
  return (
    <button className="flex flex-row items-center gap-[10px] bg-neutral-800 hover:bg-neutral-600 rounded-lg px-4 py-3 cursor-pointer">
      <CogIcon />
      <p className="font-secondary text-base text-neutral-0 leading-[120%]">
        Units
      </p>
      <ArrowIcon />
    </button>
  );
};

export default UnitsButton;
