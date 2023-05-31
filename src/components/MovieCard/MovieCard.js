import css from "./MovieCard.module.css";
import ItemControl from "../ItemControl/ItemControl"
  const MovieCard = ({imgUrl, name, onclick, container=true}) => {
    
  return (
    <div>
      <div className={container?css["container"]: css["card"]}>
      <img className={container?css["img"]: css["img-card"]} src={imgUrl} alt={name} onClick={onclick}/>
      <h3>{name}</h3>
      <ItemControl key={name+container} name={name}/>
      </div>
    </div>
  );
};

export default MovieCard;
