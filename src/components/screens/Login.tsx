import React from "react";
import "../styles/LoginRegister.css";
import {Link} from 'react-router-dom';

const Login = () => {
    return(
    <div className="Main">
        <div className="Container">
            <label className="Label">Login</label>
            <input type="text" className="TextBox" placeholder="&#xf0e0; Email"></input>
            <input type="password" className="TextBox" placeholder="&#xf023; Password"></input>
            <button className="Button">Login</button>
            <Link to="/register" className="LinkText">Register now</Link>
        </div>
    </div>
    )
}

export default Login;