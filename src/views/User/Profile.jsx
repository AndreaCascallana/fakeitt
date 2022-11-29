import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserSingleContext  } from "../../contexts/UserSingleContext";
import useUserSingleData from "./useUserSingleData";

const UserSingle = () => {
  const { UserSingle } = useUserSingleData();
  const { id } = useParams()

  return <div>{JSON.stringify(id)}</div>;
};

export default UserSingle;