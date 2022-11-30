import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUserSingleData from "./useUserSingleData";
import useSinglePostData from "../../views/Post/useSinglePostData";
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
  navItem,
  profileNaviContent,
  postsContainer,
} from "./Profile.module.sass";

const UserSingle = () => {
  const { fetchUserSingle, userSingle } = useUserSingleData();
  const { id } = useParams();
  const { fetchSinglePost, post } = useSinglePostData();

  // petición nada más cargar
  useEffect(() => {
    fetchUserSingle(id);
    fetchSinglePost(id);
  }, []);


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
          <Button type="filled">Follow</Button>
        </div>
      </div>

      <div className={profileNaviContainer}>
        <div className={profileNavi}>
          <div className={navItem}>Posts</div>
          <div className={navItem}>Comments</div>
        </div>
        <div className={profileNaviContent}>
          <div className={postsContainer}>
            <PostCard
              key={post.id}
              postId={post.id}
              authorImg={post.userId}
              postAuthor={post.userId}
              postDate={post.date}
              postText={post.text}
            />
          </div>
          {/* <div className={commentsContainer}>User Single Comments by user id</div> */}
        </div>
      </div>
    </div>
  );
};

export default UserSingle;
