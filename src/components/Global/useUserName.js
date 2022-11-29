import React, { useEffect, useState } from "react";

const useUserName = () => {
  const [user, setUser] = useState({});

  const fetchUserName = async (userId) => {
    try {
      const user_ = await fetch("http://localhost:5757/users/" + userId)
        .then((d) => d.json())
        .then((d) => d);
      setUser(user_);
    } catch (e) {
      console.log(e);
      const userDeleted = "[deleted]";
      return userDeleted;
    }
  };

  return { fetchUserName, user };
};

export default useUserName;
