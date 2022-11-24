import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import classNames from "classnames";
import {
  app,
  header,
  logoContainer,
  logo,
  navi,
  navItem
} from "./App.module.sass";

const App = () => {
  const navLinkClasses = ({ isActive }) =>
    classNames({
      "text-zinc-500": !isActive,
      "text-black": isActive,
    });
  // const routes = [{to: "/", label: "Home"}]
  return (
    <div className={app}>
      <div className={header}>
        <div className={logoContainer}>
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
            <NavLink className={(state) => navLinkClasses(state)} to="/">
              Home
            </NavLink>
          </div>
          <div className={navItem}>
            <NavLink
              className={(state) => navLinkClasses(state)}
              to="/profile/0762083f-b2ab-463e-972d-bb6f134694b1"
            >
              My Profile
            </NavLink>
          </div>
          <div className={navItem}>
            <NavLink className={(state) => navLinkClasses(state)} to="/search">
              Search
            </NavLink>
          </div>
          <div className={navItem}>
            <NavLink
              className={(state) => navLinkClasses(state)}
              to="/post/new"
            >
              New Post
            </NavLink>
          </div>
        </nav>
      </div>

      {/*
       *
       **** ¡¡IMPORTANTE!!
       **** El ruteado siempre tiene que ir en un main
       *
       */}
      <main className="main">
        <Routing />
      </main>
    </div>
  );
};

export default App;
