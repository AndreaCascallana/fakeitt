import React from "react";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

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
  commentGroup,
  postBar,
  editButton,
} from "./PostSingle.module.sass";
import usePostComments from "./usePostComments";

import CommentAccordion from "../../components/CommentAccordion/CommentAccordion";
import useUserName from "../../components/Global/useUserName";
import useDate from "../../components/Global/useDate";
import CommentLikeBarPost from "../../components/CommentLikeBar/CommentLikeBarPost";
import Button from "../../components/Global/Button/Button";

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
      <div className={postDiv}>
        <div className={postBar}>
          <div className={postData}>
            <div className={avatar}>
              <img
                src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                className="w-10"
              />
            </div>
            <div className={author}>
              {user.name} {user.fName}
            </div>
            <div className={date}>{formatDate(post.date)}</div>
          </div>
          <Link to={`/post/${postId}/edit`} className={editButton}>
            <Button type="raw" icon="PencilIcon" />
          </Link>
        </div>

        <div className={cardContent}>
          <div className={cardTitle}>Static Title</div>
          <div className={cardText}>{post.text}</div>
        </div>
        <CommentLikeBarPost parentPost={postId} />
      </div>
      <div className={commentGroup}>
        {/* Si el array está vacío, que salga el mensaje de wow cuanto vacío */}
        {comments.length ? commentList : <p>Wow, cuánto vacío</p>}
      </div>
    </>
  );
};

export default PostSingle;
