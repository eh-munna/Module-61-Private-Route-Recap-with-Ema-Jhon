import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  console.log(user);

  // user log out
  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <>
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          {user ? (
            <Link>
              <button onClick={handleLogOut} className="text-white">
                Log Out
              </button>
            </Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/sign-up">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
      <div className="text-center">{user && <span>{user.email}</span>}</div>
    </>
  );
};

export default Header;
