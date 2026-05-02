import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    cnic: {
      type: String,
      required: true,
      unique: true,
      minlength: 13,
      maxlength: 13,
    },

    post: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },

    email: {
      type: String,
      unique:true,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      minlength: 11,
      maxlength: 11,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    image: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;