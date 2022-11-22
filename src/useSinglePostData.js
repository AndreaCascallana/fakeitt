import React, { useEffect, useState } from "react";

const usePostsData = () => {
  //
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  //const navigate = useNavigate();

  // // petición
  // useEffect(() => {
  //   fetchSinglePost();
  // }, []);
  //console.log(posts)

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
      console.log(post_)
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
      //navigate("/404")
    }
    // return post
  };


  const [user, setUser] = useState({});
  
  const fetchUserName = async (userId) => {
    const user = await fetch("http://localhost:5757/users/" + userId
    )
      .then((d) => d.json())
      .then((d) => d);
    setUser(user);

  };

  const formatDate = (stringIn) => {
    const date = new Date(stringIn)
    const y = date.getFullYear()
    const m = date.getMonth()+1
    const d = date.getDate()
    const dateAsString = `${d}/${m}/${y}`
    return dateAsString
  }

  return {fetchSinglePost, post, user, fetchUserName, formatDate, isLoading, hasError };
};

export default usePostsData;
