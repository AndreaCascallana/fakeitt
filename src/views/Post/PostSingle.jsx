import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import useSinglePostData from "./useSinglePostData";

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
  commentGroup,
} from "./PostSingle.module.sass";
import usePostComments from "./usePostComments";

import CommentAccordion from "../../components/CommentAccordion/CommentAccordion";
import useUserName from "../../components/Global/useUserName";
import useDate from "../../components/Global/useDate";

const PostSingle = () => {
  const { postId } = useParams();
  const { isLoading, hasError, fetchSinglePost, post } = useSinglePostData();
  const { user, fetchUserName } = useUserName();
  const { formatDate } = useDate();
  const { comments, fetchPostComments } = usePostComments();

  // petición nada más cargar
  useEffect(() => {
    fetchPostComments(postId);
    fetchSinglePost(postId);
  }, []);

  //Petición cuando cambia el campo post.userId
  useEffect(() => {
    fetchUserName(post.userId);
  }, [post]);

  // guards
  if (hasError) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading..</div>;
  }
  let commentList = comments.map((comment) => {
    return (
      <CommentAccordion
        key={comment.id}
        commentId={comment.id}
        commentParent={comment.parent}
        commentAuthor={comment.userId}
        commentDate={comment.date}
        commentText={comment.text}
      />
    );
  });

  return (
    <>
      {/* <div>PostSingle {postId}</div> */}
      <div className={postDiv}>
        <div className={postData}>
          <div className={avatar}>
            <img src="#" className="w-10" />
          </div>
          <div className={author}>
            {user.name} {user.fName}
          </div>
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
      <div className={commentGroup}>
        {/* Si el array está vacío, que salga el mensaje de wow cuanto vacío */}
        {comments.length ? commentList : <p>Wow, cuánto vacío</p>}
      </div>
    </>
  );
};

export default PostSingle;
