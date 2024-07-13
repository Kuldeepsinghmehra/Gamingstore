import React from "react";
import Logo from "../../assets/logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

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
                    <Link to="/explore" className="cursor-pointer">
                      Explore
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer" onClick={scrollWhatsnew}>
                      New Release
                    </a>
                  </li>
                  <li className="relative">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search games.."
                      className="bg-gray-700/50 px-4 py-2 rounded-2xl"
                    />
                    <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white">
              <ul className="flex gap-4 items-center">
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
                        className="bg-gray-700 inline-block px-6 py-3 rounded-2xl font-semibold"
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => loginWithRedirect()}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 inline-block px-6 py-3 rounded-2xl font-semibold"
                      >
                        Sign Up
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
