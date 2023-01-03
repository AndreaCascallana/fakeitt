import React from "react";
import CommentNewContextProvider from "./CommentNewContext";
import EditingUserContextProvider from "./EditingUserContext";
import MainContextProvider from "./MainContext";
import SearchContextProvider from "./SearchContext";
import UsersContextProvider from "./UsersContext";
import UserSingleContext from "./UserSingleContext";

const SuperContext = ({ children }) => {
  return (
    <MainContextProvider>
      <SearchContextProvider>
        <UsersContextProvider>
          <UserSingleContext>
            <EditingUserContextProvider>
              <CommentNewContextProvider>
              {children}
              </CommentNewContextProvider>
            </EditingUserContextProvider>
          </UserSingleContext>
        </UsersContextProvider>
      </SearchContextProvider>
    </MainContextProvider>
  );
};

export default SuperContext;
