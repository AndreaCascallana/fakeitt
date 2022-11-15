import React from "react";
import { useContext } from "react";
import AppFilter from "./components/AppFilter";
import Button from "./components/Global/Button";
import EditingForm from "./components/EditingForm";
import UserList from "./components/UserList";
import { MainContext } from "./contexts/MainContext";
import Form from "./components/Form";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";

const App = () => {
  // Custom hook: UserData
  // const { users, fetchUsers, deleteUser, hasError } = useUsersData();

  const { isFormVisible } = useContext(MainContext);

  return (
    <div className="app">
      <div className="header flex justify-between	p-8">

        <div className="logo">logo</div>

        <nav className="navi flex gap-8">
          <div className="naviItem">
            <NavLink className={({ isActive }) => isActive ? "text-black" : "text-zinc-400	"} to="/">Home</NavLink>
          </div>
          <div className="naviItem">
            <NavLink className={({ isActive }) => isActive ? "text-black" : "text-zinc-400	"} to="/about">About</NavLink>
          </div>
          <div className="naviItem">
            <NavLink className={({ isActive }) => isActive ? "text-black" : "text-zinc-400	"} to="/users">Users</NavLink>
          </div>
          <div className="naviItem">
            <NavLink className={({ isActive }) => isActive ? "text-black" : "text-zinc-400	"} to="/aaa">404</NavLink>
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




      <div className="flex items-center justify-between">
        <div>
          <div>
            <AppFilter></AppFilter>
          </div>
          <div>
            <UserList></UserList>
            <Button></Button>
          </div>
        </div>
        {isFormVisible ? (
          <div>
            <EditingForm></EditingForm>
            {/* <Form /> */}
          </div>
        ) : null}

        {/* {!hasError ? (
        users.map((user) => (
          <div key={user.id} onClick={() => deleteUser(user.id)}>
            {user.name} - {user.fName}
          </div>
        ))
      ) : (
        <p>algo fue mal...</p>
      )} */}
      </div>
    </div>
  );
};

export default App;
