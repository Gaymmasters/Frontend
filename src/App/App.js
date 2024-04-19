import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './component/LoginRegPages/LoginPage';
import RegPage from './component/LoginRegPages/RegPage';
import MenuPage from './component/menu/MenuPage';
import PrivateRoute from '../features/privateRoute';

const App = () => {
  return(
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <LoginPage/>} />
            <Route path="/reg" element={ <RegPage/> } /> 
            <Route path = "/" element={<PrivateRoute way={"/login"}/>}>
              <Route path='/' element={<MenuPage/>} />
            </Route>
            {/* <Route path = "/rules" element={<PrivateRoute way={"/login"}/>}>
              <Route path='/rules' element={<RulesPage/>} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;