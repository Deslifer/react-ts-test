import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "../styles/LoginRegister.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    

    const navigate = useNavigate();

    const handleRegister = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(()=>{navigate('/contacts');})
          .catch(error => alert(error.message));
      };
      
    return(
    <div className="Main">
        <div className="Container">
            <label className="Label">Register</label>
            <input type="text" className="TextBox" placeholder="&#xf0e0; Email" 
            onChange={e => {
                    setEmail(e.target.value);
                }}>

                </input>
            <input type="password" className="TextBox" placeholder="&#xf023; Password"
            onChange={e => {
                setPassword(e.target.value);
            }}
            ></input>
            <button className="Button" onClick={handleRegister}>Register</button>
            <Link to="/" className="LinkText">Already registered?</Link>
        </div>
    </div>
    )
}

export default Register;