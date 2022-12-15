import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "../components/Global/Button/Button";
import {
  searchFormContainer,
  formControl,
} from "./Search.module.sass";

const Search = () => {
  const [formStates, setFormStates] = useState([]);

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      const formStates_ = [...formStates];
      formStates_.push(values);
      setFormStates(formStates_);
      formik.resetForm();
    },
  });

  return (
    <div>
      <form className={searchFormContainer} onSubmit={formik.handleSubmit}>
        <div className={formControl}>
          <input
            type="text"
            name="search"
            placeholder="Introduce aquí tu búsqueda"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>


        <div className={formControl}>
          <Button type="submit" buttonType="raw" icon="MagnifyingGlassIcon" />
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
  );
};

export default Search;
