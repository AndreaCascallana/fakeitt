import React from "react";
import Button from "../Button/Button";
import {
  bottomNav,
  bottomNavContainer,
  navi,
  navItem,
} from "./BottomNav.module.sass";
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
      <div className={bottomNavContainer}>
        <nav className={navi}>
          <div className={navItem}>
            <NavLink className={(state) => navLinkClasses(state)} to="/">
              <Button buttonType="raw" icon="HomeIcon"></Button>
            </NavLink>
          </div>
          <div className={navItem}>
            <NavLink
              className={(state) => navLinkClasses(state)}
              to="/post/new"
            >
              <Button buttonType="rounded" icon="PlusIcon"></Button>
            </NavLink>
          </div>
          <div className={navItem}>
            <NavLink className={(state) => navLinkClasses(state)} to="/search">
              <Button buttonType="raw" icon="MagnifyingGlassIcon"></Button>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;
