import { createContext } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const value = {};
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
