import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Routing from "./Routing";
import classNames from "classnames";
import { app, main, viewContainer } from "./App.module.sass";
import useUserSingleData from "./views/User/useUserSingleData";
import HeaderHome from "./components/Global/Headers/HeaderHome";
import BottomNav from "./components/Global/BottomNav/BottomNav";

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
      <HeaderHome />
      <BottomNav />

      {/*
       *
       **** ¡¡IMPORTANTE!!
       **** El ruteado siempre tiene que ir en un main
       *
       */}
      <main className={main}>
        <div className={viewContainer}>
          <Routing />
        </div>
      </main>
    </div>
  );
};

export default App;
