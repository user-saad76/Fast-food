
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <div className="logo">Admin Panel</div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>Dashboard</li>
          <li>Orders</li>
           

          {/* Products Dropdown */}
          <li
            className="dropdown"
            onClick={() => {
              setProductDropdown(!productDropdown);
              setAccountDropdown(false);
            }}
          >
            Products ▾
            {productDropdown && (
              <ul className="dropdown-menu">
                <Link to="/offers-page">
                <li>Create Offers</li>
                 </Link>
                 <Link to="/offers-page-delete">
                <li>Delete Offers</li>
                 </Link>
                  <Link to="/offers-page-delete">
                <li>Upadate Offers</li>
                 </Link>
                <li>Manage Products</li>
                <li>Categories</li>
              </ul>
            )}
          </li>

          <li>Users</li>
          <li>Reports</li>

          {/* Account Dropdown */}
          <li
            className="dropdown"
            onClick={() => {
              setAccountDropdown(!accountDropdown);
              setProductDropdown(false);
            }}
          >
            Account ▾
            {accountDropdown && (
              <ul className="dropdown-menu">
                <li>Logout</li>
                <li>Sign Up</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;