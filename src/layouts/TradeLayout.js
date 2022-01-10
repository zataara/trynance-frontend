import TradeNavBar from "../components/nav/TradeNavBar";
import TradeSideBar from "../components/nav/TradeSideBar";

const TradeLayout = ({ children }) => {
  return (
    <>
      <TradeNavBar />
      <TradeSideBar />
      {children}
    </>
  );
};

export default TradeLayout;
