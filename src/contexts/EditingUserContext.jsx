import { useState } from "react";
import { createContext } from "react";

export const EditingUserContext = createContext();

const EditingUserContextProvider = ({ children }) => {
  const [editingUser, _setEditingUser] = useState({});

  const loadDataIntoForm = (user) => {
    _setEditingUser(user);
  };
  const unloadDataIntoForm = () => {
    _setEditingUser({});
  };

  const value = { editingUser, loadDataIntoForm, unloadDataIntoForm };
  return (
    <EditingUserContext.Provider value={value}>
      {children}
    </EditingUserContext.Provider>
  );
};

export default EditingUserContextProvider;
