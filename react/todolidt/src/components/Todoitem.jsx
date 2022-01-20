

function TaskItem({title,id,handleToggle,status,handleDelete}){
    return(
        <div className="todos">
        <button id="status" onClick={()=> handleToggle(id)}> {status?'✓':'x'} </button>
        <div className="item">
         {status?<strike>{title}</strike>:title}
        </div>
      
      <button onClick={()=> handleDelete(id)}> - </button>
        </div>
    )
}

export {TaskItem}