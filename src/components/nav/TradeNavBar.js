import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const TradeNavBar = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  const {currentUser} = useContext(UserContext)
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavOpen(!navOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center"></li>
            </ul>

            <ul>
              <li className="flex items-center">
                <Link to="/app">
                  <button
                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    {currentUser}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TradeNavBar;
