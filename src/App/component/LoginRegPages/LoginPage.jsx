import React, { useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { store } from '../../..';
import { getAll } from '../../../API/test';
import RegPage from './RegPage';
import './loginReg.css'
import MenuPage from '../menu/MenuPage';


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
                <div className='gp' id='gp-btn'>
                <Link to = "/menu">
                    <button /*onClick={reg}*/> Confirm </button>
                </Link>
                <Link to="/reg">
                    <button>Sing up</button>
                </Link>
                <Routes>
                    <Route path='/reg' element={<RegPage/>}/>
                    <Route path='/menu' element={<MenuPage/>}/>
                </Routes>
                </div>
            </div>
        </div>
    );
}


export default LoginPage;