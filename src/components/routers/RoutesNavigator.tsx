import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Contacts from '../screens/Contacts';
import Login from '../screens/Login';
import Register from '../screens/Register';

function RoutesNavigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default RoutesNavigator;
