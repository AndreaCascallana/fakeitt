import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import PostCard from "../components/Global/PostCard/PostCard";
import usePostsData from "./Post/usePostsData";
import {
  homeContainer,
  cardList,
} from "./Home.module.sass";

import {
  homeContainer,
  cardList,
} from "./Home.module.sass";

const Home = () => {
  const { posts, isLoading, hasError } = usePostsData();
  //console.log(posts)

  // guards
  if (hasError) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div>Home</div>
      <div className={homeContainer}>
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
      </div>
    </>
  );
};

export default Home;
