import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || null));

  useEffect(() => {}, []);

  const context = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContexProvider;

export const getContextData = () => {
  const data = useContext(AuthContext);

  return data;
};
