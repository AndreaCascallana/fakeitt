import React, { useEffect, useState } from "react";

const usePostsData = () => {
  //
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  //const navigate = useNavigate();

  // // petición
  

  //fetch, loading and error controller
  const fetchSinglePost = async (id) => {
    try {
      setIsLoading(true);
      const post_ = await fetch(
        "http://localhost:5757/posts/"+id
      )
        .then((d) => d.json())
        .then((d) => d);

      // console.log(post_);
      setPost(post_);
      setIsLoading(false);
      // console.log(post_)
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
      //navigate("/404")
    }
    // return post
  };


  

  return {fetchSinglePost, post, isLoading, hasError, isLoading };
};

export default usePostsData;
