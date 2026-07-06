
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import "./CashOnDeliveries.css";
import { useState } from "react";
import { useOrder } from "../contexts/OrderProvider"

function CashOnDeliveries() {

    //  const { data:orders,loading,error}  = useFetch('http://localhost:7000/cash-orders')
    //  console.log("Cash orders",orders)

     const {
       orders,
      loading,
      error,
       removeOrder,
       updateOrder
    } = useOrder();

     console.log("orders",orders)
    
    
    //  const [orderList, setOrderList] = useState([]);
    //  useEffect(() => {
    //  if (orders?.orders) {
    //    setOrderList(orders.orders);
    //    }
    //    }, [orders]);
 

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

//   const OrderDelete = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:7000/delete/cash-order/${id}`, {
//       method: "DELETE",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to delete order");
//     }

//     setOrderList((prev) =>
//         prev.filter((order) => order._id !== _id)
//       );// simple solution
//   } catch (error) {
//     console.log("Delete error:", error.message);
//   }
// }; 

  return (
    <div className="cod-page">
      <h2 className="cod-title">Cash On Delivery Orders</h2>

      <div className="cod-grid">
        {orders.map((order) => (
  <div className="cod-card" key={order._id}>

    <div className="cod-header">
      <h3>{order.name}</h3>

      <span
        className={`cod-status ${order.orderStatus?.toLowerCase()}`}
      >
        {order.orderStatus}
      </span>
    </div>

    <div className="cod-info">
      <p><strong>Phone:</strong> {order.phone}</p>

      <p>
        <strong>Address:</strong>
        {" "}
        {order.address1}, {order.city}
      </p>

      <p>
        <strong>Date:</strong>
        {" "}
        {new Date(order.createdAt).toLocaleDateString()}
      </p>
    </div>

    <div className="cod-items">
      <div className="cod-row title">
        <span>Item</span>
        <span>Qty</span>
        <span>Price</span>
      </div>

      {order.items?.map((item, index) => (
        <div className="cod-row" key={index}>
          <span>{item.title}</span>
          <span>{item.quantity}</span>
          <span>{item.price * item.quantity} Rs</span>
        </div>
      ))}
    </div>

    <div className="cod-total">
      Total:
      <strong>
        {" "}
        {order.totalAmount} Rs
      </strong>
    </div>

    <div className="cod-actions">
      <button className="btn update"  onClick = {() => updateOrder(order._id)}>Update</button>
      <button className="btn delete" onClick = {() => removeOrder(order._id)}>Delete</button>
    </div>

  </div>
      ))}
      </div>
    </div>
  );
}

export default CashOnDeliveries;