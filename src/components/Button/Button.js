import classNames from "classnames/bind";

import css from "./Button.module.css";

const cx = classNames.bind(css);

const Button = ({ children, onClick, className, ...restProps }) => {
  const buttonClassName = cx("button", className);

  return (
    <button className={buttonClassName} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
