import React, { useState } from "react";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";

const PostNew = () => {
  const [formStates, setFormStates] = useState([]);

  const formik = useFormik({
    initialValues: {
      postTitle: "",
      postText: "",
    },
    onSubmit: (values) => {
      const formStates_ = [...formStates];
      formStates_.push(values);
      setFormStates(formStates_);
      formik.resetForm();
    },
  });

  return (
    <div className="newPost">

      <div className="avatar">
        <img src="#" alt="User's Avatar" />
      </div>

      <div className="div">
        <Link to="/">
          Cerrar
        </Link>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            name="postTitle"
            placeholder="Post Title"
            onChange={formik.handleChange}
            value={formik.values.postTitle}
          />
        </div>
        <div className="formControl">
          <label htmlFor="postText">Post Text:</label>
          <input
            type="text"
            name="postText"
            placeholder="Post Text"
            onChange={formik.handleChange}
            value={formik.values.postText}
          />
        </div>
        

        <div className="formControl">
          <button type="submit">Publicar</button>
        </div>
      </form>

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
  )
}

export default PostNew