import { useEffect, useState, createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PostSingleContext = createContext();

export const PostSingleContextProvider = ({ children }) => {
  
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    // fetchSingle();
  }, []);

  const fetchSinglePost = async (id) => {
    const request = await fetch(
      "http://localhost:5757/posts/" + id
    );
    if (request.status == 404) {
      console.log("este post no existe")
    }
    const post_ = await request.json().then((d) => d);
    setPost(post_);
    console.log(post_)
  };

  const value = {fetchSinglePost, post};

  return (
    <PostSingleContext.Provider value={value}>
      {children}
    </PostSingleContext.Provider>
  );
};

export default PostSingleContextProvider;
