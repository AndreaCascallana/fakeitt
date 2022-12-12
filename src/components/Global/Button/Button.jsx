import classNames from 'classnames';
import React from 'react'
import { stringToIcon } from '../../../utils/stringToIcon';
import {
  button,
  buttonFilled,
  buttonOutlined,
  buttonRaw,
  buttonRounded,
} from "./Button.module.sass";


const Button = ({children, clickHandler, buttonType, icon}) => {
  const buttonClasses = classNames(button, {
    [`${buttonFilled}`]: buttonType == "filled",
    [`${buttonOutlined}`]: buttonType == "outlined",
    [`${buttonRaw}`]: buttonType == "raw",
    [`${buttonRounded}`]: buttonType == "rounded",
  });
  const Icon= stringToIcon(icon)
  return (
    <button className={buttonClasses} onClick={clickHandler}>
      {icon && <span className="icon">{<Icon height={18} />}</span>}
        <span>{children}</span>
      

    </button>
    // <div onClick={clickHandler}>{children}</div>
  )
}

export default Button