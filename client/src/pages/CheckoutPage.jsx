

import "./CheckoutPage.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CartSummary from "./CartSummary";
import { useAuth } from "../contexts/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../contexts/CartProvider";


const stripePromise = loadStripe(
     import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);


const checkoutSchema = z.object({
  name: z.string().min(3, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(11, "Phone number is required"),
  address1: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(3, "Zip Code is required"),
  paymentMethod: z.string().min(1, "Select payment method"),
});

function CheckoutPage() {
     const {user} = useAuth();
      const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);
       const [data, setData] = useState(null);
       const {cartState} = useCart()
   
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "",
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    
    },
  });

  const paymentMethod = watch("paymentMethod");


  const onSubmit = async(data) => {
     try {
      const res = await fetch(`http://localhost:7000/users/update-in-checkout/${user?._id}`, {
        method: "PUT",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
   
      const result = await res.json();

       if (!res.ok) {
           toast.error(result.message);
           throw new Error(result.message);
        }

      setData(result);

      if (result.success) {
      toast.success(result.message);
      } 
      return result;

    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }

    
  };

   const handleCheckout = async () => {

      const items = cartState.map((item)=>{
       return {
            title:item.title,
           price:item.price,
           quantity:item.quantity
       }

    })
    console.log( "items in checkout",items)

     try {
      const response = await fetch(
         "http://localhost:7000/checkout/sessions",
         {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
             items
           }),
         }
       );

       const data = await response.json();

       window.location.href = data.url;

       if (result.error) {
         console.error(result.error.message);
       }
     } catch (error) {
       console.error(error);
     }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">

        <div className="billing-section">
          <h2>Billing Details</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Name</label>
              <input
              readOnly
                type="text"
                placeholder="Enter Name"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                readOnly
                type="email"
                placeholder="Enter Email"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                readOnly
                type="text"
                placeholder="03XXXXXXXXX"
                {...register("phone")}
              />
              <span>{errors.phone?.message}</span>
            </div>

            <div className="form-group">
              <label>Address location for order</label>
              <textarea
                placeholder="Enter Address"
                {...register("address1")}
              />
              <span>{errors.address1?.message}</span>
            </div>

            <div className="row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  {...register("city")}
                />
                <span>{errors.city?.message}</span>
              </div>

              <div className="form-group">
                <label>Zip Code</label>
                <input
                  type="text"
                  placeholder="Zip Code"
                  {...register("zipCode")}
                />
                <span>{errors.zipCode?.message}</span>
              </div>
            </div>

            <div className="payment-section">
              <h3>Payment Method</h3>

              <label
                className={`payment-card ${
                  paymentMethod === "online" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  value="online"
                  {...register("paymentMethod")}
                />
                Online Payment
              </label>

              <label
                className={`payment-card ${
                  paymentMethod === "cod" ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  value="cod"
                  {...register("paymentMethod")}
                />
                Cash On Delivery
              </label>

              <span>{errors.paymentMethod?.message}</span>
            </div>

            <button className="place-order-btn">
                Cash on Delivery
            </button>
              <button  type="button" className="place-order-btn" onClick={handleCheckout}>
                Online Payment through Stripe
            </button>
          </form>
        </div>
        <CartSummary/>
      </div>
    </div>
  );
}

export default CheckoutPage;