import React from 'react'
import Button from '../Button/Button';
import{
    header,
    logo_container,
    logo,
    navi,
    navItem

} from './Header.module.sass'
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const HeaderHome = () => {
    const navLinkClasses = ({ isActive }) =>
    classNames({
        "text-zinc-500": !isActive,
        "text-black": isActive,
    });
  return (
    <div className={header}>
        <div className={logo_container}>
          <NavLink className={(state) => navLinkClasses(state)} to="/">
            <img
              className={logo}
              src="/img/fakeitt-isotipo.svg"
              alt="isotipo Fakeitt"
            />
          </NavLink>
        </div>

        <nav className={navi}>
          <div className={navItem}>
            <NavLink className={(state) => navLinkClasses(state)} to="/users/cea2fd15-b127-4062-b780-6fed8c7aa249">
              <Button type='raw' icon='UserIcon'></Button>
            </NavLink>
          </div>
        </nav>
      </div>
  )
}

export default HeaderHome