import { useEffect, useState, createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UserSingleContext = createContext();

const UserSingleContextProvider = ({ children }) => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    // fetchSingle();
  }, []);

  const fetchSingle = async () => {
    const request = await fetch(
      "http://localhost:5757/users/" + userId + "?_embed=comments"
    );
    if (request.status == 404) {
      navigate("/users");
    }
    const user_ = await request.json().then((d) => d);
    setUser(user_);
  };

  const value = { user, userId };

  return (
    <UserSingleContext.Provider value={value}>
      {children}
    </UserSingleContext.Provider>
  );
};

export default UserSingleContextProvider;
