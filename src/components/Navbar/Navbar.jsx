import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollWhatsnew = () => {
    const element = document.getElementById("whatsnew");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex gap-8 items-center text-white">
              <Link to="/">
                <img src={Logo} alt="Logo" className="w-16" />
              </Link>
              <div className="hidden sm:block">
                <ul className="flex gap-6 items-center">
                  <li>
                    <Link
                      to="/explore"
                      className="cursor-pointer hover:text-red-500 md:hover:text-red-500"
                    >
                      Explore
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="cursor-pointer hover:text-red-500 md:hover:text-red-500"
                      onClick={scrollWhatsnew}
                    >
                      New Release
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              {/* Desktop View */}
              <ul className="hidden sm:flex text-white gap-4 items-center">
                {isAuthenticated ? (
                  <>
                    <li className="flex items-center gap-2">
                      <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                      <span>{user.name}</span>
                    </li>
                    <li>
                      <button
                        onClick={() => logout({ returnTo: window.location.origin })}
                        className="bg-gray-700 inline-block px-6 py-3 rounded-2xl font-semibold"
                      >
                        Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button
                        onClick={() => loginWithRedirect()}
                        className="bg-gray-700 inline-block px-4 py-2 rounded-2xl font-semibold"
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => loginWithRedirect()}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 inline-block px-4 py-2 rounded-2xl font-semibold"
                      >
                        Sign Up
                      </button>
                    </li>
                  </>
                )}
              </ul>

              {/* Hamburger Icon for Mobile */}
              <button
                className="block sm:hidden p-2 text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Login/Logout */}
        {menuOpen && (
          <div className="fixed inset-0 top-16 bg-primary p-4 z-50 sm:hidden">
            <ul className="flex flex-col gap-4 items-center text-white">
              {isAuthenticated ? (
                <>
                  <li className="flex items-center gap-2">
                    <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
                    <span>{user.name}</span>
                  </li>
                  <li>
                    <button
                      onClick={() => logout({ returnTo: window.location.origin })}
                      className="bg-gray-700 inline-block px-6 py-3 rounded-2xl font-semibold"
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button
                      onClick={() => loginWithRedirect()}
                      className="bg-gray-700 inline-block px-4 py-2 rounded-2xl font-semibold"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => loginWithRedirect()}
                      className="bg-gradient-to-r from-blue-500 to-blue-700 inline-block px-4 py-2 rounded-2xl font-semibold"
                    >
                      Sign Up
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
