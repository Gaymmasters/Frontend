import { Link, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../LoginRegPages/LoginPage';
import UserReg from '../../../API/RegUser';
import { store } from '../../..';

const MenuPage = () => {
    async function logOut(){
        const res = await UserReg.LogOut({})
        if (!res.result){
            alert('Error:' + res.message);
        }
        else{
            store.dispatch({type: "logOut"});
            Navigate("/login");
        }
    }
    return(
        <div className='main'>
            <div className='top'>
                <button className='logout' onClick={logOut}>Log out</button>
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
                    <Route path='/login' Component={<LoginPage/>} />

                </Routes>
            </div>
            <div className='bottom'>
                <button id='authors'>Authors</button>
            </div>
        </div>
        
    );
}


export default MenuPage;