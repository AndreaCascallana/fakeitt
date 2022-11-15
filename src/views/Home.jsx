import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import PostCard from '../components/Global/PostCard/PostCard'

const Home = () => {
  //
  const [posts,setPosts]=useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const navigate = useNavigate();

  // petición
  useEffect(() => {
    fetchAllPosts()
  }, [])
  //console.log(posts)

  //fetch, loading and error controller
  const fetchAllPosts = async () => {
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

  // guards
  if (hasError) {
    return <div>Error!</div>
  } 
  if (isLoading) {
    return <div>Loading..</div>
  }
  

  return (
    <>
      <div>Home</div>
      <div className='cardList'>
        {posts.map(post => 
        <>
          <PostCard
            key={post.id}
            postId={post.id}
            authorImg={post.userId.userImg}
            postAuthor={post.userId}
            postDate={post.date}
            postText={post.text}

          /> 
          
            </>)}
      </div>
    
    </>
    
    
    
  )
}

export default Home