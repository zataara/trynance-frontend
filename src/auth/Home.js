import React from "react";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-28 shadow-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-2xl font-bold">
                    Welcome!
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <ul>
                  <li className='text-center'>
                    Tryanance is a cryptocurrency exchange where you may browse
                    and trade digital assets, add coins to your watchlist, and
                    read financial news.
                  </li>
                  <br></br>
                  <li className='text-center'>
                    Upon registration you will recieve $1000 USDT to begin
                    trading with.
                  </li>
                  <br></br>
                  <li className='text-center'>
                    Good Luck!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
