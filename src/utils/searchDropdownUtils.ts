import type { KeyboardEvent, Dispatch, SetStateAction, RefObject } from "react";

export const handleKeyDown = (
  event: KeyboardEvent<HTMLDivElement>,
  searchFocused: boolean,
  locationsIndex: number | null,
  locationsLength: number,
  setLocationsIndex: Dispatch<SetStateAction<number | null>>,
  searchItemRefs: RefObject<HTMLButtonElement[] | null>
) => {
  if (!searchFocused) return;

  const moveOptionDown = (
    locationsIndex: number | null,
    setLocationsIndex: Dispatch<SetStateAction<number | null>>
  ) => {
    if (locationsIndex !== null && locationsIndex < locationsLength - 1) {
      focusItem(locationsIndex + 1);
      setLocationsIndex(locationsIndex + 1);
    }
  };

  const moveOptionUp = (
    locationsIndex: number | null,
    setLocationsIndex: Dispatch<SetStateAction<number | null>>
  ) => {
    if (locationsIndex !== null && locationsIndex > 0) {
      focusItem(locationsIndex - 1);
      setLocationsIndex(locationsIndex - 1);
    }
  };

  const moveToFirstOption = (
    setLocationsIndex: Dispatch<SetStateAction<number | null>>
  ) => {
    focusItem(0);
    setLocationsIndex(0);
  };

  const moveToLastOption = (
    setLocationsIndex: Dispatch<SetStateAction<number | null>>
  ) => {
    focusItem(locationsLength - 1);
    setLocationsIndex(locationsLength - 1);
  };

  // Focuses the SearchItem at the given index
  const focusItem = (index: number) => {
    if (
      searchItemRefs &&
      searchItemRefs.current &&
      searchItemRefs.current[index]
    ) {
      searchItemRefs.current[index].focus();
    }
  };

  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();

      if (locationsIndex === null || locationsIndex === locationsLength - 1) {
        moveToFirstOption(setLocationsIndex);
      } else if (
        locationsIndex !== null &&
        locationsIndex < locationsLength - 1
      ) {
        moveOptionDown(locationsIndex, setLocationsIndex);
      }
      break;
    case "ArrowUp":
      event.preventDefault();

      if (locationsIndex === null || locationsIndex === 0) {
        moveToLastOption(setLocationsIndex);
      } else if (locationsIndex !== null && locationsIndex > 0) {
        moveOptionUp(locationsIndex, setLocationsIndex);
      }
      break;
    default:
      break;
  }
};
