import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'

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
        <div key={post.id} className="postCard m-4 bg-slate-400 w-1/2">
          <div className="cardData flex gap-1">
            <div className="avatar"><img src="#" className="w-10"/></div>
            <div className="author">{post.userId}</div>
            <div className="date">{post.date}</div>

          </div>
          <div className="cardContent">
            <div className="cardTitle">Static Title</div>
            <div className="cardText">
              {post.text}
            </div>
          </div>
          <div className="postCtas flex gap-2 justify-end">
            <div className="postCtaBlock flex gap-1">
              <div className="icon w-4">C</div>
              <div className="number">16</div>
            </div>
            <div className="postCtaBlock flex gap-1">
              <div className="icon w-4">L</div>
              <div className="number">16</div>
            </div>
            <div className="postCtaBlock flex gap-1">
              <div className="icon w-4">S</div>
              
            </div>
          
            

          </div>
          
          <div>
            <Link to={`/posts/${post.id}`}>Go to single post</Link>
          </div>
        </div>)}
      </div>
    
    </>
    
    
    
  )
}

export default Home