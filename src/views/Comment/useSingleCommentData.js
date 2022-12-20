import React, { useState } from "react";

const useSingleCommentData = () => {
  //
  const [commentSingle, setCommentSingle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);


  //fetch, loading and error controller
  const fetchCommentById = async (id) => {
    try {
      setIsLoading(true);
      const commentSingle_ = await fetch("http://localhost:5757/comments/" + id)
        .then((d) => d.json())
        .then((d) => d);

      setCommentSingle(commentSingle_);
      setIsLoading(false);
      // console.log(commentSingle_);
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
      //navigate("/404")
    }
  };

  return { fetchCommentById, commentSingle, isLoading, hasError };
};

export default useSingleCommentData;
