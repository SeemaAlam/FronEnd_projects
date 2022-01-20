// import React from 'react';
// import { Cart } from './Cart';

// export const Menutab = () => {
//     return (
//         <>
//        <div class="container d-flex justify-content-center mt-50 mb-50">
//         <div class="row">
//         <h1 className="text-center main-heading">Seach for restaurants</h1>
//         <hr /> 
//         <div className="menu-tab d-flex justify-content-around mt-2 mb-3">
//        <button className="btn btn-warning" onClick={()=>filteritem('high')}>High to low cost</button>

//        <button className="btn btn-warning" onClick={()=>filteritem('low')}>Low to high cost</button>

//        <button className="btn btn-warning" onClick={()=>filteritem('4')}>4 stars</button>

//        <button className="btn btn-warning" onClick={()=>filteritem('3')}>3 stars</button>

//        <button className="btn btn-warning" onClick={()=>filteritem('2')}>2 stars</button>

//        <button className="btn btn-warning" onClick={()=>filteritem('1')}>1 stars</button>

//        <button className="btn btn-warning" onClick={()=>filteritem('cash')}>Cash only</button>

//        <button className="btn btn-warning" onClick={()=>filteritem('cards')}>Accepts cards</button>

//        <button className="btn btn-warning" onClick={()=>filteritem('all')}>All</button>

//         </div>
   
//         { currentData.map((el)=>{
//            return <Cart key={el.name} name={el.name} cost_for_two={el.cost_for_two} stars={el.stars} photo={el.photo} min={el.min} payment={el.payment}></Cart>
//        })}
//         </div>
        
//         </div>
//         <div>
//         <Pagination per={per} totalPosts={data.length} paginate={paginate}/>

//         </div>
//         </>
        
//     )
// }
