import { useEffect, useState } from "react";
import "./OrderSuccess.css";
import { Link } from "react-router-dom";

function OrderSuccess() {
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [called,setCalled] = useState(false);

  

  // Get Stripe Session ID from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("session_id");

    console.log("Session ID from URL:", id);

    if (id) {
      setSessionId(id);
    } else {
      setLoading(false);
    }
  }, []);

  // Confirm Order
  useEffect(() => {
    if (!sessionId || called) return;

    const confirmOrder = async () => {
      try {
        const response = await fetch(
          "http://localhost:7000/order/confirm",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              session_id: sessionId,  
           
            }),
          }
        );

        const result = await response.json();

        console.log("Order confirmation response:", result);
        setPaymentIntentId(result.order.stripePaymentIntentId);

        if (!response.ok) {
          throw new Error(result.message || "Failed to confirm order");
        }

        setOrderConfirmed(true);

        // Optional: Clear cart
        localStorage.removeItem("cart");
      } catch (error) {
        console.error("Order Confirmation Error:", error);
      } finally {
        setLoading(false);
        setCalled(true);
      }
    };

    confirmOrder();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="order-success-page">
        <div className="success-card">
          <h2>Confirming your order...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="order-success-page">
      <div className="success-card">
        <div className="success-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="success-title">
          {orderConfirmed
            ? "Order Placed Successfully!"
            : "Payment Successful!"}
        </h1>

        <p className="success-session">
          Session ID: {sessionId}
        </p>

        <p className="success-message">
          Thank you for your purchase. Your payment has been received and your
          order is now being processed. We will notify you once your order has
          been shipped.
        </p>

        <div className="order-details">
          <span className="order-label">Order Number</span>
          <h3 className="order-id">{paymentIntentId}</h3>
        </div>

        <div className="info-box">
          <p>
            A confirmation email containing your order details has been sent to
            your registered email address/phone number.
          </p>
        </div>

        <div className="button-group">
          <Link to="/" className="shop-btn">
            Continue Shopping
          </Link>

          <Link to="/profile/orders" className="orders-btn">
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;