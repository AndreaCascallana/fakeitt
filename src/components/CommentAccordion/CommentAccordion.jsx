import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Global/Button/Button";
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

  const { postId } = useParams();

  useEffect(() => {
    fetchUserName(commentAuthor);
    fetchCommentReplies(commentId);
    // paintCommentReplies();
  }, []);

  //Solo quiero que se me rendericen los comentarios que not ienen padres, y mapear sus respuestas.
  // HAY CONFLICTO entre el contador de respuestas al posts y los comentarios mapeados.
  //Al quitar el condicional, sí salen estos comentarios. Debe ser que en el servidor están isncritos como que tienen padre, pero no está el padre.
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
              {/* Aquí vamos a tener que hacer cambio de estado según si he dado like o no, y sustituir icono */}
              <Button type="raw" icon="HeartIcon"></Button>
              <div className="counter">16</div>
            </div>

            <div className={separator}>·</div>
            <div className={miniButton}>
              <Link to={`/post/${postId}/comment/new?parent=${commentId}`}>
                <Button type="raw" icon="ChatBubbleLeftEllipsisIcon" />
              </Link>
              <div className="counter">{replies.length}</div>
            </div>
            <div className={miniButton}>
              <Link to={`/post/${postId}/edit?parent=${commentId}`}>
                <Button type="raw" icon="PencilIcon" />
              </Link>
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

  const { postId } = useParams();

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
            {/* Aquí vamos a tener que hacer cambio de estado según si he dado like o no, y sustituir icono */}
            <Button type="raw" icon="HeartIcon"></Button>
            <div className="counter">16</div>
          </div>

          <div className={separator}>·</div>
          <div className={miniButton}>
            <Link to={`/post/${postId}/comment/new?parent=${reply.id}`}>
              <Button type="raw" icon="ChatBubbleLeftEllipsisIcon" />
            </Link>
          </div>
          <div className={miniButton}>
            <Link to={`/post/${postId}/edit?parent=${reply.id}`}>
              <Button type="raw" icon="PencilIcon" />
            </Link>
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
