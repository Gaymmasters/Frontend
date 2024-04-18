import React, { useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import "./loginReg.css";
import LoginPage from './LoginPage';
import MenuPage from '../menu/MenuPage';
import logo from "../img/logo.png";
import * as valid from "email-validator";
import UserReg from '../../../API/RegUser';
import { store } from '../../..';

const RegPage = () => {
    const [data, setData] = useState({});
    async function reg(){
        if (valid.validate(data.email)){
            if (data.password.lenght >= 5 && data.password.lenght <= 20){
                const res = await UserReg.Reg(data)
                if (!res.result){
                    alert("Error:" + res.massage);
                }
                else{
                    store.dispatch({type: "reg", ...res});
                }
                if (data.isLogin){
                    Navigate("/menu");
                }
            }
            else alert("invalid password");
        }
        else alert("Invalid e-mail");
    }

    return(
        <div className='container'>
            <img src= {logo} alt = "logo"></img>
            <h1>Sing up</h1>
            <div className='group'>
                <div className='gp' id='gp-in'>  
                    <label>e-mail</label>
                    <input 
                    type='email'
                    className='inp-group'
                    onChange={e => setData({...data,email: e.target.value})} />
                    <label>Login</label>
                    <input
                    type='login'
                    className='inp-group' 
                    onChange={e => setData({...data,login: e.target.value})} />
                    <label>Password</label>
                    <input 
                    type='password'
                    className='inp-group' 
                    onChange={e => setData({...data,password: e.target.value})} />
                </div>
                <div className='gp' id='gp-btn'>
                <Link to = "/menu">
                    <button className='confirm'onClick={reg} id='reg'> Confirm </button>
                </Link>
                <Link to="/login">
                    <button>Log in</button>
                </Link>
                <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/menu' element={<MenuPage/>}/>
                </Routes>
                </div>
            </div>
        </div>
    );
}

export default RegPage;