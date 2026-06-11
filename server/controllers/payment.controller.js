
  
   import Stripe from 'stripe';
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripePayment = async(req,res,next)=>{
    try { 
      const {items} = req.body;
      
      const lineItems = items.map((item)=>{
          return {
          price_data:{
              currency: "usd",
          product_data:{
                 name: item.title
               },
            unit_amount: Math.round(item.price * 100), // ✅ FIXED

             },
              quantity:item.quantity
          }
         
      })


      console.log(lineItems)


      const session = await stripe.checkout.sessions.create({
       success_url: 'http://localhost:5173/success',
      line_items:lineItems,
     mode: 'payment',
      payment_method_types: ["card"],
    });

    res.json({ 
      url: session.url,
      id: session.id
    })
      
    } catch (error) {
      console.log(error);
         res.json({
          message:error?.message || "Something went wrong "
         })
    }
}