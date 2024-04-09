import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './App/component/LoginPage';
import ResetPassword from './App/component/ResetPassword';
import { createStore } from './features/createStore';
import { rootReducer } from './features/rootReducer';

const initialState = {  
  login: '',
  password: '',
  skin: 0,
  token: ["",""],
  game_data: {},
  id: 0
}

export const store = createStore(rootReducer,initialState)

window.store = store

const root = ReactDOM.createRoot(
  document.getElementById('root'));

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
    path: "/reset",
    element: <ResetPassword/>
  }
]
);

root.render(
  <>
    <React.StrictMode>
      
        <RouterProvider router={router}/>
      
    </React.StrictMode>,

  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
