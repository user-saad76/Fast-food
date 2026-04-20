import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./DeleteOffers.css";

/* ================= ZOD SCHEMA ================= */
const deleteSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
});

function DeleteOffers() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(deleteSchema)
  });

  /* ================= DELETE API ================= */
  const onSubmit = async (data) => {
    try {
      await fetch(`http://localhost:7000/delete/offer/${data.slug}`, {
        method: "DELETE",
         headers: {
          "Content-Type": "application/json"
        }
      });

      alert("Offer deleted successfully!");
      reset();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="delete-container">

      <h2>Delete Offer</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="delete-form">

        {/* SLUG INPUT */}
        <input
          placeholder="Enter Offer Slug"
          {...register("slug")}
        />
        <p className="error">{errors.slug?.message}</p>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Deleting..." : "Delete Offer"}
        </button>

      </form>

    </div>
  );
}

export default DeleteOffers;