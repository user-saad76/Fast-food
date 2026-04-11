import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: 3,
      trim: true
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      minlength: 5,
      trim: true
    }
  },
  {
    timestamps: true // createdAt & updatedAt auto
  }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;