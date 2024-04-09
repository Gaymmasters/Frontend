import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return(
        <div>
            <h1>ResetPasswordPage</h1>
            <ul>
                <li>
                    <Link to="/">Sing up</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </div>
    );
}

export default ResetPassword;