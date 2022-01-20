import React, { useState } from "react";
import {TaskItem} from "./Todoitem";
import { nanoid } from "nanoid";

function Task() {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showAll,setShowAll]=useState(true);

  const handleChange = (e) => {
    // console.log(e.target, e.target.value)
    const { value } = e.target;
    setQuery(value);

  };

  const handleAdd = () => {
    const payload = {
      id:nanoid(7),
      title: query,
      status: false,
    };
    if(payload.title!==""){
    let newTasks = [...tasks, payload];
    setTasks(newTasks);
    setQuery("");
    }
  };

  const handleToggle=(id)=>{
    const updatedTODo=tasks.map((item)=>
    item.id===id? {...item,status:!item.status}:item
  );
  setTasks(updatedTODo);
  }

  const handleDelete=(id)=>{
    const result = tasks.filter(item => item.id!==id);
    setTasks(result);
  }


  return (
    <div>
      <h1>TO DO LIST</h1>
      <div>
        <input
          placeholder="Add something"
          value={query}
          onChange={handleChange}
        ></input>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        {tasks.filter(item=>showAll?true:!item.status).map((item) => {
          return <TaskItem key={item.id} {...item} handleToggle={handleToggle} handleDelete={handleDelete}/>;
        })}
      </div>
<div>
<button id="complete" onClick={()=>setShowAll(!showAll)}>{showAll?'Show incomplete tasks':'show all tasks'}</button>
</div>
      
    </div>
  );
}
export { Task };


