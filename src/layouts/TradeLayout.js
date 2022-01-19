import { React, useEffect, useState, useContext } from "react";
import CoinContext from "../context/CoinContext";
import UserContext from "../context/UserContext";
import backGround from "../images/cyan-background.png";

import TradeNavBar from "../components/nav/TradeNavBar";
import TradeSideBar from "../components/nav/TradeSideBar";

import backendApi from "../api/backend.js";

const TradeLayout = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const [coins, setCoins] = useState([]);
  const [faves, setFaves] = useState([]);
  const [trades, setTrades] = useState([]);
  const [assets, setAssets] = useState([]);
  const [news, setNews] = useState([]);
  const [showTradeComp, setShowTradeComp] = useState([])

  // fetch new data from CoinGecko every 2 seconds and set state
  useEffect(() => {
    let intervalId = setInterval(() => {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
        .then((data) => data.json())
        .then((data) => setCoins(data))
        .catch(function (error) {
          console.log(error);
        });
    }, 2000);
    return () => clearInterval(intervalId);
    
  }, []);

  // fetch user info from the db, set each state 
  const fetchFaves = async () => {
    let res = await backendApi.getFaves(currentUser);
    let faves = [];
    for (let obj of res) {
      faves.push(obj.symbol);
    }
    setFaves(faves);
  };

  const fetchTrades = async () => {
    let res = await backendApi.getTrades(currentUser);
    let newTrades = JSON.parse(res);
    setTrades(newTrades);
  };

  const fetchAssets = async () => {
    let res = await backendApi.getAssets(currentUser);
    let newAssets = JSON.parse(res);
    console.log(newAssets)
    setAssets(newAssets);
  };

  useEffect(() => {
    fetchFaves().catch(console.error);
    fetchTrades().catch(console.error);
    fetchAssets().catch(console.error);
  }, [currentUser]);

  // fetch new data from CryptoPanic API every 30 seconds and set state
  // useEffect(() => {
  //   let intervalId = setInterval(() => {
  //     fetch("https://messari.io/api/vi/news")
  //       .then((data) => data.json())
  //       .then((data) => setNews(data))
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }, 60000);
  //   return () => clearInterval(intervalId);
  // }, []);


  //handles clicking the favorite icon and posts fave to db
  async function toggleFave(event) {
    const clicked = event.target.id;
    if (faves.some((star) => star === clicked)) {
      await backendApi.deleteFave(currentUser, clicked);
      fetchFaves();
      return setFaves(faves.filter((star) => star !== clicked));
    } else {
      await backendApi.postFave(currentUser, clicked);
      fetchFaves();
      return setFaves([...faves, clicked]);
    }
  }

  return (
    <>
      <TradeNavBar />
      <TradeSideBar />
      <UserContext.Provider
        value={{
          currentUser,
          faves,
          setFaves,
          fetchFaves,
          trades,
          setTrades,
          fetchTrades,
          assets,
          setAssets,
          fetchAssets,
          toggleFave,
          news,
        }}
      >
        <CoinContext.Provider
          value={{
            coins,
            setCoins,
          }}
        >
          <div
            className="md:ml-64 md:mt-10px overscroll-none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "86%",
              height: "100%",
              backgroundImage: `url(${backGround})`,
              backgroundPosition: "top left",
              backgroundRepeat: "no-repeat",
              backgroundAttachement: "fixed",
            }}
          >
            {children}
          </div>
        </CoinContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default TradeLayout;
