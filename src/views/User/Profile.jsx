import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useUserSingleData from "./useUserSingleData";
import usePostsUserIdData from "./usePostsUserIdData";
import Button from "../../components/Global/Button/Button";
import PostCard from "../../components/Global/PostCard/PostCard";
import {
  profileContainer,
  topProfileContent,
  userContent,
  avatar,
  userMainInformation,
  userName,
  userEmail,
  userSocialInformation,
  item,
  num,
  itemText,
  profileCtas,
  profileNaviContainer,
  profileNavi,
  profileNaviContent,
  postsContainer,
  commentsContainer,
} from "./Profile.module.sass";
import TabItem from "../../components/Global/Tab/TabItem";
import useTabItems from "../../components/Global/Tab/useTabItems";
import CommentAccordion from "../../components/CommentAccordion/CommentAccordion";
import useUserComments from "./useUserCommets";

const UserSingle = () => {
  const { id } = useParams();
  const { fetchUserSingle, userSingle } = useUserSingleData();
  const { fetchPostsUserId, postsUser } = usePostsUserIdData();
  const { userComments, fetchUserComments } = useUserComments();
  const [activeIndex, updateActiveIndex] = useTabItems();

  // petición nada más cargar
  useEffect(() => {
    fetchUserSingle(id);
  }, []);

  // petición cuando cambia el campo userId
  useEffect(() => {
    fetchUserComments(id);
    fetchPostsUserId(id);
  }, [id]);

  let commentList = userComments.map((comment) => {
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

  let renderPostCard = postsUser.map((post) => {
    return (
      <PostCard
        key={post.id}
        postId={post.id}
        authorImg={post.userId}
        postAuthor={post.userId}
        postDate={post.date}
        postText={post.text}
      />
    );
  });

  return (
    <div className={profileContainer}>
      <div className={topProfileContent}>
        <div className={userContent}>
          <div className={avatar}>
            <img
              src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              alt="User's Avatar"
            />
          </div>

          <div className={userMainInformation}>
            <div className={userName}>
              {userSingle.name} {userSingle.fName}
            </div>
            <div className={userEmail}>{userSingle.email}</div>
          </div>

          <div className={userSocialInformation}>
            <div className={item}>
              <div className={num}>1234</div>
              <div className={itemText}>Following</div>
            </div>

            <div className={item}>
              <div className={num}>1234</div>
              <div className={itemText}>Followers</div>
            </div>
          </div>
        </div>

        <div className={profileCtas}>
          <Button buttonType="filled">Follow</Button>
        </div>
      </div>

      <div className={profileNaviContainer}>
        <div className={profileNavi}>
          <TabItem
            updateActiveIndex={updateActiveIndex}
            index={1}
            active={activeIndex == 1}
          >
            Posts
          </TabItem>
          <TabItem
            updateActiveIndex={updateActiveIndex}
            index={2}
            active={activeIndex == 2}
          >
            Comments
          </TabItem>
        </div>
        <div className={profileNaviContent}>
          {console.log(activeIndex)}
          {console.log(postsUser)}
          {console.log(userComments)}

          <div className={postsContainer}>
            {activeIndex == 1 ? (postsUser.length ? renderPostCard : null) : null}
          </div>
          <div className={commentsContainer}>
            {activeIndex == 2 ? (userComments.length ? commentList : null) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSingle;
