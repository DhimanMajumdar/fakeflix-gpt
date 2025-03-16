import React, { useEffect } from "react";
import LOGO from "../constants/logo.png";
import { SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header className="absolute w-full px-4 md:px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-28 md:w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-2 md:space-x-4 flex-wrap md:flex-nowrap">
          {showGptSearch && (
            <select
              className="py-1.5 px-2 md:py-2 md:px-3 bg-lime-500 text-black rounded-lg text-sm md:text-base"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-1.5 px-3 md:py-2 md:px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition text-sm md:text-base"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-9 h-9 md:w-12 md:h-12 rounded-full object-cover"
            src={USER_ICON}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="py-1.5 px-2 md:py-2 md:px-3 bg-red-600 rounded-lg text-white hover:bg-red-700 transition text-sm md:text-base"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
