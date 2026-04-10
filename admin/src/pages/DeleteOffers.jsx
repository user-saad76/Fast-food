import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./DeleteOffers.css";

/* ================= ZOD SCHEMA ================= */
const deleteSchema = z.object({
  id: z.string().min(1, "Offer ID is required"),
  confirm: z.string().refine((val) => val === "DELETE", {
    message: "You must type DELETE to confirm",
  }),
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
      await fetch(`http://localhost:5000/api/offers/${data.id}`, {
        method: "DELETE",
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

        {/* ID INPUT */}
        <input
          placeholder="Enter Offer ID"
          {...register("id")}
        />
        <p className="error">{errors.id?.message}</p>

        {/* CONFIRM INPUT */}
        <input
          placeholder="Type DELETE to confirm"
          {...register("confirm")}
        />
        <p className="error">{errors.confirm?.message}</p>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Deleting..." : "Delete Offer"}
        </button>

      </form>

    </div>
  );
}

export default DeleteOffers;