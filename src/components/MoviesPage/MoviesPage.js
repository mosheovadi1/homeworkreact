import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import css from "./MoviesPage.module.css";

import MovieCard from "../MovieCard";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader";
import Button from "../Button";


const MoviesPage = () => {
  const { genre } = useParams();
  
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCart, setIsCart] = useState(1);
  
  const clickOnMovie = (name) =>  {
    const currentValue = parseInt(window.localStorage.getItem(name)) || 0
    window.localStorage.setItem(name, currentValue + 1)
    
    window.dispatchEvent(new Event(name))
  }

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
  const reset = ()=>{
    for(var key in localStorage){
      window.localStorage.setItem(key,  0)
    
    window.dispatchEvent(new Event(key))
   }
  }
  const movieCart = ()=>{
    for(var key in localStorage){
      console.log(key)
      if (window.localStorage.getItem(key)!= 0)
      {
        console.log(window.localStorage.getItem(key))
        return true
      }
      
   }
  }
  const cards = (<div className={css["aside"]}>
  <Loader isLoading={isLoading} className={css["aside"]}>
    {movies.map((movie) => (  (parseInt(window.localStorage.getItem(movie.name))) ?
    <MovieCard key={movie.name+ "card" + new Date()} onclick={(e) => clickOnMovie(movie.name)} {...movie} container={false} className={css["aside"]}/>:
    ""
    ))}
    {movieCart() ?<Button width={"300px"} onClick={reset} className={css["buy-button"]}>buy</Button>:""}
  </Loader>
</div>)

  useEffect(() => {
  const cards = (<div className={css["aside"]}>
  <Loader isLoading={isLoading} className={css["aside"]}>
    {movies.map((movie) => (  (parseInt(window.localStorage.getItem(movie.name))) ?
    <div><MovieCard key={movie.name+ "card" + new Date()} onclick={(e) => clickOnMovie(movie.name)} {...movie} container={false} className={css["aside"]}/>
    
    </div>:
    ""
    ))
    }
    {movieCart() ?<Button width={"300px"} onClick={reset} className={css["buy-button"]}>buy</Button>:""}
    </Loader>
</div>)
movies.map((movie) => {
  window.addEventListener(movie.name,((e)=>{
    setIsCart((prev)=> (prev+1))
 }).bind(this));
console.log(parseInt(window.localStorage.getItem(movie.name)))})
}, [isCart]);
  return (
    <div>
    <div className={css["container"]} >
      <div className={css["search-bar-container"]} >
        <SearchBar value={genre} />
      </div>
      <div className={css["movies-container"]} >
        <Loader isLoading={isLoading}>
          {movies.map((movie) => (
          <MovieCard key={movie.name} onclick={(e) => clickOnMovie(movie.name)} {...movie} />
          ))}
        </Loader>
      </div>
    </div>
    {cards}
    
  </div>
  );
};

export default MoviesPage;
