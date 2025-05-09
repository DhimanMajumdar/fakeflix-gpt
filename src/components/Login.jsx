import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = async () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    setLoading(true);

    if (!isSignInForm) {
      // Sign Up
      try {
        await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        setErrorMessage("Account created successfully! 🎉");
      } catch (error) {
        setErrorMessage(error.code + " - " + error.message);
      } finally {
        setLoading(false);
      }
    } else {
      // Sign In
      try {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        setErrorMessage("Signed in successfully! ✅");
      } catch (error) {
        setErrorMessage(error.code + " - " + error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <img src={BG_URL} alt="bg" className="w-full h-screen object-cover" />
      </div>

      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Form */}
      <form
        className="absolute top-20 left-0 right-0 mx-auto w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 
             p-6 md:p-8 bg-black bg-opacity-80 text-white rounded-lg z-20 
             max-h-[90vh] overflow-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl md:text-3xl py-2 md:py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your full name"
            aria-label="Full Name"
            className="p-3 md:p-4 my-2 md:my-4 w-full bg-gray-600 rounded-lg text-sm md:text-base"
          />
        )}

        <input
          ref={email}
          type="email"
          autoComplete="email"
          placeholder="Enter your email address"
          aria-label="Email address"
          autoFocus
          className="p-3 md:p-4 my-2 md:my-4 w-full bg-gray-600 rounded-lg text-sm md:text-base"
        />
        <input
          ref={password}
          type="password"
          autoComplete="current-password"
          placeholder="Enter password"
          aria-label="Password"
          className="p-3 md:p-4 my-2 md:my-4 w-full bg-gray-600 rounded-lg text-sm md:text-base"
        />

        <p className="text-red-500 text-sm md:text-base font-semibold py-1 md:py-2">
          {errorMessage}
        </p>

        <button
          className="p-3 md:p-4 my-4 md:my-6 bg-red-700 w-full rounded-lg hover:bg-red-800 transition text-sm md:text-base disabled:opacity-50"
          onClick={handleButtonClick}
          disabled={loading}
          type="button"
        >
          {loading
            ? isSignInForm
              ? "Signing In..."
              : "Signing Up..."
            : isSignInForm
            ? "Sign In"
            : "Sign Up"}
        </button>

        <p
          className="py-2 md:py-4 text-center cursor-pointer text-sm md:text-base hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to FakeFlix? Sign Up Now"
            : "Already Registered? Sign In Now!"}
        </p>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Disclaimer: This is just a dummy project to showcase my skills & for
          learning purposes. This is not an actual streaming website. Please do
          not enter your real credentials.
        </p>
      </form>
    </>
  );
};

export default Login;
