import React from "react";
import { Link } from "react-router-dom";
import "../styles/LoginRegister.css";

const Register = () => {
    return(
    <div className="Main">
        <div className="Container">
            <label className="Label">Register</label>
            <input type="text" className="TextBox" placeholder="&#xf0e0; Email"></input>
            <input type="password" className="TextBox" placeholder="&#xf023; Password"></input>
            <input type="password" className="TextBox" placeholder="&#xf023; Repeat password"></input>
            <button className="Button">Register</button>
            <Link to="/" className="LinkText">Already registered?</Link>
        </div>
    </div>
    )
}

export default Register;