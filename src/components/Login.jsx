import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    // checkValidateData(email,password)

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    // Sign In / Sign Out
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    }
  };

  return (
    <>
      <div className="absolute">
        <Header />
        <img src={BG_URL} alt="bg" />
      </div>

      <form
        className="absolute w-3/12 mt-24 mx-auto left-0 right-0 my-36 p-12 bg-black bg-opacity-80 text-white rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your full name"
            className="p-4 my-4 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your email address"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <p className="text-red-500 text-lg font-bold py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to FakeFlix? Sign Up Now"
            : "Already Registered. Sign In Now!"}
        </p>
      </form>
    </>
  );
};

export default Login;
