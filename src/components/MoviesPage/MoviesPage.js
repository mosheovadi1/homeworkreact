import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import css from "./MoviesPage.module.css";

import MovieCard from "../MovieCard";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader";

const MoviesPage = () => {
  const { genre } = useParams();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/genresMovies?category=${genre}`
        );
        setMovies(response.data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [genre]);

  return (
    <div className={css["container"]}>
      <div className={css["search-bar-container"]}>
        <SearchBar value={genre} />
      </div>
      <div className={css["movies-container"]}>
        <Loader isLoading={isLoading}>
          {movies.map((movie) => (
            <MovieCard key={movie.name} {...movie} />
          ))}
        </Loader>
      </div>
    </div>
  );
};

export default MoviesPage;
