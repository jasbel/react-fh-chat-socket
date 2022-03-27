/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

import React from "react";
import { fetchNoToken } from "../../helpers/fetch";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchNoToken("login", { email, password }, "POST");

    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const {user} = resp

      console.log({user})

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
    }

    return resp.ok
  };

  const register = (nombre, email, password) => {};

  const vericationToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        vericationToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
