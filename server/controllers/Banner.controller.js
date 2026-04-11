import Banner from "../models/Banner.models.js";

export const CreateBanner = async(req,res)=>{
    const data = req.body;
    console.log(" Create backend data",data); 
      await Banner.create(data) 
    res.json(
        { 
            messages:' Create Banner endpoint called',
            data:data
        });
}
export const getAllBanner = async(req,res)=>{
    //const data = req.query;
   // console.log('data from backend',data);
      const Banners =  await Banner.find({}); 
    res.json({messages:'Banner endpoint called',Banners});
}
 export const getBannerById = async(req,res)=>{
    const {id} = req.params;
     const data = await Banner.findById(id)
    res.json({messages:'Single Banner endpoint called', data});
}
export const updateBanner = async(req,res)=>{
     const {id} = req.params;
     const banner = req.body;
      const data = await Banner.findByIdAndUpdate(id,banner)
    res.json({messages:'Update Banner endpoint called',data});
}
export const deleteBanner = async(req,res)=>{

    const {id} = req.params;
    const data = await Banner.findByIdAndDelete(id)
    res.json({messages:'Banner delete endpoint called',data});
}