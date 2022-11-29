import React, { useEffect, useState } from "react";

const useUserSingleData = () => {
  //
  const [userSingle, setUserSingle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // petición
  useEffect(() => {
    fetchUserSingle();
  }, []);

  //fetch, loading and error controller
  const fetchUserSingle = async (id) => {
    try {
      setIsLoading(true);
      const userSingle_ = await fetch(
        "http://localhost:5757/users?id=" + id
      )
        .then((d) => d.json())
        .then((d) => d);

      setUserSingle(userSingle_);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
    }
  };
  return { userSingle, isLoading, hasError };
};

export default useUserSingleData;
