import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './component/LoginRegPages/LoginPage';
import RegPage from './component/LoginRegPages/RegPage';
import MenuPage from './component/menu/MenuPage';

const App = () => {
  return(
      <div className='container'>
        <Routes>
          <Route path="/login" element={ <LoginPage/>} />
          <Route path="/reg" element={ <RegPage/> } /> 
          <Route path='/menu' element = {<MenuPage/>} />
        </Routes>
      </div>
  );
}

export default App;