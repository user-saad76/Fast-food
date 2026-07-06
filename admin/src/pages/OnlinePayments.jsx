import { useOnlineOrder } from "../contexts/OnlineOrderProvider";
import { useFetch } from "../hooks/useFetch";
import "./OnlinePayments.css";

function OnlinePayment() {

    // const { data,loading,error}  = useFetch('http://localhost:7000/orders')
    // console.log("payments",data)

     const {
           orders,
          loading,
          error,
           removeOrder,
           updateOrder
        } = useOnlineOrder();
        console.log(" Online payments",orders)

     const payments = orders || [];


   const calculateTotal = (items = []) => {
  return items.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );
};



//   const handleDelete = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:7000/delete/order/${id}`, {
//       method: "DELETE",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to delete order");
//     }

//     // UI update (remove deleted item locally)
//     const updated = payments.filter((p) => p._id !== id);
   
//     window.location.reload(); // simple solution
//   } catch (error) {
//     console.log("Delete error:", error.message);
//   }
// };

    return (
    <div className="payment-page">
      <h2 className="page-title">Online Payments</h2>

      <div className="payment-grid">
        {payments.map((payment) => (
          <div
            className="payment-card"
            key={payment._id}
          >
            {/* Header */}
            <div className="card-header">
              <h3>{payment.customerName}</h3>

              <span
                className={`status ${payment.paymentStatus?.toLowerCase()}`}
              >
                {payment.paymentStatus}
              </span>
            </div>

            {/* Customer Info */}
            <p className="meta">
              Email: {payment.customerEmail}
            </p>

            <p className="meta">
              Country: {payment.country}
            </p>

            <p className="meta">
              Order Status: {payment.orderStatus}
            </p>

            <p className="meta">
              Date:{" "}
              {new Date(
                payment.createdAt
              ).toLocaleDateString()}
            </p>

            {/* Stripe Payment ID */}
            <p className="stripe-id">
              Stripe ID:{" "}
              <span>
                {payment.stripePaymentIntentId}
              </span>
            </p>

            {/* Items */}
            <div className="items">
              <div className="item-row title">
                <span>Item</span>
                <span>Qty</span>
                <span>Price</span>
              </div>

              {payment.items.map((item) => (
                <div
                  className="item-row"
                  key={item._id}
                >
                  <span>{item.name}</span>
                  <span>{item.quantity}</span>
                  <span>
                    ${item.totalPrice}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="total">
              Subtotal:{" "}
              <strong>
                ${payment.subtotal}
              </strong>
            </div>

            <div className="total">
              Total:{" "}
              <strong>
                ${calculateTotal(
                  payment.items
                )}
              </strong>
            </div>

            {/* Actions */}
            <div className="actions">
              <button className="btn update" onClick={() => updateOrder(payment._id)}>
                Update
              </button>

              <button className="btn delete" onClick={() => removeOrder(payment._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default OnlinePayment;