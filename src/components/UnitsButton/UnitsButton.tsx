import { useState, useEffect, useRef } from "react";

import UnitsDropdown from "../UnitsDropdown/UnitsDropdown";
import { CogIcon, ArrowIcon } from "../../assets/icons/pageIcons";

const UnitsButton = () => {
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
        onClick={() => setDropdownOpen(!dropdownOpen)}
        ref={dropdownButtonRef}
        className="flex flex-row items-center gap-[10px] bg-neutral-800 hover:bg-neutral-600 rounded-lg px-4 py-3 cursor-pointer"
      >
        <CogIcon />
        <p className="text-preset-7 text-neutral-0">Units</p>
        <ArrowIcon />
      </button>
      {dropdownOpen && <UnitsDropdown ref={dropdownRef} />}
    </div>
  );
};

export default UnitsButton;
