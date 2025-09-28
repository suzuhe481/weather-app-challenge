import { ArrowIcon } from "../../assets/icons/pageIcons";

interface IDayButtonProps {
  currentDay: string;
}

export const DayButton = ({ currentDay }: IDayButtonProps) => {
  return (
    <button className="flex flex-row items-center gap-3 rounded-lg bg-neutral-600 hover:bg-neutral-700 py-2 px-4 text-preset-7 text-neutral-0 cursor-pointer">
      {currentDay} <ArrowIcon />
    </button>
  );
};

export default DayButton;
