import { Link } from "react-router-dom";

import css from "./SearchBar.module.css";

import { SEARCH_PAGE_PATH } from "../../constants/routes.constants";

import Button from "../Button";
import SearchInput from "../InputWithSuggestions";
import Logo from "../Logo";

import useSearch from "../../hooks/useSearch.hooks";

const SearchBar = ({ value }) => {
  const {
    searchValue,
    genres,
    handleInputChange,
    handleClick,
    handleMoviesSearch,
  } = useSearch(value);

  return (
    <div className={css["container"]}>
      <div className={css["logo-container"]}>
          <Link to={SEARCH_PAGE_PATH}>
        <Logo width={150} />
        </Link>
      </div>
      <SearchInput
        value={searchValue}
        onChange={handleInputChange}
        suggestions={genres}
        onSuggestionClick={handleClick}
      />
      <Button
        className={css["search-button"]}
        onClick={() => handleMoviesSearch(searchValue)}
      >
        Try Again
      </Button>
    </div>
  );
};

export default SearchBar;
