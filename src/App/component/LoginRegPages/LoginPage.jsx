import React, { useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { store } from '../../..';
import { getAll } from '../../../API/test';
import RegPage from './RegPage';
import './loginReg.css'
import MenuPage from '../menu/MenuPage';
import logo from "../img/logo.png";


const LoginPage = () => {
    // const [{email, password,isLogin}] = useState('');
    //     async function reg(){
    //         const res = await RegUser.reg({email: "teg4g4@gmail.com", password: "123455"})
    //         store.dispatch({type: "reg", ...res});
    //         if (!res.result){
    //             console.log('error');
    //         }
    //         else{
    //             Navigate('/menu');
    //             useState.setAttribute(email,password,isLogin == true);
    //         }
    //     } 
    return(
        <div className='container'>
            <img src= {logo} alt = "logo"></img>
            <h1>Log in</h1>
            <div className='group'>
                <div className='gp' id='gp-in'>  
                    <label>e-mail</label>
                    <input 
                    type='email'
                    className='inp-group' />
                    <label>Password</label>
                    <input 
                    type='password'
                    className='inp-group' />
                </div>
                <div className='bloсk-btn'>
                    <Link to = "/menu">
                        <button  className='confirm' style={{marginTop: 69}} /*onClick={reg}*/> Confirm </button>
                    </Link>
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