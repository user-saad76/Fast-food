import "./ApplicationPanel.css";
import { Link } from "react-router";

function ApplicationPanel() {
  return (
    <div className="app-panel">
      <div className="overlay"></div>

      <div className="panel-container">
        <h1 className="title">🍔 Fast Food Admin Panel</h1>

        <p className="welcome-text">
          Welcome to Admin Panel of Fast Food Application.
        </p>

        <p className="description">
          First you have to sign in to verify yourself as an administrator.
          Manage your products, orders, customers and analytics easily.
        </p>

        <div className="btn-group">
          <Link to="/sign-in" className="btn sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default ApplicationPanel;