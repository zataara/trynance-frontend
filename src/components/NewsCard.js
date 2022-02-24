import React from "react";

const NewsCard = ( props ) => {
  return (  <>
    <div className="flex flex-col md:items-center md:ml-64 my-10 h-screen">
      <div className="overflow-x-auto md:w-10/12 sm:-mx-6 overscroll-none">
        <div className="inline-block pt-14 py-2 min-w-full sm:px-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-28 shadow-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-2xl font-bold">
                  {props.title}
                </h6>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-xs font-bold">
                  <p>{props.content}</p>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default NewsCard;