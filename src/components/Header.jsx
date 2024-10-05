import React, { useEffect } from "react";
import LOGO from "../constants/logo.png";
import { USER_ICON } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";

const Header = () => {
  const dispath=useDispatch();
  const navigate = useNavigate();
  const user=useSelector(store=>store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(()=>{
    const unsuscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispath(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispath(removeUser());
        navigate("/");
      }
    });
    
    // when components unmounts, unsuscribe
    return ()=>unsuscribe();

  },[]);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={USER_ICON} alt="user-icon" />
          <button
            onClick={handleSignOut}
            className="bg-black cursor-pointer rounded-md text-white font-bold"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
