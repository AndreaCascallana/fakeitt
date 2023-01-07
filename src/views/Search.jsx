import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Button from "../components/Global/Button/Button";
import {
  searchFormContainer,
  formControl,
  searchNaviContainer,
  searchNavi,
  searchNaviContent,
  usersContainer,
  postsContainer
} from "./Search.module.sass";
import { useParams, useSearchParams } from "react-router-dom";
import useUserSingleByNameData from "./User/useUserSingleByNameData";
import useUserName from "../components/Global/useUserName";
import useTabItems from "../components/Global/Tab/useTabItems";
import TabItem from "../components/Global/Tab/TabItem";

const Search = () => {
  const { name } = useParams();
  const { userSingleByName, fetchUserSingleByName } = useUserSingleByNameData();

  const [formStates, setFormStates] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const userName = searchParams.get("name");
  const { user, fetchUserName } = useUserName();

  const [activeIndex, updateActiveIndex] = useTabItems();

  // FORMIK
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

  //
  useEffect(() => {
    fetchUserSingleByName(userName);
  }, []);
  useEffect(() => {
    fetchUserName(user.name);
  }, [userName]);

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
          <Button type="submit" buttonType="raw" icon="MagnifyingGlassIcon" />
        </div>
      </form>

      <div className={searchNaviContainer}>
        <div className={searchNavi}>
          <TabItem
            updateActiveIndex={updateActiveIndex}
            index={1}
            active={activeIndex == 1}
          >
            Users
          </TabItem>
          <TabItem
            updateActiveIndex={updateActiveIndex}
            index={2}
            active={activeIndex == 2}
          >
            Posts
          </TabItem>
        </div>
        <div className={searchNaviContent}>
          <div className={usersContainer}>
            {console.log(userName)}

            {activeIndex == 1 ? (formik.values.name == userName ? `Nombre de usuario: ${userName}` : null) : null}
          </div>
          <div className={postsContainer}>
            {activeIndex == 2 ? `vacio` : null}
            {/* {activeIndex == 2 ? (userComments.length ? commentList : null) : null} */}
          </div>
        </div>
      </div>

      {/* <div>
        <h4>Current form</h4>
        <pre>{JSON.stringify(formik.values)}</pre>
      </div>

      <div>
        <h4>Saved form states</h4>
        {formStates.map((fState, i) => (
          <pre key={i}>{JSON.stringify(fState)}</pre>
        ))}
      </div> */}
    </div>
  );
};

export default Search;
