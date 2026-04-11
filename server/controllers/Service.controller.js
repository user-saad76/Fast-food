import Service from "../models/Service.model.js"; // ✅ MUST be at top

export const CreateService = async(req,res)=>{
    const data = req.body;
    console.log(" Create backend data",data); 
      await Service.create(data) 
    res.json(
        { 
            messages:' Create Service endpoint called',
            data:data
        });
}
export const getAllService = async(req,res)=>{
    //const data = req.query;
   // console.log('data from backend',data);
      const Services =  await Service.find({}); 
    res.json({messages:'Banner endpoint called',Services});
}
 export const getServiceById = async(req,res)=>{
    const {id} = req.params;
     const data = await Service.findById(id)
    res.json({messages:'Single Service endpoint called', data});
}
export const updateService = async(req,res)=>{
     const {id} = req.params;
     const service = req.body;
      const data = await Service.findByIdAndUpdate(id,service)
    res.json({messages:'Update Service endpoint called',data});
}
export const deleteService = async(req,res)=>{

    const {id} = req.params;
    const data = await Service.findByIdAndDelete(id)
    res.json({messages:'Banner delete endpoint called',data});
}