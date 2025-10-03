import type { KeyboardEvent, Dispatch, SetStateAction, RefObject } from "react";

export const handleKeyDown = (
  event: KeyboardEvent<HTMLDivElement>,
  searchFocused: boolean,
  suggestionsIndex: number | null,
  suggestions: string[],
  setSuggestionsIndex: Dispatch<SetStateAction<number | null>>,
  searchItemRefs: RefObject<HTMLButtonElement[] | null>
) => {
  if (!searchFocused) return;

  const moveOptionDown = (
    suggestionsIndex: number | null,
    suggestions: string[],
    setSuggestionsIndex: Dispatch<SetStateAction<number | null>>
  ) => {
    if (
      suggestionsIndex !== null &&
      suggestionsIndex < suggestions.length - 1
    ) {
      focusItem(suggestionsIndex + 1);
      setSuggestionsIndex(suggestionsIndex + 1);
    }
  };

  const moveOptionUp = (
    suggestionsIndex: number | null,
    setSuggestionsIndex: Dispatch<SetStateAction<number | null>>
  ) => {
    if (suggestionsIndex !== null && suggestionsIndex > 0) {
      focusItem(suggestionsIndex - 1);
      setSuggestionsIndex(suggestionsIndex - 1);
    }
  };

  const moveToFirstOption = (
    setSuggestionsIndex: Dispatch<SetStateAction<number | null>>
  ) => {
    focusItem(0);
    setSuggestionsIndex(0);
  };

  const moveToLastOption = (
    suggestions: string[],
    setSuggestionsIndex: Dispatch<SetStateAction<number | null>>
  ) => {
    focusItem(suggestions.length - 1);
    setSuggestionsIndex(suggestions.length - 1);
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

      if (
        suggestionsIndex === null ||
        suggestionsIndex === suggestions.length - 1
      ) {
        moveToFirstOption(setSuggestionsIndex);
      } else if (
        suggestionsIndex !== null &&
        suggestionsIndex < suggestions.length - 1
      ) {
        moveOptionDown(suggestionsIndex, suggestions, setSuggestionsIndex);
      }
      break;
    case "ArrowUp":
      event.preventDefault();

      if (suggestionsIndex === null || suggestionsIndex === 0) {
        moveToLastOption(suggestions, setSuggestionsIndex);
      } else if (suggestionsIndex !== null && suggestionsIndex > 0) {
        moveOptionUp(suggestionsIndex, setSuggestionsIndex);
      }
      break;
    default:
      break;
  }
};
