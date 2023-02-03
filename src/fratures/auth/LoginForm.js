import { useState } from "react";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

export default function LoginForm() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  // const {login}= useAuth()

  // const handleSubmitForm = async (e) => {
  //   try {
  //     e.preventDefault();
  //     await login(emailOrMobile, password);
  //     TransformStream.success("sucess login");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err.response?.data.message);
  //   }
  // };

  return (
    <>
      <div className=" flex justify-center items-center container h-[65vh] w-[100vw] mx-auto  ">
        <div className="border h-[55vh] w-[450px] p-[30px] flex-col justify-center flex items-center shadow-xl">
          <h1 className="mb-3 text-2xl font-semibold">Login</h1>
          <p className="font-thin">Please login using account detail bellow.</p>
          <form
            className="flex flex-col gap-3 justify-center items-center "
            // onSubmit={handleSubmitForm}
          >
            <input
              type="text"
              className="focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-8 border border-[silver]"
              placeholder="Email address or phone number"
              value={emailOrMobile}
              onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            <input
              type="password"
              className="focus:outline-none focus:border-slate-500 pl-2 form-control rounded-sm h-8 w-[400px] mt-4 border border-[silver]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className=" mt-6 text-sm text-black font-semibold bg-pink-400 h-[35px] w-[200px] rounded-sm hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-1">
              Log In
            </button>

            <Link className="text-sm font-extralight " to="/register">
              Don’t have an Account?Create account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
