import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import convertBigNums from "../basics/convertBigNums";

const Gainers = () => {
  const [coins, setCoins] = useState([]);
  const [seconds, setSeconds] = useState(0)

  // initial fetch and fetch every 2 seconds
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=200&page=1&sparkline=false"
    )
      .then((data) => data.json())
      .then((data) => setCoins(
        data.sort((a,b) => b.price_change_percentage_24h - a.price_change_percentage_24h)))
  }, [seconds]);

  // fetch new data from CoinGecko every 2 sends 
  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds => seconds + 2)
    }, 2000)
  }, [])

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow-md sm:rounded-lg">
            <table class="min-w-full">
              <thead class="bg-darkmode-thead">
                <tr>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Last Price
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    24H
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Buy/Sell
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Market Cap
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    24h Volume
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Supply
                  </th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <tr class="bg-darkmode-tbody border-b  dark:border-gray-600">
                    <td>
                      <img
                        className="w-12 pl-3"
                        alt={coin.symbol}
                        src={coin.image}
                      ></img>
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {coin.name}
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      ${coin.current_price}
                    </td>
                    <td
                      class={
                        "py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                      }
                    >
                      {console.log()}
                      <button
                        className={
                          coin.price_change_percentage_24h > 5
                            ? "bg-green-600/100 text-white font-bold py-2 px-4 rounded"
                            : coin.price_change_percentage_24h > 3
                            ? "bg-green-600/75 text-white font-bold py-2 px-4 rounded"
                            : coin.price_change_percentage_24h > 0
                            ? "bg-green-600/50 text-white font-bold py-2 px-4 rounded"
                            : coin.price_change_percentage_24h > -3
                            ? "bg-red-600/50 text-white font-bold py-2 px-4 rounded"
                            : coin.price_change_percentage_24h > -5
                            ? "bg-red-600/75 text-white font-bold py-2 px-4 rounded"
                            : coin.price_change_percentage_24h < -5
                            ? "bg-red-600/100 text-white font-bold py-2 px-4 rounded"
                            : ""
                        }
                      >
                        {coin.price_change_percentage_24h !== null ? coin.price_change_percentage_24h.toFixed(2) : 0 } %
                      </button>
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      <button class="bg-cyan-300 hover:bg-blue-700  hover:text-white text-black font-bold py-2 px-4 rounded">
                        Trade
                      </button>
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      ${convertBigNums(coin.market_cap)}
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      $
                      {convertBigNums(coin.total_volume)}
                    </td>
                    <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {convertBigNums(coin.circulating_supply
                        )}
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

export default Gainers;
