import { React, useContext } from "react";
import UserContext from "../context/UserContext";
import arrowSvg from "../images/arrow-circle-right.svg";

const Trades = (props) => {
  const {
    trades,
  } = useContext(UserContext);

  const orderedTrades = [].concat(trades).sort((a, b) => a.date - b.date);

  
  return (
    <div className="flex flex-col md:items-center lg:ml-64 my-10 h-screen">
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
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Currency
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
                    Price
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-sm font-medium tracking-wider text-left uppercase dark:text-gray-400 "
                  >
                    <span className='invisible'>Trade</span>
                  </th>

                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 sticky top-0"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 sticky top-0"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="flex-1 overflow-y-auto ">
                {orderedTrades.map((coin) => (
                  <tr className="bg-darkmode-tbody border-b  dark:border-gray-600 transition duration-1000">
                    
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      <img
                        className="w-12 pl-3"
                        alt={coin.symbol}
                        src={coin.currency_from_image}
                      ></img>
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.currency_from}
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.currency_from_amount}
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.currency_from_price}
                    </td>
                    <td className="py-4 px-6 text-3xl font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                    <img alt='to' src={arrowSvg}></img>
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      <img
                      className="w-12 pl-3"
                        alt={coin.currency_to}
                        src={coin.currency_to_image}
                      ></img>
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.currency_to}
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.currency_to_amount}
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.currency_to_price}
                    </td>
                    <td className="py-4 px-6 text-sm font-bold text-gray-500 whitespace-nowrap dark:text-gray-400 transition duration-1000">
                      {coin.date}
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

export default Trades;
