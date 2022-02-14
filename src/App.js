import { React, useState, useEffect } from "react";
import Router from "./routes";
import { Helmet } from "react-helmet";
import useLocalStorage from "./hooks/useLocalStorage";
import UserContext from "./context/UserContext";
import backendApi from "./api/backend";
import Loading from "./components/Loading";
import jwt_decode from "jwt-decode";
export const TOKEN_ID = "trynance-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_ID);

  console.debug(
    "App",
    "isLoading=",
    infoLoaded,
    "currentUser=",
    currentUser,
    "token=",
    token
  );

  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt_decode(token);
            backendApi.token = token;
            // let currentUser = await backendApi.getCurrentUser(username);

            setCurrentUser(username);
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }

      // set infoLoaded to false while async getCurrentUser runs; once the
      // data is fetched (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  async function register(data) {
    try {
      let token = await backendApi.register(data);
      setToken(token);
      console.log(token);
      return { success: true };
    } catch (e) {
      console.error("Signup failed", e);
      return { success: false, e };
    }
  }

  async function login(data) {
    try {
      let token = await backendApi.login(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("login failed", e);
      return { success: false, e };
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  if (!infoLoaded) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Trynance</title>
      </Helmet>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Router login={login} register={register} logout={logout} />
      </UserContext.Provider>
    </>
  );
}

export default App;
