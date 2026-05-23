import React from "react";
import "./Profile.css";

function Profile() {
  // Dummy User Data
  const user = {
    name: "Saad Khan",
    email: "saad@gmail.com",
    phone: "03001234567",
    address: "Rawalpindi, Pakistan",
    createdAt: "23 May 2026",
    orders: [
      {
        productName: "Burger",
        quantity: 2,
        price: 1200,
        status: "delivered",
      },
      {
        productName: "Pizza",
        quantity: 1,
        price: 1800,
        status: "processing",
      },
      {
        productName: "Fries",
        quantity: 3,
        price: 900,
        status: "pending",
      },
    ],
  };

  return (
    <div className="profile-container">
      {/* User Info */}
      <div className="profile-card">
        <h2 className="profile-title">My Profile</h2>

        <div className="profile-info">
          <div className="info-box">
            <span>Name</span>
            <p>{user.name}</p>
          </div>

          <div className="info-box">
            <span>Email</span>
            <p>{user.email}</p>
          </div>

          <div className="info-box">
            <span>Phone</span>
            <p>{user.phone}</p>
          </div>

          <div className="info-box">
            <span>Address</span>
            <p>{user.address}</p>
          </div>

          <div className="info-box">
            <span>Joined</span>
            <p>{user.createdAt}</p>
          </div>
        </div>
      </div>

      {/* Orders */}
      <div className="orders-card">
        <h2 className="orders-title">My Orders</h2>

        <div className="orders-wrapper">
          {user.orders.map((order, index) => (
            <div className="order-box" key={index}>
              <h3>{order.productName}</h3>

              <div className="order-details">
                <p>
                  Quantity: <span>{order.quantity}</span>
                </p>

                <p>
                  Price: <span>Rs {order.price}</span>
                </p>

                <p>
                  Status:
                  <span className={`status ${order.status}`}>
                    {order.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;