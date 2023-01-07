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
  postsContainer,
} from "./Search.module.sass";
import useTabItems from "../components/Global/Tab/useTabItems";
import TabItem from "../components/Global/Tab/TabItem";
import usePostsData from "./Post/usePostsData";
import PostCard from "../components/Global/PostCard/PostCard";
import { useUsersData } from "./User/useUsersData";
import UserCard from "../components/Global/UserCard/UserCard";
import useUserSingleData from "./User/useUserSingleData";

const Search = () => {
  const { fetchPosts, posts, setPosts, isLoading, hasError, deleteSinglePost } =
    usePostsData();
  const { users, fetchUsers } = useUsersData();
  const { fetchUserSingle, userSingle } = useUserSingleData();

  const [formStates, setFormStates] = useState([]);

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
    fetchPosts();
    fetchUsers();
    fetchUserSingle();
  }, []);

  //
  let renderPostCard = posts.map((post) => {
    if (post.text.includes(formik.values.search)) {
      return (
        <PostCard
          key={post.id}
          postId={post.id}
          authorImg={post.userId}
          postAuthor={post.userId}
          postDate={post.date}
          postText={post.text}
        />
      );
    }
  });

  let renderUserCard = users.map((user) => {
    if (user.name.includes(formik.values.search)) {
      return <UserCard key={user.id} id={user.id} name={user.name} fName={user.fName} />;
    }
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
            {activeIndex == 1 ? renderUserCard : null}
          </div>
          <div className={postsContainer}>
            {activeIndex == 2 ? renderPostCard : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
