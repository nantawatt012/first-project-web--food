import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <>
      <div className=" flex justify-center items-center container h-[65vh] w-[100vw] mx-auto  ">
        <div className="mt-12 border h-[60vh] w-[450px] p-[30px] flex-col justify-center flex items-center shadow-xl">
          <h1 className="mb-1 text-2xl font-semibold">Sign In</h1>
          {/* <p className="font-thin">Please login using account detail bellow.</p> */}
          <form
            className="flex flex-col gap-2 justify-center items-center "
            // onSubmit={handleSubmitForm}
          >
            <input
              type="text"
              className="focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-8 border border-[silver]"
              placeholder="Email address"
              // value={emailOrMobile}
              // onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            <input
              type="text"
              className="focus:outline-none focus:border-slate-500 pl-2 bg- from-slate-400 rounded-sm h-8 w-[400px] mt-4 border border-[silver]"
              placeholder="phone number"
              // value={emailOrMobile}
              // onChange={(e) => setEmailOrMobile(e.target.value)}
            />
            <input
              type="password"
              className="focus:outline-none focus:border-slate-500 pl-2 form-control rounded-sm h-8 w-[400px] mt-4 border border-[silver]"
              placeholder="Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="focus:outline-none focus:border-slate-500 pl-2 form-control rounded-sm h-8 w-[400px] mt-4 border border-[silver]"
              placeholder="Confirm Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
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
