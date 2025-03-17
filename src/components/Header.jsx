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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 px-4 py-2 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-20 md:w-44" src={LOGO} alt="logo" />
      </div>

      {/* Right Side Controls */}
      {user && (
        <div className="flex items-center space-x-2 md:space-x-4">
          {showGptSearch && (
            <select
              className="py-1 px-2 md:py-1.5 md:px-3 bg-lime-500 text-black rounded-lg text-[11px] md:text-sm"
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
            className="py-1 px-2 md:py-1.5 md:px-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition text-[11px] md:text-sm whitespace-nowrap"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover"
            src={USER_ICON}
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="py-1 px-2 md:py-1.5 md:px-3 bg-red-600 rounded-lg text-white hover:bg-red-700 transition text-[11px] md:text-sm"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
