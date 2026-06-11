import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      //required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    address: {
      type: String,
     // required: true,
      trim: true,
      minlength: 5,
    },
     address1: {
      type: String,
      //required: true,
      trim: true,
      minlength: 5,
    },

    phone: {
      type: String,
     // required: true,
      unique: true,
      trim: true,
      minlength: 11,
      maxlength: 11,
    },

    password: {
      type: String,
      // required: true,
      minlength: 6,
      },

     city: {
           type: String
          },
      zipCode: {
           type: Number
          },
          paymentMethod: {
              type: String
          },
      // Orders Field
    orders: [
      {
        productName: {
          type: String,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          default: 1,
        },

        price: {
          type: Number,
          required: true,
        },

        image: {
          type: String,
        },

        status: {
          type: String,
          enum: ["pending", "processing", "delivered", "cancelled"],
          default: "pending",
        },

        orderedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

const User = mongoose.model("User", UserSchema);

export default User;