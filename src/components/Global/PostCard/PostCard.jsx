import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  postCard,
  cardData,
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
    const date = new Date(stringIn)
    const y = date.getFullYear()
    const m = date.getMonth()+1
    const d = date.getDate()
    const dateAsString = `${d}/${m}/${y}`
    return dateAsString
  }

  return (
    <div className={postCard}>
      <div className={cardData}>
        <div className={avatar}>
          <img src="#" className="w-10" />
        </div>
        <div className={author}>{user.name}</div>
        <div className={date}>{formatDate(postDate)}</div>
      </div>
      <div className={cardContent}>
        <div className={cardTitle}>Static Title</div>
        <div className={cardText}>{postText}</div>
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

      <div>
        <Link to={`/posts/${postId}`}>Go to single post</Link>
      </div>
    </div>
  );
};

export default PostCard;
