

import {useEffect, useState} from "react";


export function Counter(){


    const [start,setStart]=useState(0);
    const [end,setEnd]=useState(0);
    const [count,setCount]=useState(false);

    const handleEnd = (e) =>{
        setEnd(Number(e.target.value))
    }

    const handleStart = (e) =>{
        setStart(Number(e.target.value))
    }

    const play=(e)=>{
       // e.preventDefault()
        setCount(true)
    }
   

    useEffect(()=>{
        
        const id= setInterval(()=>{
            setStart((prev)=>{
                if(prev===end){
                    clearInterval(id);
                    setCount(false)
                    return 0;
                }
                return prev+1;

            })
        },1000);


        return(()=>{
          clearInterval(id);
          setCount(false)
        });
        
    },[count])

    return (
        <div class="count">
        <h1>Count:{start}</h1>
        <div>
        <input placeholder="start" onChange={(e)=>handleStart(e)} ></input>
        <input placeholder="End" onChange={(e)=>handleEnd(e)} ></input>
        </div>
        <div class="btn">
        <button type="submit" onClick={(e)=>play(e)}>RE-START</button>
        </div>
    </div>
    )
}

export default Counter;





