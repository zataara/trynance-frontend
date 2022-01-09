import { Outlet } from "react-router-dom";

import TradeNavBar from "../components/TradeNavBar";
import TradeSideBar from "../components/TradeSideBar";

const TradeLayout = () => {
  return (
    <>
      <TradeNavBar />
      <TradeSideBar />
      <Outlet />
    </>
  );
};

export default TradeLayout;