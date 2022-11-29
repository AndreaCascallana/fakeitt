import React, { useState } from 'react'

const useCommentReplies = () => {
    const [replies,setReplies]=useState([]);
    const fetchCommentReplies=async(id)=>{
        try{
            const replies_=await fetch( "http://localhost:5757/comments?parent="+id+"&_order=desc&_sort=date")
            .then((d) => d.json())
            .then((d) => d);
            // .then(response => response.text())
            setReplies(replies_);
            // console.log(replies_)
        }catch(e){
            console.log(e);
            // console.log('replies failed');
        }
    };
    
    

  return {replies, fetchCommentReplies}
}

export default useCommentReplies