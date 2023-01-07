import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderHome from "../components/Global/Headers/HeaderHome";
import PostCard from "../components/Global/PostCard/PostCard";
import usePostsData from "./Post/usePostsData";
import {  cardList } from "./Home.module.sass";
import BottomNav from "../components/Global/BottomNav/BottomNav";

const Home = () => {
  const { fetchPosts, posts, setPosts, isLoading, hasError, deleteSinglePost } = usePostsData();

  // petición
  useEffect(() => {
  }, [posts]);

  // guards
  if (hasError) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div className={cardList}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            postId={post.id}
            authorImg={post.userId}
            postAuthor={post.userId}
            postDate={post.date}
            postText={post.text}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
