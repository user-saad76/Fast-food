import {  BurgerItem } from "../models/burgerItems.model.js";
export const CreateBurger = async (req, res) => {
  try {

    const data = req.body;
    const  image = req.file; // ✅ correct

    const img = {
       secure_url:image.path
    }
    console.log("Matching-img",img)

    console.log("Backend data:", data);

    const newBurger = await BurgerItem.create({
       title: data.title,
       slug: data.slug,
       desc: data.desc,
      price: data.price,
      oldPrice: data.oldPrice,
       discount: data.discount,
       ingredients:data.ingredients,
       rating:data.rating,
       img:img? img : ""   // ✅ image path
     });

    res.json({
      message: "Burger created successfully",
      data: newBurger
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getAllBurgers = async(req,res)=>{
 
      const Burgers =  await BurgerItem.find({}); 
    res.json({messages:'Burgers endpoint called',Burgers});
}
 export const getBurgerById = async(req,res)=>{
    const {id} = req.params;
     const data = await BurgerItem.findById(id)
    res.json({messages:'Single Burger endpoint called', data});
}

 export const getBurgerBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const data = await BurgerItem.findOne({ slug });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateBurger = async(req,res)=>{
     const {slug} = req.params;
     const burger = req.body;
      const data = await BurgerItem.findByIdAndUpdate({slug},burger)
    res.json({messages:'Update Burger endpoint called',data});
}
export const deleteBurger = async(req,res)=>{
      try {
    const { slug } = req.params;

    const deleted = await BurgerItem.findOneAndDelete({ slug });

    if (!deleted) {
      return res.status(404).json({ message: "Burger not found" });
    }

    res.json({ message: "Burger deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}