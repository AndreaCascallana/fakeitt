import React from "react";
import { Link } from "react-router-dom";
import Button from "../Global/Button/Button";
import { actionBar,
    ctaBlock,
    number

 } from "./CommentLikeBarPost.module.sass";

const CommentLikeBarPost = () => {
  return (
    <div className={actionBar}>
      <div className={ctaBlock}>
        <Link to={`/comments/new`}>
          <Button type="raw" icon="ChatBubbleLeftEllipsisIcon" />
        </Link>

        <div className={number}>16</div>
      </div>
      <div className={ctaBlock}>
        {/* Aquí vamos a tener que hacer cambio de estado según si he dado like o no, y sustituir icono */}
        <Button type="raw" icon="HeartIcon"></Button>
        <div className={number}>16</div>
      </div>
      <div className={ctaBlock}>
        <Button type="raw" icon="ShareIcon"></Button>
      </div>
    </div>
  );
};

export default CommentLikeBarPost;
