import mongoose from "mongoose";

 const OfferSchema = new mongoose.Schema({
     name: String,
     message:String
 })
 export const Offer = mongoose.model('Offer', OfferSchema);