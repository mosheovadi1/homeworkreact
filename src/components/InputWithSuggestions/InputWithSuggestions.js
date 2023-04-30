import { useMemo, useState, useRef } from "react";

import css from "./InputWithSuggestions.module.css";

const SearchInput = ({
  value,
  onChange = () => {},
  suggestions = [],
  onSuggestionClick,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const suggestionsListRef = useRef(null);

  const filteredSuggestions = useMemo(() => {
    return suggestions.filter(
      (suggestion) => suggestion.includes(value) && suggestion !== value
    );
  }, [value, suggestions]);

  return (
    <div className={css["input-container"]}>
      <input
        type="text"
        placeholder="Search for a movie..."
        className={css["input"]}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          const isClickOnSuggestions =
            e.relatedTarget &&
            e.relatedTarget.className === css["suggestions-container"];
          if (!isClickOnSuggestions) {
            setIsFocused(false);
          }
        }}
        onChange={onChange}
      />
      {filteredSuggestions.length > 0 && isFocused && value.length > 0 && (
        <div className={css["suggestions-container"]} tabIndex="0" ref={suggestionsListRef}>
          {filteredSuggestions.map((suggestion) => (
            <div
              key={suggestion}
              onClick={(e) => {
                onSuggestionClick(e);
              }}
              className={css["suggestion"]}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
