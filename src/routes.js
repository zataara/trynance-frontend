import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

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
          }
        />
        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <Helmet>
                <title>Trynance - Login</title>
              </Helmet>
              <Login login={login} />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <PublicRoute>
              <Helmet>
                <title>Trynance - Register</title>
              </Helmet>
              <Register register={register} />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/app"
          element={
            <PrivateRoute exact path="/app" logout={logout}>
              <Helmet>
                <title>Trynance - Dashboard</title>
              </Helmet>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/assets"
          element={
            <PrivateRoute exact path="/assets" logout={logout}>
              <Helmet>
                <title>Trynance - My Assets</title>
              </Helmet>
              <Assets />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/trades"
          element={
            <PrivateRoute exact path="/trades" logout={logout}>
              <Helmet>
                <title>Trynance - My Trades</title>
              </Helmet>
              <Trades />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/coins"
          element={
            <PrivateRoute exact path="/coins" logout={logout}>
              <Helmet>
                <title>Trynance - Coins</title>
              </Helmet>
              <Coins />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/gainers"
          element={
            <PrivateRoute exact path="/gainers" logout={logout}>
              <Helmet>
                <title>Trynance - Gainers</title>
              </Helmet>
              <Gainers />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/losers"
          element={
            <PrivateRoute exact path="/losers" logout={logout}>
              <Helmet>
                <title>Trynance - Losers</title>
              </Helmet>
              <Losers />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/watchlist"
          element={
            <PrivateRoute exact path="/watchlist" logout={logout}>
              <Helmet>
                <title>Trynance - My Watchlist</title>
              </Helmet>
              <Watchlist />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/news"
          element={
            <PrivateRoute exact path="/news" logout={logout}>
              <Helmet>
                <title>Trynance - News</title>
              </Helmet>
              <News />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute exact path="/profile" logout={logout}>
              <Helmet>
                <title>Trynance - My Profile</title>
              </Helmet>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/trade/:coin"
          element={
            <PrivateRoute exact path="/trade/:coin" logout={logout}>
              <Helmet>
                <title>Trynance - Trade</title>
              </Helmet>
              <MakeTrade />
            </PrivateRoute>
          }
        />
        <Route
          path="/404"
          element={
            <PrivateRoute path="/404" logout={logout}>
              <Helmet>
                <title>Trynance - 404 Not Found</title>
              </Helmet>
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
