import React, { useContext } from 'react';
import './Login.css';


const Login = () => {
    return (
        <div className="form-container">
            <div className="form-box">
                <h1 className="title">Login</h1>
                <form>
                    <div className="form-row">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="" id="email" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="" id="password" />
                    </div>
                    <button className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;