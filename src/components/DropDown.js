import { useState } from "react";

export default function DropDown({ title, children }) {
  const [isOpen, setOpen] = useState(false);
  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <div className=" dropdown">
      <button
        className="text-black hover:text-white border border-purple-200 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center"
        onClick={handleDropDown}
      >
        {title}
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
        {children}
      </div>
    </div>
  );
}
