import { Navigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import * as AuthApi from "../../apis/auth-api";
import useLoading from "../../hooks/useLoading";
import vlidateRegister from "../../validators/validate-register";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  role: "customer"
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const [complete, setComplete] = useState(false);

  const { startLoading, stopLoading } = useLoading();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = vlidateRegister(input);

      if (result) {
        setError(result);
      } else {
        setError({});
        startLoading();
        await AuthApi.register(input);
        setInput(initialInput);
        toast.success("Success register.Please login to continue");
        setComplete(true);
      }
    } catch (err) {
      // console.log(err)
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      {!complete || <Navigate to={"/login"} />}
      <div className=" flex justify-center items-center container h-[75vh] w-[100vw] mx-auto  ">
        <div className="mt-[15vh] border h-[80vh] w-[450px] p-[30px] flex-col justify-center flex items-center shadow-xl">
          <h1 className="mb-1 text-2xl font-semibold">Register User</h1>
          {/* <p className="font-thin">Please login using account detail bellow.</p> */}
          <form
            className="flex flex-col gap-2 justify-center items-center "
            onSubmit={handleSubmitForm}
          >
            <input
              type="text"
              name="firstName"
              className={`focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-6 border ${
                error.firstName ? "border-[#e02121]" : "border-[silver]"
              } `}
              placeholder="First Name"
              value={input.firstName}
              onChange={handleChangeInput}
            />
            <input
              type="text"
              name="lastName"
              className={`focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-4 border ${
                error.lastName ? "border-[#e02121]" : "border-[silver]"
              } `}
              placeholder="Last Name"
              value={input.lastName}
              onChange={handleChangeInput}
            />
            <input
              type="text"
              name="email"
              className={`focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-4 border ${
                error.email ? "border-[#e02121]" : "border-[silver]"
              } `}
              placeholder="Email address"
              value={input.email}
              onChange={handleChangeInput}
            />
            <input
              type="text"
              name="mobile"
              className={`focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-4 border ${
                error.mobile ? "border-[#e02121]" : "border-[silver]"
              } `}
              placeholder="phone number"
              value={input.mobile}
              onChange={handleChangeInput}
            />
            <input
              type="password"
              name="password"
              className={`focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-4 border ${
                error.password ? "border-[#e02121]" : "border-[silver]"
              } `}
              placeholder="Password"
              value={input.password}
              onChange={handleChangeInput}
            />
            <input
              type="password"
              name="confirmPassword"
              className={`focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-4 border ${
                error.confirmPassword ? "border-[#e02121]" : "border-[silver]"
              } `}
              placeholder="Confirm Password"
              value={input.confirmPassword}
              onChange={handleChangeInput}
            />
            <br />
            <span>
              <input
                type="radio"
                id="customer"
                name="role"
                value="customer"
                defaultChecked
                onChange={handleChangeInput}
              />
              <label for="customer">For Shopping </label>

              <input
                type="radio"
                id="seller"
                name="role"
                value="seller"
                onChange={handleChangeInput}
              />
              <label for="seller"> For Selling</label>
            </span>

            <button className=" mt-6 text-sm text-black font-semibold bg-pink-400 h-[35px] w-[200px] rounded-sm hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-1">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
