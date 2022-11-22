import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostSingleContext } from "../contexts/PostSingleContext";

const PostSingle = () => {
  const { postId } = useParams();
  //const { fetchSinglePost } = useContext(PostSingleContext);
  
  //fetchSinglePost(postId);

  return (
    <>
      <div>PostSingle {postId}</div>
      <div className={postData}>
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
    </>
  );
};

export default PostSingle;
