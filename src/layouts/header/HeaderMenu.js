import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// already change to new one
import DropDown from "../../components/DropDown";
import DropdownChildHeader from "./DropdownChildHeader";

export default function HeaderMenu() {
  const {
    authenticatedUser: { id, role }
  } = useAuth();
  return (
    <div className="py-2 flex justify-center items-center">
      {role === "customer" ? (
        <Link
          className="mr-2 px-4 py-1 text-sm text-white font-semibold  hover:border-transparent  hover:font-semibold hover:text-black"
          to={`/cart/${id}`}
        >
          Cart
        </Link>
      ) : null}
      {role !== "guest" ? (
        <DropDown title="Menu">
          <DropdownChildHeader />
        </DropDown>
      ) : null}
      {role === "guest" ? (
        <Link
          className="mr-2 px-4 py-1 text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-orange-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-1"
          to="/login"
        >
          Login
        </Link>
      ) : null}
    </div>
  );
}
