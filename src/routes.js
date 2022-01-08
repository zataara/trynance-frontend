import { useRoutes, Navigate } from 'react-router-dom';

/*****  Layouts  *****/
import TradeLayout from './layouts/TradeLayout';
import UnAuthLayout from './layouts/UnAuthLayout';

/***** Pages *****/
import Trade from './pages/Trade';
import User from './pages/User';
import Trades from './pages/Trades';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';


const Router = () => {
  return useRoutes([
    {
      path: '/home',
      element: <TradeLayout />,
      children: [
        { element: <Navigate to='/home/trade' replace />},
        { path: 'trade', element: <Trade /> },
        { path: 'user', element: <User />},
        { path: 'trades', element: <Trades />},

      ]
    }, 
    {
      path: '/',
      element: <UnAuthLayout />,
      children: [
        { path: 'login', element: <Login />},
        { path: 'register', element: <Register />},
        { path: '404', element: <NotFound />},
        { path: '/', element: <Navigate to='/home' />},
        {path: '*', element: <Navigate to='/404' />}
      ]
    },
    { path: '*', element: <Navigate to="/404" replace />}
  ])


}



export default Router;