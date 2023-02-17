import { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function DropdownChildHeader() {
  const [isOpen, setOpen] = useState(false);
  const { logout } = useAuth();

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  const {
    authenticatedUser: { role, id }
  } = useAuth();

  return (
    <div className=" dropdown">
      <button
        className="text-black hover:text-white border border-purple-200 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center"
        onClick={handleDropDown}
      >
        User
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`absolute right-1 top-[65px] z-10 w-40 bg-white divide-gray-100 rounded divide-y  shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
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
      </div>
    </div>
  );
}
