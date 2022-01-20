import React from "react";

const ComingSoon = () => {

  return (
    <>
      <div className="container mx-auto px-4 h-full lg:mr-20">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full md:w-6/12 px-4 md:mr-72 md:mb-48">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-28 shadow-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-2xl font-bold">
                    Coming Soon!
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
