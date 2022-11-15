import React from 'react'

const Button = ({children, clickHandler}) => {
  return (
    <div onClick={clickHandler}>{children}</div>
  )
}

export default Button