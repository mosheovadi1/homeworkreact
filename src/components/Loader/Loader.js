import css from "./Loader.module.css";

const Loader = ({ isLoading, children }) => {
  return isLoading ? <div className={css["loader"]}></div> : children;
};

export default Loader;
