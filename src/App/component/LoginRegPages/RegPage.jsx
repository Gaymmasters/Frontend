import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./loginReg.css";
import LoginPage from './LoginPage';
import MenuPage from '../menu/MenuPage';

const RegPage = () => {
    return(
        // const [msg, setMsg] = useState('');
        //     async function reg(){
        //         const res = await RegUser.Registration({email: "teg4g4@gmail.com", login: "Te3234", password: "123455"})
        //         store.dispatch({type: "reg", ...res});
        //         if (!res.result){
        //             setMsg(res.message)} error
        //         else{
        //             setMsg('')
        //         console.log(res.message) save
        //         }
        //     } 
        <div className='container'>
            <h1>Sing up</h1>
            <div className='group'>
                <div className='gp' id='gp-in'>  
                    <label>e-mail</label>
                    <input 
                    type='email'
                    className='inp-group' />
                    <label>Login</label>
                    <input
                    type='login'
                    className='inp-group' />
                    <label>Password</label>
                    <input 
                    type='password'
                    className='inp-group' />
                </div>
                <div className='gp' id='gp-btn'>
                <Link to = "/menu">
                    <button /*onClick={reg} id='reg'*/> Confirm </button>
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