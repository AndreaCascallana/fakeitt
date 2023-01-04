import { React, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Button from "../../components/Global/Button/Button";
import { useFormik } from "formik";
import useSinglePostData from "./../Post/useSinglePostData";
import {
  newCommentContainer,
  newCommentNavigation,
  close,
  newCommentInfo,
  avatar,
  parentPostName,
  chevronContainer,
  up,
  down,
  formContent,
  formControl,
  formCtas,
  parentContentContainer,
  invisible,
  visible,
  drag,
  publiOrig,
  textOrig,
} from "./CommentNew.module.sass";
import { useEffect } from "react";
import useSingleCommentData from "./useSingleCommentData";
import useUserName from "./../../components/Global/useUserName";
import { useContext } from "react";
import { CommentNewContext } from "../../contexts/CommentNewContext";
import classNames from "classnames";

const CommentNew = () => {
  const [formStates, setFormStates] = useState([]);

  const { fetchSinglePost, post } = useSinglePostData();
  const [hasError, setHasError] = useState(false);

  const { postId } = useParams();

  let [searchParams, setSearchParams] = useSearchParams();
  const parentComment = searchParams.get("parent");
  //console.log(parentComment);

  //HOOKS
  const { commentSingle, fetchCommentById } = useSingleCommentData();
  const { user, fetchUserName } = useUserName();

  useEffect(() => {
    fetchSinglePost(postId);
    fetchCommentById(parentComment);
    // console.log(commentSingle)
  }, []);
  useEffect(() => {
    fetchUserName(commentSingle.userId);
  }, [commentSingle]);

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

      

      addNewComment(values);
      formik.resetForm();
      // ----------- validacion
      //paintConfirmation()
    },
  });

  //Petición al servidor
  const addNewComment = async (values) => {
    try {
      await fetch("http://localhost:5757/comments", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          date: new Date(),
          userId: "myUserId",
          postId: postId,
          parent: parentComment,
        }),
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

  //Toggle Parent
  const {isParentVisible, toggleParent} = useContext(CommentNewContext)
  const parentContainerClasses= classNames(parentContentContainer, {
    [`${visible}`]: isParentVisible==true,
    [`${invisible}`]: isParentVisible==false
  });

  //Flip Chevron
  const {isChevronDownright} = useContext(CommentNewContext)
  const chevronClasses= classNames(chevronContainer, {
    [`${up}`]: isChevronDownright==true,
    [`${down}`]: isChevronDownright==false
  });


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
          <div className={parentPostName}>
            En respuesta a
            {parentComment == null
              ? ` Post ${postId}`
              : ` Comment by ${user.name} ${user.fName}`}
          </div>
          <div  
          className={chevronClasses}>
            <Button 
            clickHandler={toggleParent}
            type="raw" icon="ChevronDownIcon" />
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
      <div className={parentContainerClasses}>
        <div className={drag} onClick={toggleParent}></div>
        <h3 className={publiOrig}>
          {parentComment == null ? `Publicación ` : `Commentario `}
          original
        </h3>
        <div className={textOrig}>
          {parentComment == null ? `${post.text}` : `${commentSingle.text}`}
        </div>
      </div>
    </>
  );
};

export default CommentNew;
