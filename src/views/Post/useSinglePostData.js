import React, { useEffect, useState } from "react";

const usePostsData = () => {
  //
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
 

  // petición fetch

  const fetchSinglePost = async (id) => {
    try {
      setIsLoading(true);
      const post_ = await fetch(
        "http://localhost:5757/posts/"+id
      )
        .then((d) => d.json())
        .then((d) => d);
      setPost(post_);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
    }
    // return post
  };


  

  return {fetchSinglePost, post, isLoading, hasError };
};

export default usePostsData;
