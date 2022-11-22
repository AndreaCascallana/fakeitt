import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SuperContext from "./contexts/SuperContext";
import "./assets/style.sass";
import { BrowserRouter } from "react-router-dom";
import PostSingleContextProvider from "./contexts/PostSingleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SuperContext>
        <PostSingleContextProvider>
          <App />
        </PostSingleContextProvider>
      </SuperContext>
    </BrowserRouter>
  </React.StrictMode>
);
