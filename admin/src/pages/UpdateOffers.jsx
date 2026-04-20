import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./UpdateOffers.css";

/* ================= ZOD SCHEMA ================= */
const updateSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  title: z.string().min(1, "Title is required"),
  img: z.string().url("Enter valid image URL"),
  desc: z.string().min(5, "Description is required"),
  price: z.string().min(1, "Price is required"),
  oldPrice: z.string().min(1, "Old price is required"),
  discount: z.string().min(1, "Discount is required"),
});

function UpdateOffers() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(updateSchema)
  });

  /* ================= UPDATE API ================= */
  const onSubmit = async (data) => {
    try {
      const res = await fetch(`http://localhost:7000/update/offer/${data.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Update failed");
        return;
      }

      alert("Offer updated successfully!");
      reset();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="update-container">

     

      <form onSubmit={handleSubmit(onSubmit)} className="update-form">

        <input placeholder="Slug (existing)" {...register("slug")} />
        <p className="error">{errors.slug?.message}</p>

        <input placeholder="Title" {...register("title")} />
        <p className="error">{errors.title?.message}</p>

        <input placeholder="Image URL" {...register("img")} />
        <p className="error">{errors.img?.message}</p>

        <textarea placeholder="Description" {...register("desc")} />
        <p className="error">{errors.desc?.message}</p>

        <input placeholder="Price" {...register("price")} />
        <p className="error">{errors.price?.message}</p>

        <input placeholder="Old Price" {...register("oldPrice")} />
        <p className="error">{errors.oldPrice?.message}</p>

        <input placeholder="Discount" {...register("discount")} />
        <p className="error">{errors.discount?.message}</p>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Update Offer"}
        </button>

      </form>

    </div>
  );
}

export default UpdateOffers;