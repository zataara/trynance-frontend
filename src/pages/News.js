import {React, useContext} from "react";
import UserContext from "../context/UserContext";
import ComingSoon from "../components/ComingSoon";

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
      <ComingSoon />
    </>
  );
};

export default News;
