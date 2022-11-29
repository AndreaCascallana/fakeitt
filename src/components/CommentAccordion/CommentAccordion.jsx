import React from "react";
import { useEffect, useState } from "react";
import useDate from "../Global/useDate";
import useUserName from "../Global/useUserName";
import {
  commentBox,
  commentData,
  author,
  date,
  separator,
  miniButton,
  commentContent,
  repliesBox,
  replyBox,
} from "./CommentAccordion.module.sass";
import useCommentReplies from "./useCommentReplies";

const CommentAccordion = ({
  commentId,
  commentParent,
  commentAuthor,
  commentDate,
  commentText,
}) => {
  const { user, fetchUserName } = useUserName();
  const { formatDate } = useDate();
  const { fetchCommentReplies, replies } = useCommentReplies();
  const [repliesHTML, setRepliesHTML] = useState([]);

  useEffect(() => {
    fetchUserName(commentAuthor);
    fetchCommentReplies(commentId);
    // paintCommentReplies();
  }, []);


  //Solo quiero que se me rendericen los comentarios que not ienen padres, y mapear sus respuestas.
  return (
    <>
      {commentParent !== null ? (
        <div className={commentBox}>
          <div className={author}>
            {user.name} {user.fName}
          </div>
          <div className={commentData}>
            <div className={date}>{formatDate(commentDate)}</div>
            <div className={separator}>·</div>
            <div className={miniButton}>
              <div className="icon">L</div>
              <div className="counter">16</div>
            </div>

            <div className={separator}>·</div>
            <div className={miniButton}>
              <div className="icon">C</div>
              <div className="counter">{replies.length}</div>
            </div>
          </div>
          <div className={commentContent}>{commentText}</div>
          <div className={repliesBox}>
            {replies.map((reply, i) => (
              <CommentReply reply={reply} key={i} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CommentAccordion;

const CommentReply = ({ reply }) => {
  const { user, fetchUserName } = useUserName();
  const { formatDate } = useDate();
  const { fetchCommentReplies, replies } = useCommentReplies();
  const [repliesHTML, setRepliesHTML] = useState([]);

  useEffect(() => {
    fetchUserName(reply.userId);
    fetchCommentReplies(reply.id);
  }, []);

  return (
    <>
      <div className={replyBox}>
        <div className={author}>
          {user.name} {user.fName}
        </div>
        <div className={commentData}>
          <div className={date}>{formatDate(reply.date)}</div>
          <div className={separator}>·</div>
          <div className={miniButton}>
            <div className="icon">L</div>
            <div className="counter">16</div>
          </div>

          <div className={separator}>·</div>
          <div className={miniButton}>
            <div className="icon">C</div>
          </div>
        </div>
        <div className={commentContent}>{reply.text}</div>
        <div className={repliesBox}>
            {replies.map((reply_, i) => (
              <CommentReply reply={reply_} key={i} />
            ))}
          </div>
      </div>
    </>
  );
};
