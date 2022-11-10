import React, { useState } from "react";
import { useFormik } from 'formik';

const Form = () => {
  const [formStates, setFormStates] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      fName: "",
      dob: "",
      sex: "male",
      password: "",
    },
    onSubmit: (values) => {
      const formStates_ = [...formStates];
      formStates_.push(values);
      setFormStates(formStates_);
      formik.resetForm();
    },
  });

  return (
    <div className="bg-slate-100 p-2 m-2 rounded-md">
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="formControl">
          <label htmlFor="fName">Family Name:</label>
          <input
            type="text"
            name="fName"
            placeholder="Family Name"
            onChange={formik.handleChange}
            value={formik.values.fName}
          />
        </div>
        <div className="formControl">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className="formControl">
          <label htmlFor="sex">Sex:</label>
          <select
            name="sex"
            onChange={formik.handleChange}
            value={formik.values.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="formControl">
          <button type="submit">Envía</button>
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

export default Form;
