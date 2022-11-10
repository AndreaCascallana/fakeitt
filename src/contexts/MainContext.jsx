import { createContext, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [isFormVisible, _setFormVisible] = useState(false);

  const toggleForm = () => {
    let isFormVisible_ = isFormVisible;
    isFormVisible_ = !isFormVisible_;
    _setFormVisible(isFormVisible_);
  };
  const showForm = () => {
    _setFormVisible(true);
  }

  const value = { isFormVisible, showForm };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
