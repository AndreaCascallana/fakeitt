import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Global/Button/Button";
import {
  newPostContainer,
  newPostNavigation,
  close,
  newPostContent,
  avatar,
  newPostFormContainer,
  formControl,
  formContent,
  formCtas,
  postTitle,
} from "./PostNew.module.sass";

const PostNew = () => {
  // FORMIK
  const [formStates, setFormStates] = useState([]);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      postTitle: "",
      text: "",
    },
    onSubmit: (values) => {
      const formStates_ = [...formStates];
      formStates_.push(values);
      setFormStates(formStates_);

      // ----------- validacion

      addNewPost(values);
      formik.resetForm();
    },
  });
  
  const addNewPost = async (values) => {
    try {
      await fetch("http://localhost:5757/posts", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, date: new Date(), userId:"cea2fd15-b127-4062-b780-6fed8c7aa249" }),
        method: "POST",
      })
        .then((d) => d.json())
        .then((d) => d);
      navigate("/");
    } catch (e) {
      setHasError(true);
    }
  };

  return (
    <div className={newPostContainer}>
      <div className={newPostNavigation}>
        <div className={close}>
          <Link to="/"><Button type="raw" icon="XMarkIcon"/></Link>
        </div>
      </div>

      <div className={newPostContent}>
        <div className={avatar}>
          <img
            src="https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            alt="User's Avatar"
          />
        </div>

        <form onSubmit={formik.handleSubmit} className={newPostFormContainer}>
          <div className={formContent}>
            <div className={formControl}>
              <input
                className={postTitle}
                type="text"
                name="postTitle"
                placeholder="Post Title"
                onChange={formik.handleChange}
                value={formik.values.postTitle}
              />
            </div>
            <div className={formControl}>
              <textarea
                name="text"
                placeholder="Post Content"
                onChange={formik.handleChange}
                value={formik.values.text}
              />
            </div>
          </div>

          <div className={formCtas}>
            <div className={formControl}>
              <button type="submit">
                Publicar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <h4>Current form</h4>
        <pre>{JSON.stringify(formik.values)}</pre>
      </div>

      <div>
        <h4>Saved form states</h4>
        {formStates.map((fState, i) => (
          <pre key={i}>{JSON.stringify(fState)}</pre>
        ))}
      </div>
    </div>
  );
};

export default PostNew;