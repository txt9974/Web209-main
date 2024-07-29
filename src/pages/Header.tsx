import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="text">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
