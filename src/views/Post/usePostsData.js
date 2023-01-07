import React, { useEffect, useState } from "react";

const usePostsData = () => {
  //
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // petición
  useEffect(() => {
    fetchPosts();
  }, []);

  //fetch, loading and error controller
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const posts_ = await fetch(
        "http://localhost:5757/posts?_order=desc&_sort=date"
      )
        .then((d) => d.json())
        .then((d) => d);

      setPosts(posts_);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
      //navigate("/404")
    }
  };

  const deleteSinglePost = async (id) => {
    try {
      console.log(id);
      setIsLoading(true);
      await fetch("http://localhost:5757/posts/" + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((d) => d.json())
        .then((d) => d);

      console.log("post borrado");
      await fetchPosts()
      setPosts();
      setIsLoading(false);
    } catch (e) {
      setHasError(true)
    }
  };


  return { fetchPosts, posts, isLoading, hasError, deleteSinglePost };
};

export default usePostsData;
