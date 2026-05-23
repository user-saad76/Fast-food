
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
     const {admin,error,loading} =  useAuth();

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
                  <Link to="/offers-page-update">
                <li>Update Offers</li>
                 </Link>
                 <Link to="/banner-page">
                <li> Create FirstBanner</li>
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
           { admin?.name ? (<>
                {admin?.name} ▾
              {accountDropdown && (
              <ul className="dropdown-menu">
                 <li>
               <Link to="/profile">Profile</Link>
                </li>
                 <li>
               <Link to="/sign-up">Sign Up</Link>
                </li>
              </ul>
            )}
           </>):(<>
              Account ▾
            {accountDropdown && (
              <ul className="dropdown-menu">
                 <li>
               <Link to="/logout">Logout</Link>
                </li>
                 <li>
               <Link to="/sign-up">Sign Up</Link>
                </li>
              </ul>
            )}
           </>)}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;