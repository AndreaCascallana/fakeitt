import { useState } from "react";
import { createContext } from "react";

export const CommentNewContext = createContext();

const CommentNewContextProvider = ({ children }) => {
  
  const [isParentVisible, setParentVisible] = useState(false);
  const [isChevronDownright, setChevron] = useState(true);

  const toggleParent = () => {
    let isParentVisible_ = isParentVisible;
    isParentVisible_ = !isParentVisible_;
    setParentVisible(isParentVisible_);
    
    flipChevron()
  };
  
  const flipChevron = () => {
    let isChevronDownright_ = !isChevronDownright
    setChevron(isChevronDownright_)
    
  }

  const value = { isParentVisible, toggleParent, isChevronDownright };
  return (
    <CommentNewContext.Provider value={value}>
      {children}</CommentNewContext.Provider>
  );
};

export default CommentNewContextProvider;
