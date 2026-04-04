
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
 export const getOfferById = (req,res)=>{
    const data = req.params;
    console.log('give data through params ',data);
    
    res.json({messages:'Single Offer endpoint called',data:data});
}
export const updateOffer = (req,res)=>{
    res.json({messages:'Single Offer endpoint called'});
}
export const deleteOffer = (req,res)=>{
    res.json({messages:'Offer delete endpoint called'});
}