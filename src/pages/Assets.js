import { React, useState, useContext } from "react";
import UserContext from "../context/UserContext";
import useLocalStorage from "../hooks/useLocalStorage";
import convertBigNums from "../helpers/convertBigNums";
import CoinContext from "../context/CoinContext";
import starIcon from "../images/star.svg";
import starIcon_gray from "../images/star_gray.svg";
import backendApi from "../api/backend";

const Assets = (props) => {
  const { coins, setCoins } = useContext(CoinContext);
  const {
    currentUser,
    faves,
    setFaves,
    fetchFaves,
    trades,
    setTrades,
    fetchTrades,
    assets,
    setAssets,
    assetCoins,
    fetchAssets,
    toggleFave,
  } = useContext(UserContext);

  const orderedAssets = [].concat(assetCoins).sort((a, b) => b.value - a.value);

  return (
    <div className="flex flex-col md:mx-20 h-screen overscroll-none mr-5">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 overscroll-none">
        <div className="inline-block pt-14 py-2 min-w-full sm:px-6 lg:px-8 overscroll-none">
          <div className="overflow-auto shadow-md sm:rounded-lg overscroll-none">
            <table className="overscroll-none">
              <thead className="sticky top-0 bg-darkmode-thead">
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    <i></i>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 "
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    24h
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Buy/Sell
                  </th>
                </tr>
              </thead>
              <tbody className="flex-1 overflow-y-auto ">
                {orderedAssets.map((coin) => (
                  <tr className="bg-darkmode-tbody border-b  dark:border-gray-600 transition duration-1000">
                    <td className="sticky top-0 py-3 px-2 text-center text-gray-700 uppercase dark:text-gray-400">
                      <img
                        id={coin.symbol}
                        onClick={toggleFave}
                        src={
                          faves.some((fave) => fave === coin.symbol)
                            ? starIcon
                            : starIcon_gray
                        }
                        alt="favorite"
                      />
                    </td>
                    <td>
                      <img
                        className="w-12 pl-3"
                        alt={coin.symbol}
                        src={coin.image}
                      ></img>
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.name}
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.amount > 9999
                        ? coin.amount
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : coin.amount}
                    </td>
                    <td
                      class={
                        "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000"
                      }
                    >
                      ${" "}
                      {coin.value % 2 === 0
                        ? coin.value.toFixed(0)
                        : coin.value.toFixed(2)}
                    </td>
                    <td
                      class={
                        "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000"
                      }
                    >
                      <button
                        className={
                          coin.price_change_percentage_24h > 5
                            ? "bg-green-600/100 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : coin.price_change_percentage_24h > 3
                            ? "bg-green-600/75 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : coin.price_change_percentage_24h > 0
                            ? "bg-green-600/50 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : coin.price_change_percentage_24h > -3
                            ? "bg-red-600/50 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : coin.price_change_percentage_24h > -5
                            ? "bg-red-600/75 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : coin.price_change_percentage_24h < -5
                            ? "bg-red-600/100 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : ""
                        }
                      >
                        {coin.price_change_percentage_24h.toFixed(2)} %
                      </button>
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      <button
                        class="transition duration-300 ease-in-out 
                        hover:bg-black hover:text-cyan-300 transform 
                        hover:-translate-xy-1  hover:scale-110 
                        rounded-lg p-4 border hover:border-cyan-300 bg-cyan-300 text-darkmode-tbody font-bold py-2 px-4  rounded"
                      >
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
