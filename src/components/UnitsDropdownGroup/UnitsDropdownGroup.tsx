import type { Dispatch, SetStateAction } from "react";
import { CheckIcon } from "../../assets/icons/pageIcons";

interface IUnitsDropdownGroupProps {
  title: string;
  options: string[];
  optionsText: string[];
  action: Dispatch<SetStateAction<string>>;
  selected: string;
}

const UnitsDropdownGroup = ({
  title,
  options,
  optionsText,
  action,
  selected,
}: IUnitsDropdownGroupProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-preset-8 text-neutral-300 py-1.5 px-2 pb-2">
        {title}
      </div>

      <div className="flex flex-col gap-1 ">
        {options.map((option, index) => {
          return (
            <label className="flex justify-between items-center text-preset-7 text-neutral-0 py-2.5 px-2 hover:bg-neutral-600 cursor-pointer rounded-lg">
              {optionsText[index]}
              <input
                type="radio"
                name={title}
                value={option}
                checked={option === selected}
                onChange={() => action(option)}
                className="hidden"
              />
              {option === selected && <CheckIcon />}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default UnitsDropdownGroup;
