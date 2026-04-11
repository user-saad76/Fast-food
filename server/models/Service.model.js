import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    desc: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);