import React from 'react';

export const Cart = ({min, payment, stars, name, cost_for_two, photo }) => {
 let pay="pay";
 if(payment.cash && payment.card && payment.upi){
 pay="Accepts all types of payments"
  }
 else if(payment.cash && payment.card){
    pay="Accepts cards and cash"
     }
     else if(payment.card && payment.upi){
        pay="Only accepts online payents"
         }
         else if(payment.card){
            pay="Only accepts cards"
         }
         else if(payment.upi){
            pay="Only accepts UPI payment"
         }
         else{
             pay="Cash only"
         }


    return (
        <>
  
        <div className="col-md-4 mt-1">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"> <img src={photo} className="card-img img-fluid" alt="" /> </div>
                </div>
                <div className="card-body bg-light text-center">
                    <div className="mb-2">
                        <h3 className="font-weight-semibold mb-2"> {name}
                        </h3> 
                    </div>
                    <div className="h">

                        
                    <h4 className="mb-0 font-weight-semibold">${cost_for_two} for two</h4> 
                    <h4 className="h4">{stars}</h4> 
                    </div>          
                    <h6 className="mb-3">min $ {min}</h6> <button type="button" className="btn bg-cart mb-2"><i className="fa fa-cart-plus mr-2"></i> Add to favourite</button>
                    <h5>{pay}</h5>
                </div>      
            </div>
     
        </div>

        

        </>
    )
}
