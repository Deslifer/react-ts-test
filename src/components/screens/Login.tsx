import React from "react";
import "../styles/Login.css";

const Login = () => {
    return(
    <div className="Main">
        <div className="Container">
            <input type="text" className="TextBox" placeholder="&#xf0e0; Email"></input>
            <input type="password" className="TextBox" placeholder="&#xf023; Password"></input>
            <button className="Button">Sign In</button>
        </div>
    </div>
    )
}

export default Login;