import { React, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import CoinContext from "../context/CoinContext";

const Assets = (props) => {
  const { coins } = useContext(CoinContext);
  const { assets } = useContext(UserContext);

  const orderedAssets = [].concat(assets).sort((a, b) => b.value - a.value);

  function findCoinValue(coin) {
    for (let c of coins) {
      if (c.name === coin.name) {
        return parseFloat(c.current_price * coin.amount).toFixed(2);
      }
    }
  }

  return (
    <div className="flex flex-col items-center md:ml-64 my-10 h-screen">
      <div className="overflow-x-auto sm:-mx-6 overscroll-none">
        <div className="inline-block pt-14 py-2 min-w-full sm:px-6">
          <div className="overflow-auto shadow-md sm:rounded-lg ">
            <table className="overscroll-none">
              <thead className="sticky top-0 bg-darkmode-thead">
                <tr>
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
                  {/* <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    24h
                  </th> */}
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
                      $ {findCoinValue(coin) || 0}
                    </td>
                    {/* <td
                      class={
                        "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000"
                      }
                    >
                      <button
                        className={
                          findCoinPrice(coin)> 5
                            ? "bg-green-600/100 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : findCoinPrice(coin) > 3
                            ? "bg-green-600/75 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : findCoinPrice(coin) > 0
                            ? "bg-green-600/50 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : findCoinPrice(coin) > -3
                            ? "bg-red-600/50 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : findCoinPrice(coin) > -5
                            ? "bg-red-600/75 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : findCoinPrice(coin) < -5
                            ? "bg-red-600/100 text-white font-bold py-2 px-4 rounded transition duration-1000"
                            : ""
                        }
                      >
                        {findCoinPrice(coin).toFixed(2)} %
                      </button>
                    </td> */}
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      <Link to={`/trade/${coin.name}`}>
                        <button
                          class="transition duration-300 ease-in-out 
                        hover:bg-black hover:text-cyan-300 transform 
                        hover:-translate-xy-1  hover:scale-110 
                        rounded-lg p-4 border hover:border-cyan-300 bg-cyan-300 text-darkmode-tbody font-bold py-2 px-4  rounded"
                        >
                          Trade
                        </button>
                      </Link>
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
