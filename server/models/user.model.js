import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 11,
      maxlength: 11,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

const User = mongoose.model("User", UserSchema);

export default User;