import React from "react";
import "./Dashboard.css";
import { useAuth } from "../contexts/AuthProvider";

function Dashboard() {
  const { admin, loading, error } = useAuth();

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  if (!admin) return <h2>No Admin Found</h2>;

  return (
    <div className="dashboard-container">

  <div className="profile-header">
    <div className="profile-image-box">
      <img
        src={admin?.image?.secure_url}
        alt={admin?.name}
        className="profile-image"
      />
    </div>

    <div className="profile-content">
      <h1>{admin?.name}</h1>
      <span className="admin-badge">{admin?.post}</span>

      <p className="joined-date">
        Joined: {new Date(admin?.createdAt).toLocaleDateString()}
      </p>
    </div>

    <button className="edit-profile-btn">
      Edit Profile
    </button>
  </div>

  <div className="info-grid">

    <div className="info-card">
      <h3>Email</h3>
      <p>{admin?.email}</p>
    </div>

    <div className="info-card">
      <h3>Phone</h3>
      <p>{admin?.phone}</p>
    </div>

    <div className="info-card">
      <h3>CNIC</h3>
      <p>{admin?.cnic}</p>
    </div>

    <div className="info-card">
      <h3>Address</h3>
      <p>{admin?.address}</p>
    </div>

  </div>

  <div className="about-card">
    <h2>Administrator Information</h2>

    <p>
      Responsible for managing the platform, monitoring users,
      maintaining products and ensuring smooth system operations.
    </p>
  </div>

</div>
  );
}

export default Dashboard;