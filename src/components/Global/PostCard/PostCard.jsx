import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

const PostCard = ({ postId, authorImg, postAuthor, postDate, postText }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUserName();
  }, [postAuthor]);
  const fetchUserName = async () => {
    const user = await fetch("http://localhost:5757/users/" + postAuthor)
      .then((d) => d.json())
      .then((d) => d);
    setUser(user);
  };
  const formatDate = (stringIn) => {
    const date = new Date(stringIn);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const dateAsString = `${d}/${m}/${y}`;
    return dateAsString;
  };

  return (
    <Link to={`/post/${postId}`}>
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
              {user.name} {user.fName}
            </div>
            <div className={divider}>-</div>
            <div className={date}>{formatDate(postDate)}</div>
          </div>
        </div>

        <div className={cardContent}>
          <div className={cardTitle}>
            <Link to={`/posts/${postId}`}>Static Title</Link>
          </div>
          <div className={cardText}>{postText}</div>
        </div>

        <div className={bottomContent}>
          <div className={postCtas}>
            <div className={postCtaBlock}>
              <div className={icon}>Comments</div>
              {/* ¿Cómo hallamos los numbers de cada CTA? */}
              <div className={number}>16</div>
            </div>
            <div className={postCtaBlock}>
              <div className={icon}>Likes</div>
              <div className={number}>16</div>
            </div>
            <div className={postCtaBlock}>
              <div className={icon}>Share</div>
            </div>
          </div>

          {/* <div className={singlePostNavi}>
          <Link to={`/posts/${postId}`}>Go to single post</Link>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
