
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  const { admin, error, loading, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">Admin Panel</div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/dashboard">Dashboard</Link>

          {/* Orders Dropdown */}
          <li
            className="dropdown"
            onClick={() => {
              setOrderDropdown(!orderDropdown);
              setProductDropdown(false);
              setAccountDropdown(false);
            }}
          >
            Orders ▾

            {orderDropdown && (
              <ul className="dropdown-menu">
                <Link to="/online-payments">
                  <li>Online payment Orders</li>
                </Link>

                <Link to="/cash-on-deliveries">
                  <li>Cash on Delivery Orders</li>
                </Link>

               
              </ul>
            )}
          </li>

          {/* Products Dropdown */}
          <li
            className="dropdown"
            onClick={() => {
              setProductDropdown(!productDropdown);
              setOrderDropdown(false);
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

                <Link to="/offers-page-update">
                  <li>Update Offers</li>
                </Link>

                <Link to="/banner-page">
                  <li>Create FirstBanner</li>
                </Link>

                <Link to="/banner-page-update">
                  <li>Upadate FirstBanner</li>
                </Link>

                <Link to="/banner-page-delete">
                  <li>Delete FirstBanner</li>
                </Link>

                <Link to="/service-page">
                  <li>Create Service</li>
                </Link>
                 <Link to="/create-pizza">
                  <li>Create Pizza</li>
                </Link>
                 <Link to="/create-burger">
                  <li>Create Burger</li>
                </Link>
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
              setOrderDropdown(false);
            }}
          >
            {admin?.name ? (
              <>
                {admin?.name} ▾

                {accountDropdown && (
                  <div className="dropdown-menu">
                    <button onClick={logout}>logout</button>
                  </div>
                )}
              </>
            ) : (
              <>
                Account
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;