import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userLogin, setUserLogin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setUserLogin(token);
    } else {
      setUserLogin(null);
    }
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ userLogin, setUserLogin, loading }}>
      {children}
    </UserContext.Provider>
  );
}
