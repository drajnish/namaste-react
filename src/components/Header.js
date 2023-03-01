import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import IMG_LOGO from '../assets/img/logo.jpg';

import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Title = () => (
  <Link to="/">
    <img className="h-28 p-2" src={IMG_LOGO} alt="logo" />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
        <span className="px-2">{user.name}</span>
        <span className="px-2">{user.email}</span>
      </div>
      {isOnline ? '' : 'Looks like you are offline.'}

      {isLoggedIn ? (
        <button className="pr-2" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="pr-2" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
