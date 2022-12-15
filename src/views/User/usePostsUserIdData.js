import React, { useState } from "react";

const usePostsUserIdData = () => {
  //
  const [postsUser, setPostUser] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);


  const fetchPostsUserId = async (id) => {
    try {
      setIsLoading(true);
      const postsUser_ = await fetch(
        "http://localhost:5757/posts?userId="+id
      )
        .then((d) => d.json())
        .then((d) => d);

      setPostUser(postsUser_);
      setIsLoading(false);
    } catch (e) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  
  return { postsUser, fetchPostsUserId, isLoading, hasError };
};

export default usePostsUserIdData;