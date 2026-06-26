import { Link } from "react-router-dom";
import "./OrderCancel.css";

function OrderCancel() {
  return (
    <div className="ocancel-container">
      <div className="ocancel-card">
        <div className="ocancel-icon">
          ✕
        </div>

        <h1 className="ocancel-title">
          Order Cancelled
        </h1>

        <p className="ocancel-message">
          Your order/payment was cancelled. No charges have been made.
          You can review your cart and try again whenever you're ready.
        </p>

        <div className="ocancel-actions">
          <Link to="/cart" className="ocancel-btn ocancel-btn-primary">
            Back to Cart
          </Link>

          <Link to="/products" className="ocancel-btn ocancel-btn-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderCancel;