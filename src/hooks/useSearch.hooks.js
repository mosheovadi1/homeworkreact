import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { GenresContext } from "../components/GenresProvider/GenresProvider";

const useSearch = (currentSearch = "") => {
  const { genres, fetchGenres} = useContext(GenresContext);
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState(currentSearch);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleMoviesSearch(searchValue);
  };

  const handleClick = (event) => {
    setSearchValue(event.target.innerHTML);
    handleMoviesSearch(event.target.innerHTML);
  };

  const handleMoviesSearch = (genre) => {
    if (genres.includes(genre)) {
      navigate(`/movies/${genre}`);
    }
  };

  return { searchValue, genres, handleInputChange, handleClick, handleSubmit, handleMoviesSearch };
};

export default useSearch;
