import React from "react";
import { useContext } from "react";
import { EditingUserContext } from "../contexts/EditingUserContext";
import { MainContext } from "../contexts/MainContext";
import { UsersContext } from "../contexts/UsersContext";
import Button from "./Global/Button/Button";

const UserSingle = ({ children, user }) => {
  const { deleteUser } = useContext(UsersContext);
  const { showForm } = useContext(MainContext);
  const { loadDataIntoForm } = useContext(EditingUserContext);

  return (
    <div className="w-[400px] break-words bg-gray-200 p-4 mb-2">
      {/* INFO */}
      <div className="user">
        <div>NAME: {user.name + " " + user.fName}</div>
        <div>EMAIL: {user.email}</div>
        <div>SEX: {user.sex}</div>
      </div>

      {/* CTAS */}
      <div>
        <Button
          clickHandler={() => {
            deleteUser(user.id);
          }}
        >
          Borrar
        </Button>
        <Button
          clickHandler={() => {
            showForm();
            loadDataIntoForm(user);
          }}
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

export default UserSingle;
