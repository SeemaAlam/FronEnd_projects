import React from 'react';
import { Cart } from './Cart';
import { useState , useEffect} from 'react';
import { Pagination } from './Pagination';

export const Rest = (formData) => {
  

    const [state, setState] = useState([]);
    
   // const [data,setData]= useState([formData]);
    const [data,setData]= useState([]);
    const[current,setCurrent]=useState(1);
    const[per]=useState(5);

    useEffect(()=>{
        async function go(){
       try{  
       const data2=await fetch("http://localhost:3000/restaurants");
       const res=await data2.json()
       setState(res);
       setData(res);
       
        }catch(err){
          console.log(err);
        }
      }
        go()
        
      },[]);

      const indexOfLast=current * per;
      const indexOfFirst=indexOfLast-per;
      const currentData=data.slice(indexOfFirst,indexOfLast);
      const paginate=(pageNumber)=>{setCurrent(pageNumber)}



    const filteritem=(cat)=>{
     var updatedItem=null;

     switch(cat){


      case 'low':
        updatedItem=state;
        updatedItem.sort((a,b)=>{
           return (a.cost_for_two-b.cost_for_two);
         }); 
         break;

         case 'high':
          updatedItem=state;
          updatedItem.sort((a,b)=>{
            return (b.cost_for_two-a.cost_for_two);
          });
         break;

       case '4':
        updatedItem=state.filter((el)=>{
           return el.stars>=4;
         })
  
         break;

         case '3':
          updatedItem=state.filter((el)=>{
             return el.stars>=3;
           })
  
           break;

           case '2':
            updatedItem=state.filter((el)=>{
               return el.stars>=2;
             })
  
             break;

             case '1':
              updatedItem=state.filter((el)=>{
                 return el.stars>=1;
               })
        
               break;

               case 'cash':
              updatedItem=state.filter((el)=>{
                return (el.payment.cash && el.payment.card===false && el.payment.upi===false) ;
               })
          
               break;

               case 'cards':
              updatedItem=state.filter((el)=>{
                 return el.payment.card===true;
               })
        
               break;

         default:
         updatedItem=state;
  
     }
     setData(updatedItem);
    }
    
  const add=()=>{
    
  }

    return (
    <>
        <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
        <div className="d-flex justify-content-between">
        <h1 className="text-left main-heading">Seach for restaurants</h1>
        <button onClick={add} className="btn btn-outline-success btn-warning">Add new restaurant</button>
        </div>
        <hr /> 
        <div className="menu-tab d-flex justify-content-around mt-2 mb-3">
       <button className="btn btn-warning" onClick={()=>filteritem('high')}>High to low cost</button>

       <button className="btn btn-warning" onClick={()=>filteritem('low')}>Low to high cost</button>

       <button className="btn btn-warning" onClick={()=>filteritem('4')}>4 stars</button>

       <button className="btn btn-warning" onClick={()=>filteritem('3')}>3 stars</button>

       <button className="btn btn-warning" onClick={()=>filteritem('2')}>2 stars</button>

       <button className="btn btn-warning" onClick={()=>filteritem('1')}>1 stars</button>

       <button className="btn btn-warning" onClick={()=>filteritem('cash')}>Cash only</button>

       <button className="btn btn-warning" onClick={()=>filteritem('cards')}>Accepts cards</button>

       <button className="btn btn-warning" onClick={()=>filteritem('all')}>All</button>

        </div>
   
        { currentData.map((el)=>{
           return <Cart key={el.name} name={el.name} cost_for_two={el.cost_for_two} stars={el.stars} photo={el.photo} min={el.min} payment={el.payment}></Cart>
       })}
        </div>
        
        </div>
        <div>
        <Pagination per={per} totalPosts={data.length} paginate={paginate}/>

        </div>

        </>
        
    )
}
