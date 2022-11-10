import React from "react";
import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import UserSingle from "./UserSingle";

const UserList = () => {
  const { users } = useContext(UsersContext);

  return (
    <div className="container mx-auto">
      {users.map((user, i) => (
        <UserSingle key={i} user={user}>
            {JSON.stringify(user)}
        </UserSingle>
      ))}
    </div>
  );
};

export default UserList;
