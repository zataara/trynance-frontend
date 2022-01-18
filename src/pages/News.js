import {React, useContext} from "react";
import UserContext from "../context/UserContext";


const News = () => {
  const {
    currentUser,
    faves,
    trades,
    assets,
    news,
  } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col md:mx-20 h-screen overscroll-none mr-5">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 overscroll-none">
          <div className="inline-block pt-14 py-2 min-w-full sm:px-6 lg:px-8 overscroll-none">
          

          </div>
        </div>
      </div>
    </>
  );
};

export default News;
