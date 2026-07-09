
import { PizzaItem } from "../models/pizzaItems.model.js";
export const CreatePizza = async (req, res) => {
  try {

    const data = req.body;
    const  image = req.file; // ✅ correct

    const img = {
       secure_url:image.path
    }
    console.log("Matching-img",img)

    console.log("Backend data:", data);

    const newPizza = await PizzaItem.create({
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
      message: "Pizza created successfully",
      data: newPizza
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getAllPizzas = async(req,res)=>{
 
      const Pizzas =  await PizzaItem.find({}); 
    res.json({messages:'Pizzas endpoint called',Pizzas});
}
 export const getPizzaById = async(req,res)=>{
    const {id} = req.params;
     const data = await PizzaItem.findById(id)
    res.json({messages:'Single Pizza endpoint called', data});
}

 export const getPizzaBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const data = await PizzaItem.findOne({ slug });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updatePizza = async(req,res)=>{
     const {slug} = req.params;
     const pizza = req.body;
      const data = await PizzaItem.findByIdAndUpdate({slug},pizza)
    res.json({messages:'Update Pizza endpoint called',data});
}
export const deletePizza = async(req,res)=>{
      try {
    const { slug } = req.params;

    const deleted = await PizzaItem.findOneAndDelete({ slug });

    if (!deleted) {
      return res.status(404).json({ message: "Pizza not found" });
    }

    res.json({ message: "Pizza deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}