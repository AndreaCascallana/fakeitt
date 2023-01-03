import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import usePostComments from "../../views/Post/usePostComments";
import Button from "../Global/Button/Button";
import { actionBar,
    ctaBlock,
    number

 } from "./CommentLikeBarPost.module.sass";

const CommentLikeBarPost = ({parentPost}) => {

  const {fetchPostComments, comments} =usePostComments()

  useEffect(() => {
    fetchPostComments(parentPost);
    
  }, []);
  
  
  return (
    <div className={actionBar}>
      <div className={ctaBlock}>
        <Link to={`/post/${parentPost}/comment/new`}>
          <Button type="raw" icon="ChatBubbleLeftEllipsisIcon" />
        </Link>

        <div className={number}>{comments.length}</div>
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
