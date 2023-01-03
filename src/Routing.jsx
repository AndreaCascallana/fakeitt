import React from "react";
import { Route, Routes } from "react-router-dom";
import Edition from "./views/Edition/Edition";
import CommentNew from "./views/Comment/CommentNew";
import Comments from "./views/Comment/Comments";
import CommentSingle from "./views/Comment/CommentSingle";
import Home from "./views/Home";
import Login from "./views/Login";
import Page404 from "./views/Page404";
import PostNew from "./views/Post/PostNew";
import PostSingle from "./views/Post/PostSingle";
import Register from "./views/Register";
import Search from "./views/Search";
import Users from "./views/User/Users";
import Profile from "./views/User/Profile";

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register/>}/>

      <Route path="/users">
        <Route path=":id" element={<Profile />} />
      </Route>

      <Route path="/comments">        
        <Route path=":commentId" element={<CommentSingle />} />
        <Route path=":commentId/edit?parent=" element={<Edition/>} />
      </Route>

      <Route path="/post">
        <Route path="new" element={<PostNew/>} />
        <Route path=":postId" element={<PostSingle/>} />
        <Route path=":postId/edit" element={<Edition/>} />
        <Route path=":postId/comment/new" element={<CommentNew />} />
        <Route path=":postId/comment/new?parent=" element={<CommentNew />} />
      </Route>

      <Route path="/search">
        <Route index element={<Search/>} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routing;
