import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostSingleContext } from "../contexts/PostSingleContext";
import useSinglePostData from "../useSinglePostData";
import {
  postDiv,
  postData,
  avatar,
  author,
  date,
  cardContent,
  cardTitle,
  cardText,
  postCtas,
  postCtaBlock,
  icon,
  number,
} from "./PostSingle.module.sass";
const PostSingle = () => {
  const { postId } = useParams();
  
  
 

  const { isLoading,  hasError,fetchSinglePost, post, fetchUserName, user, formatDate} = useSinglePostData();
 
   // petición nada más cargar
   useEffect(() => {
    fetchSinglePost(postId);
    
  }, []);

  //Petición cuando cambia el campo post.userId
  useEffect(() => {
    fetchUserName(post.userId);
  }, [post.userId]);
  
    
 
  // guards
  if (hasError) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      {/* <div>PostSingle {postId}</div> */}
      <div className={postDiv}>
        <div className={postData}>
          <div className={avatar}>
            <img src="#" className="w-10" />
          </div>
          <div className={author}>{user.name} {user.fName}</div>
          <div className={date}>{formatDate(post.date)}</div>
        </div>
        <div className={cardContent}>
          <div className={cardTitle}>Static Title</div>
          <div className={cardText}>{post.text}</div>
        </div>
        <div className={postCtas}>
          <div className={postCtaBlock}>
            <div className={icon}>C</div>
            {/* ¿Cómo hallamos los numbers de cada CTA? */}
            <div className={number}>16</div>
          </div>
          <div className={postCtaBlock}>
            <div className={icon}>L</div>
            <div className={number}>16</div>
          </div>
          <div className={postCtaBlock}>
            <div className={icon}>S</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostSingle;
