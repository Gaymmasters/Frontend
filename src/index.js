import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './App/component/LoginRegPages/LoginPage';
import { createStore } from './features/createStore';
import { rootReducer } from './features/rootReducer';
import RegPage from './App/component/LoginRegPages/RegPage';
import MenuPage from './App/component/menu/MenuPage';

const initialState = {  
  login: '',
  password: '',
  email:"",
  skin: 0,
  refreshToken:"",
  accessToken:"",
  game_data: {},
  id: 0,
  isLogin: false,
}

export const store = createStore(rootReducer,initialState)

window.store = store

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/reg",
    element: <RegPage/>
  },
  {
    path: "/menu",
    element: <MenuPage/>
  },
  // {
  //   path: "/menu/findgame",
  //   element: </>,
  // },
]
);

root.render(
  <>
    <React.StrictMode>
      
        <RouterProvider router={router}/>
      
    </React.StrictMode>

  </>
  
);


