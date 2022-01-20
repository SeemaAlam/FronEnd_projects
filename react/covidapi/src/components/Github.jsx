
import React, { useEffect, useState } from "react";
import { fetchUsers } from "./Users";

const Github=()=>{
   const[query, setQuery]=useState("");
   const [isLoading, setIsLoading]=useState(false);
   const [isError, setIsError]=useState(false);
   const [users, setUsers]=useState([]);

   useEffect(()=>{  
       setIsLoading(true);
       fetchUsers("masai",2)
       .then((res)=>{ 
           setUsers(res.data.items)
           console.log(res.data.items)
           setIsLoading(false);
       })
       .catch((err)=>{
          setIsError(true);
       })
       .finally(()=>{
        setIsError(false);
       });

   },[])


   const handleClick = (q=query)=>{
       setIsLoading(true);
      
       fetchUsers(query,2)
       .then((res)=>{ 
           setUsers(res.data.items)
       })
       .catch((err)=>{
          setIsError(true);
       })
       .finally(()=>{
         setIsLoading(false);
       });
   }

   return(
     <>

    <h1>Github</h1>

    <div className="header">

     <input placeholder="search" value={query} onChange={(e)=> setQuery(e.target.value)}/>


     <button disabled={isLoading} onClick={handleClick}> 
    {isLoading ? "loading" :"SEARCH"}
    </button>
{/* 
    {isLoading?
        <h1>Loading............</h1>
    :
    <button onClick={handleClick}> SEARCH </button>
    } */}

    </div>
    {isError?"please fill in text":null}

    <div className="maindiv">
        { users?.map((item)=>{
               return <div key={item.id} className="cards"> 
              
               <div className="img">
               <img src={item.avatar_url} alt="pic" class="mouse"/>
               </div>

               <div className="contentBox">
                <h3>Username : {item.login} </h3>
               <h2>Stars : {item.score} </h2>
            <a href="#" className="buy">{item.url}</a>

               </div>

               </div>
              
            })
        }
    </div>

     </>  
   ) 
}


export default Github;



