import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AuthNavBar = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-black text-2xl font-bold leading-relaxed inine-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Trynance
            </Link>
          </div>

          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center"></li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <Link to="/register">
                <button
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:text-black active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  Register
                </button>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="flex items-center">
              <Link to="/login">
                <button
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:text-black active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AuthNavBar;
