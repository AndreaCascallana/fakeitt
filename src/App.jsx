import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import classNames from "classnames";
import AppStyles from "./App.module.sass"

const App = () => {
  
  const navLinkClasses = ({ isActive }) =>
    classNames({
      "text-zinc-500": !isActive,
      "text-black": isActive,
    });
  // const routes = [{to: "/", label: "Home"}]
  return (
    <div className={AppStyles.app}>
      <div className={AppStyles.header}>
        <div className={AppStyles.logo_container}>
          <img className={AppStyles.logo} src="/img/fakeitt-isotipo.svg" alt="isotipo Fakeitt" />
        </div>

        <nav className={AppStyles.navi}>
          <div className={AppStyles.navItem}>
            <NavLink className={(state) => navLinkClasses(state)} to="/">
              Home
            </NavLink>
          </div>
          <div className={AppStyles.navItem}>
            <NavLink
              className={(state) => navLinkClasses(state)}
              to="/profile/0762083f-b2ab-463e-972d-bb6f134694b1"
            >
              My Profile
            </NavLink>
          </div>
          <div className={AppStyles.navItem}>
            <NavLink
              className={(state) => navLinkClasses(state)}
              to="/search"
            >
              Search
            </NavLink>
          </div>
          <div className={AppStyles.navItem}>
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
