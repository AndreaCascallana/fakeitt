import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
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
    number

}from "./PostCard.module.sass"

const PostCard = (props) => {
    console.log(props);
    const {postId, postAuthor, postDate, postText} = props;

  return (
    <div className={postCard}>
        <div className={cardData}>
        <div className={avatar}><img src="#" className="w-10"/></div>
        <div className={author}>{postAuthor}</div>
        <div className={date}>{postDate}</div>

        </div>
        <div className={cardContent}>
        <div className={cardTitle}>Static Title</div>
        <div className={cardText}>
            {postText}
        </div>
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
  )
}

export default PostCard