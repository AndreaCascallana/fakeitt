import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserSingleContext  } from "../../contexts/UserSingleContext";

const UserSingle = () => {
  // PARA UTILIZAR EL USERCONTEXT YA CREADO
  const { user } = useContext(UserSingleContext);




  // const { userId } = useParams();
  // const [user, setUser] = useState({});
  // const navigate = useNavigate()
  // useEffect(() => {
  //   fetchSingle();
  // }, []);

  // const fetchSingle = async () => {
  //   const request = await fetch(
  //     "http://localhost:5757/users/" + userId + "?_embed=comments"
  //   );
  //   if (request.status == 404) {
  //       navigate("/users")
  //   }
  //   const user_ = await request.json().then((d) => d);
  //   setUser(user_);
  // };

  return <div>{JSON.stringify(user)}</div>;
};

export default UserSingle;