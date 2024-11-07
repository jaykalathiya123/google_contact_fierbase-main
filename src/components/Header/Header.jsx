import React, { useState, useEffect } from "react";
import { HiUserAdd, HiHome, HiCog, HiPhone } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle, logout } from "../../Service/Action/authAction";
import { auth } from "../../fierbase";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // Dispatch user data to Redux
        dispatch({ type: "SIGN_IN_SUCCESS", payload: currentUser });
      } else {
        dispatch({ type: "SIGN_OUT_SUCCESS" });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 bg-white shadow-md w-full">
      <div className="flex items-center justify-between p-4  mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center">
          <button className="toggleButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <img
            src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png"
            alt="Contacts Icon"
            className="h-10 w-10 ml-2"
          />
          <span className="ml-2 font-medium text-gray-800 text-[26px] text-lg">
            Contacts
          </span>
        </div>

        {/* Search Box */}

        <div className="flex items-center bg-gray-100 p-2 rounded-md w-full max-w-[696px] :">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 text-gray-700 p-1 ml-2 outline-none placeholder-gray-400 w-full"
          />
        </div>
        {/* User Profile and Dropdown */}
        <div className="relative flex items-center">
          <div className="text-gray-600 flex space-x-3">
            <HiCog size={24} />
            <HiPhone size={24} />
            <button
              onClick={toggleDropdown}
              className="relative focus:outline-none"
            >
              <img
                src={user ? user.photoURL : "https://via.placeholder.com/150"}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>
          </div>

          {isOpen && (
            <div className="popup">
              <div className="popup-content">
                <span className="close-btn" onClick={closeDropdown}></span>
                <div className="user-info">
                  <img
                    src={user ? user.photoURL : ""}
                    alt="User Profile"
                    className="user-avatar"
                  />
                  <div className="user-details">
                    {user ? (
                      <>
                        <p className="user-email">{user.email}</p>
                        <p className="user-name">Hi, {user.displayName}!</p>
                        <button
                          className="sign-out-btn mt-3"
                          onClick={handleSignOut}
                        >
                          <span className="arrow-icon">→</span> Sign out
                        </button>
                      </>
                    ) : (
                      <button
                        className="sign-in-btn mt-3"
                        onClick={handleSignIn}
                      >
                        <span className="plus-icon">+</span> Sign in with Google
                      </button>
                    )}
                  </div>
                </div>
                <button
                  className="manage-account-btn mb-3"
                  onClick={() =>
                    window.open("https://myaccount.google.com/", "_blank")
                  }
                >
                  Manage your Google Account
                </button>
                <div className="popup-footer">
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
