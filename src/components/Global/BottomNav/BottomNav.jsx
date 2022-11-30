import React from 'react'
import Button from '../Button/Button';
import{
    bottomNav,
    
    navi,
    navItem

} from './BottomNav.module.sass'
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
    const navLinkClasses = ({ isActive }) =>
    classNames({
        "text-zinc-500": !isActive,
        "text-black": isActive,
    });
  return (
    <div className={bottomNav}>
        <nav className={navi}>
          <div className={navItem}>
            <NavLink className={(state) => navLinkClasses(state)} to="/">
              <Button type='raw' icon='HomeIcon'></Button>
            </NavLink>
          </div>
          <div className={navItem}>
            <NavLink className={(state) => navLinkClasses(state)} to="/post/new">
              <Button type='filled' icon='PlusCircleIcon'></Button>
            </NavLink>
          </div>
          <div className={navItem}>
            <NavLink className={(state) => navLinkClasses(state)} to="/search">
              <Button type='raw' icon='MagnifyingGlassIcon'></Button>
            </NavLink>
          </div>
        </nav>
      </div>
  )
}

export default BottomNav