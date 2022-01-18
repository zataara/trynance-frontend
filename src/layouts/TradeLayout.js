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
  const [faves, setFaves] = useState(["btc"]);
  const [trades, setTrades] = useState([]);
  const [assets, setAssets] = useState([]);
  const [assetCoins, setAssetCoins] = useState([]);
  const [faveCoins, setFaveCoins] = useState([]);
  const [gainerCoins, setGainerCoins] = useState([]);
  const [loserCoins, setLoserCoins] = useState([]);
  const [news, setNews] = useState([]);

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

  // fetch faves from the db, set fave coins for rendering
  const fetchFaves = async () => {
    let res = await backendApi.getFaves(currentUser);
    let faves = [];
    for (let obj of res) {
      faves.push(obj.symbol);
    }
    setFaves(faves);
    setFaveCoins(convertFaveCoins(faves));
  };

  const fetchTrades = async () => {
    let { data, status } = await backendApi.getTrades(currentUser);
    if (status === 200) {
      setTrades(data);
      console.log(data);
    }
  };

  const fetchAssets = async () => {
    let res = await backendApi.getAssets(currentUser);
    let newAssets = JSON.parse(res)
    setAssets(newAssets);
    setAssetCoins(convertAssetCoins(newAssets));
  
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

  function convertFaveCoins(faves) {
    let favorites = [];
    for (let coin of coins) {
      for (let fave of faves) {
        if (coin.symbol === fave) {
          favorites.push(coin);
        }
      }
    }
    return favorites;
  }

  function convertAssetCoins(assets) {
    let assetCoins= [];
    for (let asset of assets) {
      for (let coin of coins) {
        if (coin.symbol === asset.symbol) {
          assetCoins.push({
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
            amount: asset.amount,
            value: coin.current_price * asset.amount,
            price_change_percentage_24h: coin.price_change_percentage_24h,
          });
        }
      }
    }
    return assetCoins;
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
          assetCoins,
          fetchAssets,
          toggleFave,
          faveCoins,
          gainerCoins,
          loserCoins,
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
