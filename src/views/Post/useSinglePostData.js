import React, { useEffect, useState } from "react";
import usePostData from "./usePostsData";

const usePostsData = () => {
  //
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);


  //fetch, loading and error controller
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
      setHasError(true);
      setIsLoading(false);
    }
  };


  return {fetchSinglePost, post, isLoading, hasError };
};

export default usePostsData;
