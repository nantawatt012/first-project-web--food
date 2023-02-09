import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import * as authApi from "../apis/auth-api";

import {
  haveAccessToken,
  removeAccessToken,
  setAccessToken
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    haveAccessToken() ? true : { id: 0, role: "guest" }
  );

  useEffect(() => {
    const getAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };

    if (haveAccessToken()) {
      getAuthUser();
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({ email, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser({ id: 0, role: "guest" });
  };

  const updateProfile = (data) => {
    setAuthenticatedUser({ ...authenticatedUser, ...data });
  };
  return (
    <AuthContext.Provider
      value={{ login, authenticatedUser, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
