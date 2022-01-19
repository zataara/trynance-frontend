import { Routes, Route } from "react-router-dom";

/*****  Layouts  *****/
import PrivateRoute from "./layouts/PrivateRoute";

/***** Auth *****/
import Login from "./auth/Login";
import Register from "./auth/Register";

/***** Pages *****/
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Trades from "./pages/Trades";
import Coins from "./pages/Coins"
import Gainers from "./pages/Gainers";
import Losers from "./pages/Losers";
import Watchlist from "./pages/Watchlist";
import News from "./pages/News";
import Profile from "./pages/Profile";
import MakeTrade from "./pages/MakeTrade";
import NotFound from "./pages/NotFound";

const Router = ({ login, register, logout }) => {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login login={login} />} />
        <Route
          exact
          path="/register"
          element={<Register register={register} />}
        />
        <Route
          exact
          path="/app"
          element={
            <PrivateRoute exact path="/app">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/assets"
          element={
            <PrivateRoute exact path="/assets">
              <Assets />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/trades"
          element={
            <PrivateRoute exact path="/trades">
              <Trades />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/coins"
          element={
            <PrivateRoute exact path="/coins">
              <Coins />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/gainers"
          element={
            <PrivateRoute exact path="/gainers">
              <Gainers />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/losers"
          element={
            <PrivateRoute exact path="/losers">
              <Losers />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/watchlist"
          element={
            <PrivateRoute exact path="/watchlist">
              <Watchlist />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/news"
          element={
            <PrivateRoute exact path="/news">
              <News />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/trade/:coin"
          element={
            <PrivateRoute exact path="/trade/:coin">
              <MakeTrade />
            </PrivateRoute>
          }
        />
        <Route
          path="/404"
          element={
            <PrivateRoute exact path="/404">
              <NotFound />
            </PrivateRoute>
          }
        />
        {/* <Navigate path="*" to="/" /> */}
      </Routes>
    </>
  );
};

export default Router;
