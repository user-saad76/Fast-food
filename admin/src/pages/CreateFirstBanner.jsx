import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./CreateFirstBanner.css";

// ✅ Zod Schema
const bannerSchema = z.object({
  img: z.any(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  desc: z.string().min(5, "Description must be at least 5 characters"),
});

function CreateFirstBanner() {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(bannerSchema)
  });

  // ✅ Submit Function
  const onSubmit = async (data) => {
    try {

      const formData = new FormData();
      formData.append("img", data.img);
      formData.append("title", data.title);
      formData.append("desc", data.desc);

      const res = await fetch("http://localhost:7000/create/banner", {
        method: "POST",
        body: formData
      });

      const result = await res.json();
      console.log(result);

      alert("Banner Created Successfully 🎉");
      reset();

    } catch (error) {
      console.log(error);
      alert("Error creating banner ❌");
    }
  };

  return (
    <div className="banner-container">
      <form className="banner-form" onSubmit={handleSubmit(onSubmit)}>

        <h2>Create Banner</h2>

        {/* Image FILE */}
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setValue("img", e.target.files[0])}
          />
          {errors.img && <p className="error">{errors.img.message}</p>}
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

        {/* Button */}
        <button type="submit">Create Banner</button>

      </form>
    </div>
  );
}

export default CreateFirstBanner;