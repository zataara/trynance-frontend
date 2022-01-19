import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import BackendApi from "../api/backend";
import UserContext from "../context/UserContext";
import CoinContext from "../context/CoinContext";
import Select from "react-select";
import { useForm } from "react-hook-form";


const MakeTrade = (props) => {
  
  const { coins } = useContext(CoinContext);
  const { currentUser, assets, fetchAssets, fetchTrades } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [currencyFrom, setCurrencyFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState();
  const [currencyFromAmount, setCurrencyFromAmount] = useState(0);
  const [currencyToAmount, setCurrencyToAmount] = useState(0);
  const [currencyFromRate, setCurrencyFromRate] = useState();
  const [currencyToRate, setCurrencyToRate] = useState();


  // const handleSubmit = (e) => {
  //   BackendApi.postTrade(currentUser, prepareDataForTrade());

  // };

  const onSubmit = (data) => {
    BackendApi.postTrade(currentUser, prepareDataForTrade());
    fetchAssets();
    fetchTrades();

  }

  function findCoinImage(coin) {
    for(let c of coins) {
      if(c.name === coin) {
        return c.image
      }
    }
  }
  
  function findCoinRate(coinName) {
    for(let coin of coins) {
      if(coin.name === coinName) {
        return coin.current_price
      }
    }
  }

  function findAssetAmount(coin) {
    for(let asset of assets) {
      if(asset.name === coin) {
        return asset.amount;
      }
      
    }
  }


  function prepareDataForTrade(){
    let newDate = new Date(Date.now());
    const data = {
      username: currentUser,
      currency_from_amount: parseFloat(currencyFromAmount),
      currency_from_price: parseFloat(currencyFromRate),
      currency_from_image: findCoinImage(currencyFrom),
      currency_from: currencyFrom,
      currency_to_amount: parseFloat(currencyToAmount),
      currency_to_price: parseFloat(currencyToRate),
      currency_to_image: findCoinImage(currencyTo),
      currency_to:  currencyTo,
      date: newDate.toDateString()

    }
    return data;
  }

  /***** Handlers for changes to the form *****/
  const handleFromChange = (e) => {
    const { value } = e.target;
    setCurrencyFromAmount(value);
    
    console.log(value, currencyFromRate, currencyToRate)

    setCurrencyToAmount((value * currencyFromRate / currencyToRate ? value * currencyFromRate / currencyToRate : 0).toFixed(8));
  };

 

  const changeCurrencyTo = (e) => {
    const { value } = e;
    setCurrencyTo(value);
    setCurrencyFromAmount(0);
    setCurrencyToAmount(0);
    const toRate = findCoinRate(value);
    setCurrencyToRate(toRate);  
  }

  const changeCurrencyFrom = (e) => {
    const { value } = e;
    setCurrencyFrom(value);
    setCurrencyFromAmount(0);
    setCurrencyToAmount(0);
    const fromRate = findCoinRate(value);
    setCurrencyFromRate(fromRate);
  }


  function convertAssetsToTrade() {
    let assetsToTrade = [];
    for (let asset of assets) {
      assetsToTrade.push({
        label: asset.name,
        value: asset.name,
      });
    }
    return assetsToTrade;
  }

  function convertCoinsToTrade() {
    let coinsToTrade = [];
    for (let coin of coins) {
      coinsToTrade.push({
        label: coin.name,
        value: coin.name,
      });
    }
    return coinsToTrade;
  }

  let assetsToTrade = convertAssetsToTrade();
  let coinsToTrade = convertCoinsToTrade();

  return (
    <>
      <div className="container mx-auto px-4 h-full overscroll-none ">
        <div className="flex content-center items-center justify-center h-full overscroll-none w-9/12">
          <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 bg-gradient-to-r from-cyan-500 to-blue-500">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-black text-3xl font-bold">Trade</h6>
                </div>

                <hr className="mt-2 border-b-1 border-blueGray-300" />
              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3"></div>
                  <div className="text-center mt-6">
                    <div className="wrapper relative w-full mb-3">
                      <div className="display: inline-block w-6/12 mr-4">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="currency_from"
                        >
                          From
                        </label>
                        <Select
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="currency_from"
                          type="text"
                          name="currency_from"
                          placeholder=""
                          options={assetsToTrade}
                          onChange={changeCurrencyFrom}
                        />
                      </div>
                      <div className="display: inline-block">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="username"
                        >
                          { errors.currency_from_amount ? 
                          errors.currency_from_amount?.type === 'max' && <p className="text-xs text-red-700">Amount exceeds balance</p> : 'Amount'}
                        </label>
                        <input
                          



                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              {...register("currency_from_amount",
                                                {
                                                  max: findAssetAmount(currencyFrom)
                                                })}
                              onChange={handleFromChange}
                              type='number'
                              name='currency_from_amount'
                              value={currencyFromAmount}></input>
                              
                        {/* <button 
                      className="display: inline-block">
                      Max
                    </button> */}
                      </div>
                    </div>
                    <div className="wrapper relative w-full mb-3">
                      <div className="display: inline-block w-6/12 mr-4">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="currency_from"
                        >
                          To
                        </label>
                        <Select
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="currency_to"
                          type="text"
                          name="currency_to"
                          placeholder=""
                          options={coinsToTrade}
                          onChange={changeCurrencyTo}
                        />
                      </div>
                      <div className="display: inline-block">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="username"
                        >
                          Amount
                        </label>
                        <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        {...register("currency_to_amount", {
                          max: findAssetAmount(currencyFrom)
                        })}
                        
                        name='currency_to_amount'
                        
                        value={currencyToAmount}></input>
                      </div>
                    </div>
                    <button
                      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-lg font-bold uppercase px-6 py-3 rounded shadow hover:shadow-xl hover:text-black outline-none focus:outline-none mr-1 mb-1 w-6/12 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Execute
                    </button>

                    <Link to="/app">
                      <button className="mt-1 bg-transparent text-white font-semibold hover:text-black py-2 px-4 hover:shadow-xl border border-gray-300 hover:border-black uppercase rounded w-6/12">
                        Cancel
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeTrade;
