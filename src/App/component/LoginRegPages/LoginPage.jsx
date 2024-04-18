import React, { useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { store } from '../../..';
import RegPage from './RegPage';
import './loginReg.css'
import MenuPage from '../menu/MenuPage';
import logo from "../img/logo.png";
import UserReg from '../../../API/RegUser';
import * as valid from "email-validator";


const LoginPage = () => {
    const [data, setData] = useState({});
        async function logIn(){
        if (valid.validate(data.email)){
            if (data.password.length >= 5 &&  data.password.length <=20){    
                const res = await UserReg.LogIn(data)
                if (!res.result){
                    alert('Error:' + res.message);
                }
                else{
                    store.dispatch({type: "reg", ...res});
                }
                if (data.isLogin){
                    Navigate("/menu");
                }
            }
            else alert("Invalid password");    
        }
        else alert("Invalid e-mail");
        } 

    return(
        <div className='container'>
            <img src= {logo} alt = "logo"></img>
            <h1>Log in</h1>
            <div className='group'>
                <div className='gp' id='gp-in'>  
                    <label>e-mail</label>
                    <input 
                    type='email'
                    className='inp-group'
                    onChange={e => setData({...data,email: e.target.value})}/>
                    <label>Password</label>
                    <input 
                    type='password'
                    className='inp-group' 
                    onChange={e => setData({...data,password: e.target.value})}/>
                </div>
                <div className='bloсk-btn'>
                    
                <button  className='confirm' style={{marginTop: 69}} onClick={logIn}> Confirm </button>
                </div>
                <div className='bloсk-btn'>
                    <Link to="/reg">
                        <button>Sing up</button>
                    </Link>
                </div>
                <Routes>
                    <Route path='/reg' element={<RegPage/>}/>
                    <Route path='/menu' element={<MenuPage/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default LoginPage;