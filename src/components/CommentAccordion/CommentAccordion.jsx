import React from "react";
import { useEffect,useState } from "react";
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

  // Por qué se me pinta el mismo reply para todos los comentarios?? 
  // Tiene pinta que es porque paintreplies se lanza cada vez que cambia el array replies
  // Pero si lo pinto en el primer UseEffect Directamente no se pintan.

  let paintCommentReplies =()=>{
    let repliesHTML_ = replies.map((reply,i) => {
      //const {user} = useUserName();
      // console.log(reply)
      fetchUserName(reply.userId);
      const replyUser = user;
      //este User no coincide con el de UserId del reply


      const replyDate = formatDate(reply.date);
      const replyText = reply.text;
      console.log(replyUser, reply);
      return (
        // <Reply key={reply.id}></Reply>
        <div className={replyBox} key={i}>
          <div className={author}>
            {replyUser.name} {replyUser.fName}
          </div>
          <div className={commentData}>
            <div className={date}>              
              {replyDate}
            </div>
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
          <div className={commentContent}>
            {replyText}
          </div>
        </div>
      );
    });
    setRepliesHTML(repliesHTML_);
    return repliesHTML
  }

  useEffect(()=>{
    paintCommentReplies();
    
  },[replies])

  

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
          {replies.length ? (
            <div className={repliesBox}>{repliesHTML}</div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default CommentAccordion;
