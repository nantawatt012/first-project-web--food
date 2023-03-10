import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectIfAuthenticate({ children }) {
  const {
    authenticatedUser: { id, role }
  } = useAuth();

  if ((id == 0) & (role == "guess")) {
    return <Navigate to={"/"} />;
  }
  return children;
}
