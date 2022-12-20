import React from "react";
import Button from "../Button/Button";
import {
  header,
  headerContainer,
  logo_container,
  logo,
  navi,
  navItem,
} from "./Header.module.sass";
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
      <div className={headerContainer}>
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
            <NavLink
              className={(state) => navLinkClasses(state)}
              to="/users/6c43f083-9286-4a15-9d44-d27f75e7fef6"
            >
              <Button buttonType="raw" icon="UserIcon"></Button>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderHome;
