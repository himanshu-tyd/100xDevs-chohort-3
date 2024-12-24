import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="px-4 py-2 shadow-md rounded-lg sm:w-1/3 w-full ">
        <h4 className="text-center font-clash-bold border-b pb-2 ">Sign Up</h4>
        <div className="flex flex-col mt-5">
          <div className="flex  items-center gap-5 ">
            <input
              type="text "
              placeholder="First Name"
              className="input-style"
            />
            <input
              type="text "
              placeholder="Last Name"
              className="input-style"
            />
          </div>

          <input
            type="email "
            placeholder="example@gmail.com"
            className="input-style mt-5"
          />
          <input
            type="password"
            placeholder="********"
            className="input-style mt-5"
          />
          <select
            id="type"
            className="input-style mt-5 w-[200px] font-clash-regular   "
          >
            <option className="text-slate-700">who are you</option>
            <option value={"user"} className="text-slate-700">
              User
            </option>
            <option value={"admin"} className="text-slate-700">
              Admin
            </option>
          </select>

          <div className="mt-6 flex items-center justify-between">
            <Button
              lable={"SignUp"}
              containerClass={
                "bg-dark text-white hover:bg-yellow hover:text-dark  rounded-full u tracking-[1px] font-clash-light "
              }
            />
            <small>
              <p>
                I already have an account?{" "}
                <Link to={'/signin'} className="underline hover:text-blue-500 cursor-pointer ">
                  click here
                </Link>{" "}
              </p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
