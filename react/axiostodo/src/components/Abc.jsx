
import axios from "axios";
import {useEffect} from 'react' 

export const Abc = () => {


  useEffect(() =>{
    
   try{  
   axios.get("http://localhost:3003/todos").then(res=>{
       console.log(res.data)
   })
    }catch(err){
      console.log(err)
    }
    
    
  },[]);

    return (
        <div>
            
        </div>
    )
}
