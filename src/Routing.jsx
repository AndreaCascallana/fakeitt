import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "./views/Page404";
import About from "./views/About";
import CommentEdition from "./views/CommentEdition";
import CommentNew from "./views/CommentNew";
import Comments from "./views/Comments";
import CommentSingle from "./views/CommentSingle";
import Home from "./views/Home";
import Users from "./views/Users";
import UserSingle from "./views/UserSingle";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/users">
        <Route index element={<Users />} />
        <Route path=":userId" element={<UserSingle />} />
      </Route>

      <Route path="/comments">
        <Route index element={<Comments />} />
        <Route path="new" element={<CommentNew />} />
        <Route path=":commentId" element={<CommentSingle />} />
        <Route path=":commentId/edit" element={<CommentEdition />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routing;
