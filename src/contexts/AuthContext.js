// const { createContext } = require("react");

// export const AuthContext = createContext();

// export default function AuthContextProvider({ children }) {
//   const login = async (emailOrMobile, password) => {
//     const res = await authApi.login({ emailOrMobile, password });
//     setAccessToken(res.data.accessToken);
//     setAuthenticatedUser(jwtDecode(res.data.accessToken));
//   };

//   return (
//     <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
//   );
// }
