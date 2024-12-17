import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  if(!localStorage.getItem("employees") && !localStorage.getItem("admin")){
    setLocalStorage();
  }
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(getLocalStorage());
  }, [])
  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
