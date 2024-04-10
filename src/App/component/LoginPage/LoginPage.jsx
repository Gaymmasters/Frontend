import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../..';
import { getAll } from '../../../API/test';

const LoginPage = () => {
    async function reg(){
        
    }
    
    return(
        <div>
            <h1>LoginPage</h1>
            <ul>
                <li>
                    <Link to="/">Sing up</Link>
                </li>
                <li>
                    <Link to="/reset">Reset Password</Link>
                </li>
            </ul>
            <button onClick={addId} id='reg'>Registration {id}</button>
        </div>
    );
}

export default LoginPage;