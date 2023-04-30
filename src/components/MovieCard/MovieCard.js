import React from "react";

import css from "./MovieCard.module.css";

const MovieCard = ({ imgUrl, name }) => {
  return (
    <div className={css["container"]}>
      <img className={css['img']} src={imgUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default MovieCard;
