import type { Dispatch, SetStateAction } from "react";
import { CheckIcon } from "../../assets/icons/pageIcons";

// Props for the UnitsDropdownGroup component.
// The generic type parameter <T> is used to specify the type of the action.
// readonly is used to assert that an immutable array is passed to resolve type errors.
interface IUnitsDropdownGroupProps<T> {
  title: string;
  options: readonly string[];
  optionsText: readonly string[];
  action: Dispatch<SetStateAction<T>>;
  selected: string;
}

/**
 * A component that renders a dropdown group for selecting units.
 * The component takes in a title, an array of options, an array of option texts,
 * a radio button with a corresponding label.
 * The currently selected option is highlighted with a background color.
 *
 * The <T,> is a generic type parameter where the comma is used to prevent TypeScript
 * from interpretting the generic as an array or something else.
 *
 * @param {string} title - The title of the dropdown group.
 * @param {string[]} options - An array of options to render.
 * @param {string[]} optionsText - An array of text to render for each option.
 * @param {Dispatch<SetStateAction<T>>} action - The action to dispatch when an option is selected.
 * @param {string} selected - The currently selected option.
 */
const UnitsDropdownGroup = <T,>({
  title,
  options,
  optionsText,
  action,
  selected,
}: IUnitsDropdownGroupProps<T>) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-preset-8 text-neutral-300 py-1.5 px-2 pb-2">
        {title}
      </div>

      <div className="flex flex-col gap-1 ">
        {options.map((option, index) => {
          return (
            <label
              className={`${
                option === selected && "bg-neutral-600"
              } flex justify-between items-center text-preset-7 text-neutral-0 py-2.5 px-2 hover:bg-neutral-600 cursor-pointer rounded-lg`}
            >
              {optionsText[index]}
              <input
                type="radio"
                name={title}
                value={option}
                checked={option === selected}
                onChange={() => action(option as T)}
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
