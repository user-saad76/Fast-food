import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./CreateService.css";

// ✅ Zod Schema
const serviceSchema = z.object({
  icon: z.string().min(3, "Icon is required"),
  title: z.string().min(3, "Title must be at least 3 characters"),
  desc: z.string().min(5, "Description must be at least 5 characters"),
});

function CreateService() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(serviceSchema),
  });

  // ✅ Submit
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:7000/create/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);

      alert("Service Created Successfully 🚀");
      reset();
    } catch (error) {
      console.log(error);
      alert("Error creating service ❌");
    }
  };

  return (
    <div className="service-container">
      <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Service</h2>

        {/* Icon */}
        <div className="form-group">
          <label>Icon (FontAwesome)</label>
          <input
            type="text"
            placeholder="e.g. fa-truck-fast"
            {...register("icon")}
          />
          {errors.icon && <p className="error">{errors.icon.message}</p>}
        </div>

        {/* Title */}
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            {...register("title")}
          />
          {errors.title && <p className="error">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter description"
            {...register("desc")}
          />
          {errors.desc && <p className="error">{errors.desc.message}</p>}
        </div>

        <button type="submit">Create Service</button>
      </form>
    </div>
  );
}

export default CreateService;