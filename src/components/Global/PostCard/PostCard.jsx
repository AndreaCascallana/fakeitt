import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import useUserSingleData from "../../../views/User/useUserSingleData";
import useDate from "../useDate";
import useUserName from "../useUserName";
import Profile from "../../../views/User/Profile";
import Button from "../Button/Button";
import {
  postCard,
  cardData,
  mainData,
  avatarContainer,
  avatar,
  dataContainer,
  author,
  divider,
  date,
  ctas,
  cardContent,
  cardTitle,
  cardText,
  bottomContent,
} from "./PostCard.module.sass";
import CommentLikeBarPost from "../../CommentLikeBar/CommentLikeBarPost";
import usePostsData from "../../../views/Post/usePostsData";
import { ModalContext } from "../../../contexts/ModalContext";
import Modal from "../../Modal/Modal";

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
  const { posts, deleteSinglePost } = usePostsData();
  const { isModalVisible, showModal, toggleModal } = useContext(ModalContext);

  useEffect(() => {
    fetchUserName(postAuthor);
  }, []);

  if(isModalVisible == true) {
    return (
      <Modal></Modal>
    )
  }

  return (
    <>
      <div className={postCard}>
        <div className={cardData}>
          <div className={mainData}>
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
          <div className={ctas}>
            <Button buttonType="raw" icon="TrashIcon" clickHandler={() => toggleModal()} />
          </div>
        </div>

        <div className={cardContent}>
          <div className={cardTitle}>
            <Link to={`/post/${postId}`}>Static Title</Link>
          </div>
          <div className={cardText}>
            <Link to={`/post/${postId}`}>{postText}</Link>
          </div>
        </div>

        <div className={bottomContent}>
          <CommentLikeBarPost parentPost={postId} />
        </div>
      </div>
    </>
  );
};

export default PostCard;
