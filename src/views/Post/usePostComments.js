import React, { useEffect, useState } from "react";

const usePostComments = () => {
  //
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  

  //fetch, loading and error controller
  const fetchPostComments = async (id) => {
    try {
      setIsLoading(true);
      const comments_ = await fetch(
        "http://localhost:5757/comments?"+id+"&_order=asc&_sort=date"
      )
        .then((d) => d.json())
        .then((d) => d);

      // console.log(comments_);
      setComments(comments_);
      setIsLoading(false);
      console.log(comments_)
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
      //navigate("/404")
    }
    
  };


 

  

  return {fetchPostComments, comments, isLoading, hasError };
};

export default usePostComments;
