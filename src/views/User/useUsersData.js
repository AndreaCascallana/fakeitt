import React, { useEffect, useState, useNavigate } from "react";

export const useUsersData = () => {
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  //
  const fetchUsers = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const users_ = await fetch("http://localhost:5757/users", requestOptions)
        .then((d) => d.json())
        .then((d) => d);

      setUsers(users_);
    } catch (e) {
      setHasError(true);
      navigate("/404")
    }
  };

  //
  const deleteUser = async (id) => {
    try {
      await fetch("http://localhost:5757/users/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("usuario borrado");
      await fetchUsers();
    } catch (e) {
      setHasError(true);
    }
  };

  return {
    users,
    fetchUsers,
    deleteUser,
    hasError,
  };
};
