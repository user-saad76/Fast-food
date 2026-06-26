
  
   import Stripe from 'stripe';
   import Order from '../models/order.model.js';
    import CashOrder from '../models/cashOrder.model.js';




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

   const orderData = {
      stripeSessionId: session.id,

      stripePaymentIntentId: session.payment_intent,

      customerName: session.customer_details?.name,

      customerEmail: session.customer_details?.email,

      country: session.customer_details?.address?.country,

      currency: session.currency,

      subtotal: session.amount_subtotal / 100,

      totalAmount: session.amount_total / 100,

      paymentStatus: session.payment_status,

      items: lineItems.data.map((item) => ({
        name: item.description,

        quantity: item.quantity,

        unitPrice: item.price.unit_amount / 100,

        totalPrice: item.amount_total / 100,
      })),
    };

    console.log(orderData);
        const order = await Order.create(orderData);

    res.status(201).json({
      success: true,
      message: "Order confirmed successfully",
      order,
    });


        //  res.json({
        //     session,
        //     lineItems
        //  })

      }
      catch(error){
         console.log("session retrieval error",error);  
          res.status(500).json({
             success:false,
             message:error?.message || "Failed to confirm order"
          })
      }
}
 export const cashOnDeliveryOrder = async (req,res,next)=>{

  try {
    const {
      user,
      name,
      email,
      phone,
      address1,
      city,
      zipCode,
      paymentMethod,
      items,
      totalAmount,
    } = req.body;

    const order = await CashOrder.create({
      user,
      name,
      email,
      phone,
      address1,
      city,
      zipCode,
      paymentMethod,
      items,
      totalAmount,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
