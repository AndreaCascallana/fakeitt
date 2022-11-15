import React, { useEffect, useState } from "react";


const usePostsData = () => {

    //
  const [posts,setPosts]=useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  //const navigate = useNavigate();

  // petición
  useEffect(() => {
    fetchPosts()
  }, [])
  //console.log(posts)

  //fetch, loading and error controller
  const fetchPosts = async () => {
    try {
      const request = await fetch("http://localhost:5757/posts?_order=asc&_sort=date")
      //console.log(request);
      const posts_ = await fetch("http://localhost:5757/posts?_order=asc&_sort=date")
        .then(d => d.json())
        .then(d => d)
      setPosts(posts_)
      //console.log(posts_)
    } catch (e) {
      setHasError(true)
      setIsLoading(false)
      //navigate("/404")
    }
  }
  return {posts, isLoading, hasError}
}

export default usePostsData