import React from "react";
import { Route, Routes } from "react-router-dom";
import CommentEdition from "./views/CommentEdition";
import CommentNew from "./views/CommentNew";
import Comments from "./views/Comments";
import CommentSingle from "./views/CommentSingle";
import Home from "./views/Home";
import Login from "./views/Login";
import Page404 from "./views/Page404";
import PostEdition from "./views/PostEdition";
import PostNew from "./views/PostNew";
import Posts from "./views/Posts";
import PostSingle from "./views/PostSingle";
import Register from "./views/Register";
import Search from "./views/Search";
import Users from "./views/Users";
import UserSingle from "./views/UserSingle";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/users">
        {/* View de Users no va a existir. ¿Qué hacemos con el index element?  */}
        <Route index element={<Users />} />
        <Route path=":userId" element={<UserSingle />} />
      </Route>
      <Route path="/comments">
        {/* View de Comments no va a existir. ¿Qué hacemos con el index element?  */}
        <Route index element={<Comments />} />
        <Route path="new" element={<CommentNew />} />
        <Route path=":commentId" element={<CommentSingle />} />
        <Route path=":commentId/edit" element={<CommentEdition />} />
      </Route>
      <Route path="/posts">
        {/* View de Posts no va a existir, va a ser la Home. ¿Qué hacemos con el index element? */}
        <Route index element={<Posts/>} />
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
