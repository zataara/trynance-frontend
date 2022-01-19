import { Routes, Route } from "react-router-dom";

/*****  Layouts  *****/
import PrivateRoute from "./layouts/PrivateRoute";
import PublicRoute from "./auth/PublicRoute";

/***** Auth *****/
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./auth/Home";

/***** Pages *****/
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Trades from "./pages/Trades";
import Coins from "./pages/Coins";
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
      <Route 
          exact 
          path="/" 
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          } />
        <Route 
          exact 
          path="/login" 
          element={
            <PublicRoute>
              <Login login={login} />
            </PublicRoute>
          } />
        <Route
          exact
          path="/register"
          element={
            <PublicRoute>
              <Register register={register} />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/app"
          element={
            <PrivateRoute exact path="/app" logout={logout}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/assets"
          element={
            <PrivateRoute exact path="/assets" logout={logout}>
              <Assets />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/trades"
          element={
            <PrivateRoute exact path="/trades" logout={logout}>
              <Trades />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/coins"
          element={
            <PrivateRoute exact path="/coins" logout={logout}>
              <Coins />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/gainers"
          element={
            <PrivateRoute exact path="/gainers" logout={logout}>
              <Gainers />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/losers"
          element={
            <PrivateRoute exact path="/losers" logout={logout}>
              <Losers />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/watchlist"
          element={
            <PrivateRoute exact path="/watchlist" logout={logout}>
              <Watchlist />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/news"
          element={
            <PrivateRoute exact path="/news" logout={logout}>
              <News />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute exact path="/profile" logout={logout}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/trade/:coin"
          element={
            <PrivateRoute exact path="/trade/:coin" logout={logout}>
              <MakeTrade />
            </PrivateRoute>
          }
        />
        <Route
          path="/404"
          element={
            <PrivateRoute exact path="/404" logout={logout}>
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
