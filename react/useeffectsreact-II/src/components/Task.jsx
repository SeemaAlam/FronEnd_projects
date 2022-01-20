

function TaskItem({title,id,handleToggle,status,handleDelete}){

//     if(error){
//         return<h2>something went wrong</h2>
//     }

//    else if(loading){
//         return<h2>Loading..............</h2>
//     }
  
//     else{
    return(
        <div className="todos">
        <button id="status" onClick={()=> handleToggle(id)}> {status?'✓':'x'} </button>
        <div className="item">
         {status?<strike>{title}</strike>:title}
        </div>
      
      <button onClick={()=> handleDelete(id)}> - </button>
        </div>
    
    )
    //}
}

export {TaskItem}