import React, { useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import RegPage from '../../../API/RegUser';

const MenuPage = () => {
    // const [{email,password,isLog}] = useState('');
    //     async function logOut(){
    //         const flag = true;
    //         const res = await RegUser.LogOut({email: "teg4g4@gmail.com", login: "Te3234", password: "123455"});
    //         store.dispatch({type: "reg", ...res});
    //         if (!res.result){
    //             useState.removeAttribute(email,password, isLog == false )
    //         }; 
    //         if (flag === false) {
    //             Navigate('/login')
    //         }
    //     } 
    return(
        <div className='main'>
            <div className='top'>
                <button className='logout' /*</div>onClick={logOut}*/>Log out</button>
            </div>
            <div className='container'>
                <Link to=''>
                    <button className='menu'>Find game</button>
                </Link>
                <Link to=''>
                    <button className='menu'>Create game</button>
                </Link>
                <Link to=''>
                    <button className='menu'>Rules</button>
                </Link>
                <Link to=''>
                    <button className='menu'>Settings</button>
                </Link>
                <Routes>
                    <Route path='/findgame' />

                </Routes>
            </div>
            <div className='bottom'>
                <button id='authors'>Authors</button>
            </div>
        </div>
        
    );
}


export default MenuPage;