import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // const users_ = await fetch("http://localhost:5757/users")
    //   .then((d) => d.json())
    //   .then((d) => d);
    // setUsers(users_);

    try {
      const request = await fetch("http://localhost:5757/users")
      // console.log(request);
      const users_ = await fetch("http://localhost:5757/users").then(d => d.json()).then(d => d)
      setUsers(users_)
    } catch (e) {
      navigate("/404")
    }
  };

  const deleteUser = async (id) => {
    console.log(id);
    await fetch("http://localhost:5757/users/" + id, {
      method: "delete", 
      headers: {
        "Content-Type": "application/json"
      }
    })
    await fetchUsers()
  };

  const value = { users, deleteUser };
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
