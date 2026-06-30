import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
     productId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Product",
       //required: true,
     },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: 1,
    },
   
    img: {
      secure_url: {
        type: String,
       // required: true,
      },
    },
  },
  { _id: false }
);

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status:{
           type:String,
           enum:["active","abandoned","ordered"],
           default:"active",
     },

    items: [CartItemSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cart", CartSchema);