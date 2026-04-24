import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateOffers.css";

/* ZOD SCHEMA */
const offerSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  img: z.any(),
  desc: z.string().min(5, "Description must be at least 5 characters"),
  price: z.string().min(1, "Price is required"),
  oldPrice: z.string().min(1, "Old price is required"),
  discount: z.string().min(1, "Discount is required"),
});

function CreateOffers() {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(offerSchema)
  });
  

  /* CREATE OFFER */
  const onSubmit = async (data) => {
    try {

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("slug", data.slug);
      formData.append("img", data.img); // FILE
      formData.append("desc", data.desc);
      formData.append("price", data.price);
      formData.append("oldPrice", data.oldPrice);
      formData.append("discount", data.discount);

      const res = await fetch("http://localhost:7000/create/offer", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
     
      if (res.ok) {
        toast.success("Offer Created Successfully ✅");
        reset();
      } else {
        toast.error(result.message || "Failed to create offer ❌");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-offer-container">

      <h2>Create Offer</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="create-offer-form" encType="multipart/form-data">

        <input placeholder="Title" {...register("title")} />
        <p className="error">{errors.title?.message}</p>

        <input placeholder="Slug (burger-deal)" {...register("slug")} />
        <p className="error">{errors.slug?.message}</p>

        {/* ✅ IMAGE FILE INPUT */}
       <input
        type="file"
          accept="image/*"
              onChange={(e) => setValue("img", e.target.files[0])}
         />
        <p className="error">{errors.img?.message}</p>

        <input placeholder="Description" {...register("desc")} />
        <p className="error">{errors.desc?.message}</p>

        <input placeholder="Price" {...register("price")} />
        <p className="error">{errors.price?.message}</p>

        <input placeholder="Old Price" {...register("oldPrice")} />
        <p className="error">{errors.oldPrice?.message}</p>

        <input placeholder="Discount" {...register("discount")} />
        <p className="error">{errors.discount?.message}</p>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Offer"}
        </button>

      </form>
      {/* TOAST CONTAINER */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default CreateOffers;