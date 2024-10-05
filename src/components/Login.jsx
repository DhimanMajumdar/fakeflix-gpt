import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
    const [isSignInForm,setSignInForm]=useState(true);
    const toggleSignInForm =()=>{
        setSignInForm(!isSignInForm);
    }
  return (
    <>
      <div className="absolute">
        <Header />
        <img src={BG_URL} alt="bg" />
      </div>

      <form className="absolute w-3/12 mt-24 mx-auto left-0 right-0 my-36 p-12 bg-black bg-opacity-80 text-white rounded-lg">
        <h1 className="font-bold text-white text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm&&<input
          type="text"
          placeholder="Enter your full name"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />}
        <input
          type="text"
          placeholder="Enter your email address"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to FakeFlix? Sign Up Now":"Already Registered. Sign In Now!"}</p>
      </form>
    </>
  );
};

export default Login;
