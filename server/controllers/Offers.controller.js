
import {Offer} from "../models/Offers.models.js";
export const CreateOffers = async (req, res) => {
  try {

    const data = req.body;
    const  image = req.file; // ✅ correct

    const img = {
       secure_url:image.path
    }
    console.log("Matching-img",img)

    console.log("Backend data:", data);

    const newOffer = await Offer.create({
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
      message: "Offer created successfully",
      data: newOffer
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getAllOffers = async(req,res)=>{
    //const data = req.query;
   // console.log('data from backend',data);
      const Offers =  await Offer.find({}); 
    res.json({messages:'Offers endpoint called',Offers});
}
 export const getOfferById = async(req,res)=>{
    const {id} = req.params;
     const data = await Offer.findById(id)
    res.json({messages:'Single Offer endpoint called', data});
}

 export const getOfferBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const data = await Offer.findOne({ slug });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateOffer = async(req,res)=>{
     const {slug} = req.params;
     const offer = req.body;
      const data = await Offer.findByIdAndUpdate({slug},offer)
    res.json({messages:'Update Offer endpoint called',data});
}
export const deleteOffer = async(req,res)=>{
      try {
    const { slug } = req.params;

    const deletedOffer = await Offer.findOneAndDelete({ slug });

    if (!deletedOffer) {
      return res.status(404).json({ message: "Offer not found" });
    }

    res.json({ message: "Offer deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}