import React from "react";
import { useEffect } from "react";
import useDate from "../Global/useDate";
import useUserName from "../Global/useUserName";
import {
  commentBox,
  commentData,
  author,
  date,
  commentContent,
} from "./CommentAccordion.module.sass";
import useCommentReplies from "./useCommentReplies";

const CommentAccordion = ({
  commentId,
  commentParent,
  commentAuthor,
  commentDate,
  commentText,
}) => {
  const { user, fetchUserName, } = useUserName();
  const {formatDate} = useDate();
  const {fetchCommentReplies, replies}=useCommentReplies();

  useEffect(() => {
    fetchUserName(commentAuthor);
    // fetchCommentReplies(commentId)
}, []);
  //Solo quiero que se me rendericen los comentarios que not ienen padres, y mapear sus respuestas.
  return (
    <>
      {commentParent !== null ? (
        <div className={commentBox}>
          <div className={commentData}>
            <div className={author}>
              {user.name} {user.fName}
            </div>
            <div className={date}>
              {formatDate(commentDate)}
              
            </div>
          </div>
          <div className={commentContent}>{commentText}</div>
          <div className="repliesBox">

          </div>
          
        </div>
      ) : null}
    </>
  );
};

export default CommentAccordion;
