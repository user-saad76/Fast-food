
import {Offer} from "../models/Offers.models.js";
export const CreateOffers = async(req,res)=>{
    const data = req.body;
    console.log(" Create backend data",data); 
      await Offer.create(data) 
    res.json(
        { 
            messages:' Create Offer endpoint called',
            data:data
        });
}
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
export const updateOffer = async(req,res)=>{
     const {id} = req.params;
     const offer = req.body;
      const data = await Offer.findByIdAndUpdate(id,offer)
    res.json({messages:'Update Offer endpoint called',data});
}
export const deleteOffer = async(req,res)=>{

    const {id} = req.params;
    const data = await Offer.findByIdAndDelete(id)
    res.json({messages:'Offer delete endpoint called',data});
}