import React, { useEffect, useParams } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  userCardContainer,
  userCardData,
  avatar,
  author,
  userCardCtas,
} from "./UserCard.module.sass";
import useUserSingleData from "../../../views/User/useUserSingleData";

const UserCard = ({ name, fName, id }) => {
  const { fetchUserSingle, userSingle } = useUserSingleData();

  // petición nada más cargar
  useEffect(() => {
    fetchUserSingle();
  }, []);

  return (
    <div className={userCardContainer}>
      <div className={userCardData}>
        <div className={avatar}>
          <img
            src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            alt="User's Avatar"
          />
        </div>
        <div className={author}>
          <Link to={`/users/${id}`}>
            {name} {fName}
          </Link>
        </div>
      </div>
      <div className={userCardCtas}>
        <Button buttonType="filled">Follow</Button>
      </div>
    </div>
  );
};

export default UserCard;
