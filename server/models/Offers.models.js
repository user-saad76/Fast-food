import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    img: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    oldPrice: {
      type: String,
      required: true,
    },

    discount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Offer = mongoose.model("Offer", OfferSchema);