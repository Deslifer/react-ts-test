import {
    BrowserRouter as Router,
    Routes, // instead of "Switch"
    Route,
  } from "react-router-dom";
import Contacts from "../screens/Contacts";
import Login from "../screens/Login";
import Register from "../screens/Register";

const RoutesNavigator = () => {
    return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </Router>
    );
}

export default RoutesNavigator;