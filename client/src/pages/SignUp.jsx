import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./SignUp.css";
import usePost from "../hooks/usePost";

// Zod Schema
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  address: z.string().min(5, "Address is required"),
  phone: z
    .string()
    .min(11, "Phone must be 11 digits")
    .max(11, "Phone must be 11 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  repeatPassword: z.string(),
}).refine((data) => data.password === data.repeatPassword, {
  message: "Passwords do not match",
  path: ["repeatPassword"],
});

function SignUp() {

     const { postData, loading, error, data } = usePost('http://localhost:7000/users/signup');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async(data) => {
    console.log("Form Data:", data);
     await postData(data)
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Account</h2>

        <div className="input-group">
          <input type="text" placeholder="Full Name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>

        <div className="input-group">
          <input type="email" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Address" {...register("address")} />
          <p>{errors.address?.message}</p>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Phone" {...register("phone")} />
          <p>{errors.phone?.message}</p>
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Repeat Password"
            {...register("repeatPassword")}
          />
          <p>{errors.repeatPassword?.message}</p>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;