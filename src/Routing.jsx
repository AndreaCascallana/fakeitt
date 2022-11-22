import React from "react";
import { Route, Routes } from "react-router-dom";
import CommentEdition from "./views/Comment/CommentEdition";
import CommentNew from "./views/Comment/CommentNew";
import Comments from "./views/Comment/Comments";
import CommentSingle from "./views/Comment/CommentSingle";
import Home from "./views/Home";
import Login from "./views/Login";
import Page404 from "./views/Page404";
import PostEdition from "./views/Post/PostEdition";
import PostNew from "./views/Post/PostNew";
import Posts from "./views/Post/Posts";
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
      <Route path="/profile">
        {/* View de Users no va a existir. ¿Qué hacemos con el index element?  */}
        {/* <Route index element={<Users />} /> */}
        <Route path=":userId" element={<Profile />} />
      </Route>
      <Route path="/comments">
        {/* View de Comments no va a existir. ¿Qué hacemos con el index element?  */}
        {/* <Route index element={<Comments />} /> */}
        <Route path="new" element={<CommentNew />} />
        <Route path=":commentId" element={<CommentSingle />} />
        <Route path=":commentId/edit" element={<CommentEdition />} />
      </Route>
      <Route path="/post">
        {/* View de Posts no va a existir, va a ser la Home. ¿Qué hacemos con el index element? */}
        {/* <Route index element={<Posts/>} /> */}
        <Route path="new" element={<PostNew/>} />
        <Route path=":postId" element={<PostSingle/>} />
        <Route path=":postId/edit" element={<PostEdition/>} />
      </Route>
      <Route path="/search">
        <Route index element={<Search/>} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routing;
