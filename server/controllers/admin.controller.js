import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";

export const CreateAdmin = async (req, res) => {
  try {
    console.log("FILE:", req.file.path);
    console.log("BODY:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: "Image not uploaded" });
    }

    const data = req.body;
     const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;

    const newAdmin = await Admin.create({
      name: data.name,
      cnic: data.cnic,
      post: data.post,
      address: data.address,
      email: data.email,
      phone: data.phone,
      password: data.password,
      image: {
        secure_url: req.file.path,
      },
    });

    res.json({ message: "Admin created", data: newAdmin });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};