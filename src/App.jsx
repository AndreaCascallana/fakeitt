import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
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
import useUserSingleData from "./views/User/useUserSingleData";

const App = () => {
  const { userSingle } = useUserSingleData();

  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get(userSingle.id);
  
  const navLinkClasses = ({ isActive }) =>
    classNames({
      "text-zinc-500": !isActive,
      "text-zinc-900": isActive,
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
              to="/users/a67a4f48-433e-4ef1-a412-0fec63c97290"
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
