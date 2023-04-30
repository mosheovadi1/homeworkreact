import css from "./SearchPage.module.css";

import SearchInput from "../InputWithSuggestions";
import Button from "../Button";
import Logo from "../Logo";

import useSearch from "../../hooks/useSearch.hooks";

const SearchPage = () => {
  const { searchValue, genres, handleInputChange, handleClick, handleSubmit } =
    useSearch();

  return (
    <div className={css["container"]}>
      <div className={css["logo-container"]}>
        <Logo />
      </div>
      <form className={css["search-form"]} onSubmit={handleSubmit}>
        <SearchInput
          value={searchValue}
          onChange={handleInputChange}
          suggestions={genres}
          onSuggestionClick={handleClick}
        />
        <Button className={css["search-button"]} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchPage;
