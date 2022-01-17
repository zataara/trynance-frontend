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
  const [faves, setFaves] = useState(['btc']);
  const [trades, setTrades] = useState([]);
  const [assets, setAssets] = useState([]);

  // fetch new data from CoinGecko every 2 seconds and set state
  useEffect(() => {
    let intervalId = setInterval(() => {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
      )
        .then((data) => data.json())
        .then((data) => setCoins(data));
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchFaves = async () => {
    let res = await backendApi.getFaves(currentUser);
      let faves = []
      for(let obj of res) {
        faves.push(obj.symbol);
      }
      setFaves(faves);
      
    }
  

    const fetchTrades = async () => {
      let { data, status } = await backendApi.getTrades(currentUser);
      if (status === 200) {
        setTrades(data);
        console.log(data);
      }
    };

    const fetchAssets = async () => {
      let { data, status } = await backendApi.getAssets(currentUser);
      if (status === 200) {
        setAssets(data);
        console.log(data);
      }
    };

    useEffect(() => {
      fetchFaves().catch(console.error);
      fetchTrades().catch(console.error);
      fetchAssets().catch(console.error);
    }, [currentUser]);


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
          }} >
        <CoinContext.Provider
          value={{
            coins,
            setCoins
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
