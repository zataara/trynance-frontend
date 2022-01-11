/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import { FaChartLine } from "react-icons/fa";

const TradeSideBar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          ></button>
          {/* Brand */}
          <Link
            className="md:block text-left text-black md:pb-2 ml-8 mr-0 inline-block whitespace-nowrap text-2xl uppercase font-bold p-4 px-0"
            to="/app"
          >
            Trynance
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative"></li>
            <li className="inline-block relative"></li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  ></Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/********** Trade Navigation ***********/}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {/***** Dashboard Link *****/}
              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/app") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className={
                      "items-center text-s uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/app") !== -1
                        ? "text-black-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/app"
                  >
                    <i
                      className={
                        "uil uil-chart-line mr-2 text-2xl " +
                        (window.location.href.indexOf("/app") !== -1
                          ? "opacity-75 ml-7"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </Link>
                </div>
              </li>
              {/***** Assets Link *****/}
              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/assets") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className={
                      "text-s uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/assets") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/assets"
                  >
                    <i
                      className={
                        "uil uil-wallet mr-2 text-2xl " +
                        (window.location.href.indexOf("/assets") !== -1
                          ? "opacity-75 ml-7"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Assets
                  </Link>
                </div>
              </li>

              {/***** Trades Link *****/}
              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/trades") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className={
                      "text-s uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/trades") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/trades"
                  >
                    <i
                      className={
                        "uil uil-exchange mr-2 text-2xl " +
                        (window.location.href.indexOf("/trades") !== -1
                          ? "opacity-75 ml-7"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Trades
                  </Link>
                </div>
              </li>
              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/***** Coins Link *****/}
              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/coins") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className={
                      "items-center text-s uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/coins") !== -1
                        ? "text-black-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/coins"
                  >
                    <i
                      className={
                        "uil uil-bitcoin-circle mr-2 text-2xl " +
                        (window.location.href.indexOf("/coins") !== -1
                          ? "opacity-75 ml-7"
                          : "text-blueGray-300")
                         
                      }
                    ></i>{" "}
                    Coins
                  </Link>
                </div>
              </li>
              {/***** Gainers *****/}
              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/gainers") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className={
                      "text-s uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/gainers") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/gainers"
                  >
                    <i
                      className={
                        "uil uil-arrow-growth mr-2 text-2xl " +
                        (window.location.href.indexOf("/gainers") !== -1
                          ? "opacity-75 ml-7"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Gainers
                  </Link>
                </div>
              </li>

              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/losers") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className={
                      "text-s uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/losers") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/losers"
                  >
                    <i
                      className={
                        "uil uil-chart-down mr-2 text-2xl " +
                        (window.location.href.indexOf("/losers") !== -1
                          ? "opacity-75 ml-7"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Losers
                  </Link>
                </div>
              </li>
              {/*** WathclistLink ***/}

              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/watchlist") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className={
                      "text-s uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/watchlist") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/watchlist"
                  >
                    <i
                      className={
                        "uil uil-favorite mr-2 text-2xl " +
                        (window.location.href.indexOf("/watchlist") !== -1
                          ? "opacity-75 ml-7"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Watchlist
                  </Link>
                </div>
              </li>

              {/*** Link ***/}
              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/news") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className={
                      "text-s uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/news") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/news"
                  >
                    <i
                      className={
                        "uil uil-newspaper mr-2 text-2xl " +
                        (window.location.href.indexOf("/news") !== -1
                          ? "opacity-75 ml-7"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    News
                  </Link>
                </div>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <div
                  className={
                    window.location.href.indexOf("/profile") !== -1
                      ? "bg-cyan-300 rounded-lg border-black border"
                      : ""
                  }
                >
                  <Link
                    className="text-blueGray-700 hover:text-black-300 text-s uppercase py-3 font-bold block"
                    to="/profile"
                  >
                    <i
                      className={
                        "uil uil-user-square text-blueGray-400 mr-2 text-2xl" +
                        (window.location.href.indexOf("/profile") !== -1
                          ? "opacity-75 ml-7"
                          : "")
                      }
                    ></i>
                    Profile
                  </Link>
                </div>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-s uppercase py-3 font-bold block"
                  to="/logout"
                >
                  <i className="uil uil-signout text-blueGray-300 mr-2 text-2xl"></i>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TradeSideBar;
