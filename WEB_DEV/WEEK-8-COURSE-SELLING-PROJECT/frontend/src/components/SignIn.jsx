

import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
    <div className="px-4 py-2 shadow-md rounded-lg sm:w-1/3 w-full ">
      <h4 className="text-center font-clash-bold border-b pb-2 ">Sign In</h4>
      <div className="flex flex-col mt-5">

        <input
          type="email "
          placeholder="example@gmail.com"
          className="input-style "
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
            lable={"Sign In"}
            containerClass={
              "bg-dark text-white hover:bg-yellow hover:text-dark  rounded-full u tracking-[1px] font-clash-light "
            }
          />
          <small>
            <p>
              {`I don't have an account `}
              <Link to={'/signup'} className="underline hover:text-blue-500 cursor-pointer ">
                click here
              </Link>{" "}
            </p>
          </small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignIn