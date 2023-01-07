import React, { useState } from "react";

const useUserSingleByNameData = () => {
  //
  const [userSingleByName, setUserSingleByName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  //fetch, loading and error controller
  const fetchUserSingleByName = async (id) => {
    try {
      setIsLoading(true);
      const userSingleByName_ = await fetch(
        "http://localhost:5757/users?name=" + name
      )
        .then((d) => d.json())
        .then((d) => d);

        setUserSingleByName(userSingleByName_);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
    }
  };
  return { fetchUserSingleByName, userSingleByName, isLoading, hasError };
};

export default useUserSingleByNameData;