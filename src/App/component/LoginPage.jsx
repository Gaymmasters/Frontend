import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../..';
import { getAll } from '../../API/test';

const LoginPage = () => {
    let regButton
    const [id,setId] = useState(store.getState().id)
    const Test = useEffect(() => {
        regButton = document.getElementById("reg")
    }, [] 
    )
    async function addId(){
        const res = await getAll();
        const rnd = +((id+7)*5*14*339 % 99)
        console.log(rnd)
        store.dispatch({type: "reg", userId: res[rnd].userId})
        setId(res[rnd].userId)
        console.log(res[rnd])
        console.log(store.getState().id)
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