import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useUserSingleData from "../../../views/User/useUserSingleData";
import useDate from "../useDate";
import useUserName from "../useUserName";
import Profile from "../../../views/User/Profile";
import Button from "../Button/Button";
import {
  postCard,
  cardData,
  avatarContainer,
  avatar,
  dataContainer,
  author,
  divider,
  date,
  cardContent,
  cardTitle,
  cardText,
  postCtas,
  postCtaBlock,
  icon,
  number,
  bottomContent,
} from "./PostCard.module.sass";
import CommentLikeBarPost from "../../CommentLikeBar/CommentLikeBarPost";

const PostCard = ({
  postId,
  authorImg,
  postAuthor,
  postDate,
  postText,
  userId,
}) => {
  const { user, fetchUserName } = useUserName();
  const { formatDate } = useDate();
  const { userSingle } = useUserSingleData();

  useEffect(() => {
    fetchUserName(postAuthor);
  }, []);

  return (
    <>
      <div className={postCard}>
        <div className={cardData}>
          <div className={avatarContainer}>
            <div className={avatar}>
              <img
                src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                alt="User's Avatar"
              />
            </div>
          </div>

          <div className={dataContainer}>
            <div className={author}>
              <Link to={`/users/${postAuthor}`}>
                {user.name} {user.fName}
              </Link>
            </div>
            <div className={divider}>-</div>
            <div className={date}>{formatDate(postDate)}</div>
          </div>
        </div>

        <div className={cardContent}>
          <div className={cardTitle}>
            <Link to={`/post/${postId}`}>Static Title</Link>
          </div>
          <div className={cardText}><Link to={`/post/${postId}`}>{postText}</Link></div>
        </div>

        <div className={bottomContent}>
          <CommentLikeBarPost
            parentPostId = {postId}
          />

         
        </div>
      </div>
    </>
  );
};

export default PostCard;
