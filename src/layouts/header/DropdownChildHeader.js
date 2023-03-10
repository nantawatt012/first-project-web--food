import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function DropdownChildHeader() {
  const { logout } = useAuth();

  const {
    authenticatedUser: { role, id }
  } = useAuth();

  return (
    <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
      <li>
        {
          <Link
            to={`${role === "customer" ? "/user" : `/shop/${id}`}`}
            className="block py-2 px-4 hover:bg-gray-100"
          >
            {`${role === "customer" ? `Edit Profile` : `Shop Custom`}`}
          </Link>
        }
      </li>
      {role === "customer" && (
        <li>
          <Link
            to={`/order/${id}`}
            className="block py-2 px-4 hover:bg-gray-100"
          >
            Order
          </Link>
        </li>
      )}
      {role !== "guess" && (
        <li>
          <Link
            to={`/orderHistory/${id}`}
            className="block py-2 px-4 hover:bg-gray-100"
          >
            Order History
          </Link>
        </li>
      )}
      <li>
        <Link
          to={"/"}
          onClick={logout}
          className=" text-red-500 block py-2 px-4 hover:bg-gray-100 pr-[90px]"
        >
          Log out
        </Link>
      </li>
    </ul>
  );
}
