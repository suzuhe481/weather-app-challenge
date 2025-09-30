import { useState, useRef, useEffect } from "react";

import { ArrowIcon } from "../../assets/icons/pageIcons";
import DayDropdown from "../DayDropdown/DayDropdown";

interface IDayButtonProps {
  currentDay: string;
}

export const DayButton = ({ currentDay }: IDayButtonProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);

  // Handler function to close modal on outside click.
  function handleClickOutsideMenu(event: MouseEvent) {
    const target = event.target as Node;

    // If button is clicked, the dropdown will be toggled opened/closed, handled by button's onClick.
    // Reason: Without this, modal will keep opening when clicking the icon.
    if (
      dropdownOpen &&
      dropdownButtonRef.current &&
      dropdownButtonRef.current.contains(target)
    ) {
      // Does nothing
    }
    // If anywhere else on the page is clicked that isn't inside the menu, close the menu.
    else if (
      dropdownOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(target)
    ) {
      setDropdownOpen(false);
    }
  }

  // Adds/removes event listener for closing the FilterModal on outside button click.
  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener("mousedown", handleClickOutsideMenu, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  });

  return (
    <div className="relative">
      <button
        ref={dropdownButtonRef}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex flex-row items-center gap-3 rounded-lg bg-neutral-600 hover:bg-neutral-700 py-2 px-4 text-preset-7 text-neutral-0 cursor-pointer"
      >
        {currentDay} <ArrowIcon />
      </button>
      {dropdownOpen && <DayDropdown ref={dropdownRef} />}
    </div>
  );
};

export default DayButton;
