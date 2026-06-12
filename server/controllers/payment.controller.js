
  
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
      console.log("For client reference id ",req?.user?._id);


      const session = await stripe.checkout.sessions.create({
       success_url: 'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url:'http://localhost:5173/cancel',
      line_items:lineItems,
     mode: 'payment',
      payment_method_types: ["card"],
      client_reference_id: req?.user?.id
      
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

export const confirmOrder = async (req,res,next)=>{
      try{

        const {session_id} =req.body;
        console.log("Session id received for order confirmation",session_id);
        const session =  await stripe.checkout.sessions.retrieve(session_id);
        console.log("Session details retrieved from Stripe",session);

        const lineItems = await stripe.checkout.sessions.listLineItems(session_id,{
          limit:100
        
        });
        res.json({
           session,
           lineItems
        })

      }
      catch(error){
         console.log("session retrieval error",error);
      }
}