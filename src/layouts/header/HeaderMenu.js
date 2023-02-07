import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DropDown from "../../components/DropDown";

export default function HeaderMenu() {
  const { authenticatedUser } = useAuth();
  return (
    <div className="py-2 flex justify-center items-center">
      {authenticatedUser ? (
        <>
          <Link
            className="mr-2 px-4 py-1 text-sm text-white font-semibold  hover:border-transparent  hover:font-semibold hover:text-black"
            to="/cart"
          >
            Cart
          </Link>
          <DropDown />
        </>
      ) : (
        <Link
          className="mr-2 px-4 py-1 text-sm text-black font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-1"
          to="/login"
        >
          Login
        </Link>
      )}
    </div>
  );
}
