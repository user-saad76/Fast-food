import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./SignIn.css";
//import usePost from "../hooks/usePost";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // const { postData, loading, error, data } = usePost('http://localhost:7000/admin/signin');


  const onSubmit = async(data) => {
    console.log("Login Data:", data);
      try {
      const res = await fetch("http://localhost:7000/admin/signin", {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
      if(!result){
        alert("You are not verified admin ")
      }

      reset();
    } catch (error) {
       
      console.log(error);
    }
    
  };

  return (
    <div className="signin-page">
      <form className="signin-card" onSubmit={handleSubmit(onSubmit)}>
        <h2>Admin Login 🔐</h2>
        <p className="subtitle">Access your dashboard</p>

        {/* Email */}
        <div className="field">
          <input
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>
        </div>

        {/* Password */}
        <div className="field">
          <input
            type="password"
            placeholder="Enter password"
            {...register("password")}
          />
          <span className="error">{errors.password?.message}</span>
        </div>

        {/* Button */}
        <button className="signin-btn" type="submit">
          Sign In
        </button>

        <p className="footer-text">
          Forgot password? <span>Reset</span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;