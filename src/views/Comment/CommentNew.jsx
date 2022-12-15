import { React, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Button from "../../components/Global/Button/Button";
import { useFormik } from "formik";
import useSinglePostData from "./../Post/useSinglePostData"
import {
  newCommentContainer,
  newCommentNavigation,
  close,
  newCommentInfo,
  avatar,
  parentPostName,
  formContent,
  formControl,
  formCtas


} from "./CommentNew.module.sass";
import { useEffect } from "react";
import useSingleCommentData from "./useSingleCommentData";
import useUserName from "./../../components/Global/useUserName";

const CommentNew = () => {
  const [formStates, setFormStates] = useState([]);

  const {fetchSinglePost, post } = useSinglePostData();
  const [hasError, setHasError] = useState(false);

  const {postId}=useParams()

  let [searchParams, setSearchParams] = useSearchParams();
  const parentComment= searchParams.get('parent')
  
  //HOOKS
  const { commentSingle, fetchCommentById } = useSingleCommentData();
  const { user, fetchUserName } = useUserName();
  

  useEffect(() => {
    fetchSinglePost(postId);
    fetchCommentById(parentComment)
    // console.log(commentSingle)
  }, []);
  useEffect(()=>{
    fetchUserName(commentSingle.userId)
    

  },[commentSingle]);
 
  // post no tiene elemento title, pero lo sacariamos de post.title
  

  //FORMIK

  const formik = useFormik({
    initialValues: {      
      text: "",
    },
    onSubmit: (values) => {
      const formStates_ = [...formStates];
      formStates_.push(values);
      setFormStates(formStates_);

      // ----------- validacion

      addNewComment(values);
      // formik.resetForm();
    },
  });

  //Petición al servidor
  const addNewComment = async (values) => {
    try {
      await fetch("http://localhost:5757/comments", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, date: new Date(), userId: "myUserId", postId: postId,
        parent: parentComment }),
        method: "POST",
      })
        .then((d) => d.json())
        .then((d) => d);
      
      // navigate("/");
    } catch (e) {
      setHasError(true);
      console.log(e);
    }
  };

  return (
    <>
      <div className={newCommentNavigation}>
        <div className={close}>
          <Link to="/">
            <Button type="raw" icon="XMarkIcon" />
          </Link>
        </div>
      </div>
      <div className={newCommentContainer}>
        <div className={newCommentInfo}>
          <div className={avatar}>
            <img
              src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              alt="User's Avatar"
            />
          </div>
          <div className={parentPostName}>En respuesta a 
          {parentComment == null ? ` Post ${postId}`: ` Comment by ${user.name} ${user.fName}`}
          
          </div>
          <div>
            <Button type="raw" icon="ChevronDownIcon" />
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className={formContent}>
          <div className={formControl}>
            
            <textarea
              type="text"
              name="text"
              placeholder="Tu comentario"
              onChange={formik.handleChange}
              value={formik.values.text}
            />
          </div>
          <div className={formCtas}>
            <div className={formControl}>
              <button type="submit">Publicar</button>
            </div>
          </div>
        </form>
        {/* Queda Añadir onclick que haga salir un mensaje de confirmacion y nos haga navegar a la página anterior */}
        
      </div>
    </>
  );
};

export default CommentNew;
