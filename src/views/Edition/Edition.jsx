import { React, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../components/Global/Button/Button";
import { Formik } from "formik";
import useSinglePostData from "./../Post/useSinglePostData";
import {
  newCommentContainer,
  newCommentNavigation,
  close,
  newCommentInfo,
  avatar,
  parentPostName,
  formContent,
  formControl,
  formCtas,
} from "./Edition.module.sass";
import { useEffect } from "react";
import useSingleCommentData from "./../Comment/useSingleCommentData";
import useUserName from "./../../components/Global/useUserName";

const Edition = () => {
  const [originText, setOriginText] = useState("texto a editar");

  const { postId } = useParams();

  let [searchParams, setSearchParams] = useSearchParams();
  const parentComment = searchParams.get("parent");

  //HOOKS
  const { commentSingle, fetchCommentById } = useSingleCommentData();
  const { user, fetchUserName } = useUserName();
  const { fetchSinglePost, post, isLoading, hasError } = useSinglePostData();
  const navigate = useNavigate();

  //USE EFFECTS VIEW
  useEffect(() => {
    fetchSinglePost(postId);
    fetchCommentById(parentComment);
  }, []);

  useEffect(() => {
    fetchUserName(commentSingle.userId);
    fetchOriginalText();
  }, [commentSingle]);

  // post no tiene elemento title, pero lo sacariamos de post.title

  const fetchOriginalText = () => {
    if (parentComment == null) {
      let originText_ = `${post.text}`;
      setOriginText(originText_);
    } else {
      let originText_ = `${commentSingle.text}`;
      setOriginText(originText_);
    }
  };

  //navigating back
  let pageBack = () => {
    navigate(-1);
  };

  // guards
  if (hasError) {
    return <div>Error!</div>;
  }
  if (isLoading) {
    return <div>Loading..</div>;
  } else {
    return (
      <>
        <div className={newCommentNavigation}>
          <div className={close}>
            <Button type="raw" icon="XMarkIcon" clickHandler={pageBack} />
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
              Editando
              {/* SI HAY PARENT COMMENT, QUEREMOS QUE SE RENDERICE "COMENTARIO POR USER X".
          SI LO QUE EDITAMOS ES UN POST, QUEREMOS QUE SE RENDERICE "POST ID" */}
              {parentComment == null
                ? ` Post ${postId}`
                : ` Comment by ${user.name} ${user.fName}`}
            </div>
          </div>
          {/* SI HAY PARENT COMMENT, QUEREMOS QUE SE RENDERICE EL FORMULARIO DE EDITAR ESE COMENTARIO.
          SI LO QUE EDITAMOS ES UN POST, QUEREMOS QUE SE RENDERICE EL FORMULARIO DE EDITAR POST */}
          {parentComment == null ? (
            <FormikPost textToEdit={post.text} />
          ) : (
            <FormikComment textToEdit={commentSingle.text} />
          )}
        </div>
      </>
    );
  }
};

export default Edition;

const FormikPost = ({ textToEdit }) => {
  const { postId } = useParams();

  const { fetchSinglePost, post, isLoading } = useSinglePostData();
  let originText = "texto a editar";
  let postUser = "userId";
  const [formStates, setFormStates] = useState([]);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchSinglePost(postId);
    originText = textToEdit;
    // postUser=post.userId
  }, []);

  useEffect(() => {
    postUser = post.userId;
  }, [post]);

  const editPost = async (values, postId, postUser) => {
    try {
      await fetch(`http://localhost:5757/posts/${postId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: postId,
          date: new Date(),
          ...values,

          userId: postUser,
        }),
        method: "PUT",
      })
        .then((d) => d.json())
        .then((d) => d);
    } catch (e) {
      setHasError(true);
      console.log(e);
    }
  };

  if (post == null) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <Formik
          initialValues={{ text: textToEdit }}
          onSubmit={(values, actions) => {
            const formStates_ = [...formStates];
            formStates_.push(values);
            setFormStates(formStates_);

            editPost(values, postId, postUser);

            setTimeout(() => {
              alert("Tu post se ha editado correctamente");
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={formContent}>
              <div className={formControl}>
                <textarea
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  placeholder="Has borrado todo"
                  value={props.values.text}
                  name="text"
                />
              </div>
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}

              <div className={formCtas}>
                <div className={formControl}>
                  <button type="submit">Publicar Post</button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </>
    );
  }
};

const FormikComment = ({ textToEdit }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const parentComment = searchParams.get("parent");

  //HOOKS
  const { commentSingle, fetchCommentById } = useSingleCommentData();

  let originText = "texto a editar";
  let commenter = "userId";

  const [formStates, setFormStates] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchCommentById(parentComment);
    originText = textToEdit;
  }, []);

  useEffect(() => {
    commenter = commentSingle.userId;
  }, [commentSingle]);

  //PETICIÓN ASÍNCRONA PARA EDITAR COMENTARIO
  const editComment = async (values, parentComment, commenter) => {
    try {
      await fetch(`http://localhost:5757/comments/${parentComment}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: parentComment,
          date: new Date(),
          postId: commentSingle.postId,
          parent: commentSingle.parent,
          ...values,
          userId: commenter,
        }),
        method: "PUT",
      })
        .then((d) => d.json())
        .then((d) => d);
    } catch (e) {
      setHasError(true);
      console.log(e);
    }
  };

  //GUARD: LOADING STATE
  if (parentComment == null) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <Formik
          initialValues={{ text: textToEdit }}
          onSubmit={(values, actions) => {
            const formStates_ = [...formStates];
            formStates_.push(values);
            setFormStates(formStates_);

            editComment(values, parentComment, commenter);

            setTimeout(() => {
              alert("Tu comentario se ha editado correctamente");
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={formContent}>
              <div className={formControl}>
                <textarea
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  placeholder="Has borrado todo"
                  value={props.values.text}
                  name="text"
                />
              </div>
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}

              <div className={formCtas}>
                <div className={formControl}>
                  <button type="submit">Publicar Comentario</button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </>
    );
  }
};
