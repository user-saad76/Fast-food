import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./SignUp.css";
import usePost from "../hooks/usePost";


const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  cnic: z.string().min(13, "CNIC must be 13 digits").max(13, "CNIC must be 13 digits"),
  post: z.string().min(2, "Post is required"),
  address: z.string().min(5, "Address is required"),
  email: z.string(),
  phone: z.string().min(11, "Phone must be 11 digits").max(11),
  password: z.string().min(6, "Password min 6 chars"),
  repeatPassword: z.string(),
  image: z.any(),
}).refine((data) => data.password === data.repeatPassword, {
  message: "Passwords do not match",
  path: ["repeatPassword"],
});

function SignUp() {
    const { postData, loading, error, data } = usePost('http://localhost:7000/admin/signup');
  const {
    register,
    handleSubmit,
     setValue,   // ✅ ADD THIS
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

 const onSubmit = async (data) => {
  console.log("Form Data:", data);

  const formData = new FormData();

  // normal fields
  formData.append("name", data.name);
  formData.append("cnic", data.cnic);
  formData.append("post", data.post);
  formData.append("address", data.address);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("password", data.password);

  // file field (IMPORTANT 🔥)
  if (data.image && data.image.length > 0) {
    formData.append("image", data.image[0]);
  }

  await postData(formData);
};

  return (
    <div className="signup-wrapper">
      <form className="signup-card" onSubmit={handleSubmit(onSubmit)}>
        <h2>Employee Sign Up</h2>

        <div className="grid">

          <div className="field">
            <input placeholder="Name" {...register("name")} />
            <p>{errors.name?.message}</p>
          </div>

          <div className="field">
            <input placeholder="CNIC" {...register("cnic")} />
            <p>{errors.cnic?.message}</p>
          </div>

          <div className="field">
            <input placeholder="Post" {...register("post")} />
            <p>{errors.post?.message}</p>
          </div>

          <div className="field">
            <input placeholder="Phone" {...register("phone")} />
            <p>{errors.phone?.message}</p>
          </div>

          <div className="field full">
            <input placeholder="Address" {...register("address")} />
            <p>{errors.address?.message}</p>
          </div>

          <div className="field full">
            <input placeholder="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>

          <div className="field">
            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>
          </div>

          <div className="field">
            <input type="password" placeholder="Repeat Password" {...register("repeatPassword")} />
            <p>{errors.repeatPassword?.message}</p>
          </div>

          <div className="field full">
           <input
             type="file"
              onChange={(e) => {
                 setValue("image", e.target.files);
                  }}
             />
            <p>{errors.image?.message}</p>
          </div>

        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default SignUp;