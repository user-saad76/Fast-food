import React from "react";
import "./Profile.css";
import { useAuth } from "../contexts/AuthProvider";


function Profile() {

   const {user,error,loading} = useAuth();
  

  // Dummy User Data
  // const user = {
  //   name: "Saad Khan",
  //   email: "saad@gmail.com",
  //   phone: "03001234567",
  //   address: "Rawalpindi, Pakistan",
  //   createdAt: "23 May 2026",
  //   orders: [
  //     {
  //       productName: "Burger",
  //       quantity: 2,
  //       price: 1200,
  //       status: "delivered",
  //       image:
  //         "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  //     },
  //     {
  //       productName: "Pizza",
  //       quantity: 1,
  //       price: 1800,
  //       status: "processing",
  //       image:
  //         "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  //     },
  //     {
  //       productName: "Fries",
  //       quantity: 3,
  //       price: 900,
  //       status: "pending",
  //       image:
  //         "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
  //     },
  //   ],
  // };

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

        {/* <div className="orders-wrapper">
          {cartState?.map((order, index) => (
            <div className="order-box" key={index}>
              <img
                src={order?.image?.secure_url}
                alt={order.title}
                className="order-image"
              />

              <h3>{order.title}</h3>

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
        </div> */}
      </div>
    </div>
  );
}

export default Profile;