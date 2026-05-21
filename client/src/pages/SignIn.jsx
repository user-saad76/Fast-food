import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./SignIn.css";
import usePost from "../hooks/usePost";
import {useNavigate} from "react-router-dom"

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});



function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

   const { postData, loading, error, data } = usePost('http://localhost:7000/users/signin');

  const onSubmit = async(data) => {
    console.log("Login Data:", data);
    await postData(data)
    navigate("/");
  };

  return (
    <div className="signin-page"> {/* ✅ FIX */}
      <form className="signin-card" onSubmit={handleSubmit(onSubmit)}>
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Sign in to your account</p>

        <div className="field">
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
        </div>

        <div className="field">
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          <span className="error">{errors.password?.message}</span>
        </div>

        <button className="signin-btn" type="submit"> {/* ✅ FIX */}
          Sign In
        </button>

        <p className="footer-text">
          Don't have an account? <span>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;