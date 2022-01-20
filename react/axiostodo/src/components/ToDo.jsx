
import {TaskItem} from "./Task";
import {useEffect, useState} from "react";
import { nanoid } from "nanoid";
import { Pagination } from './Pagination';
import axios from "axios";

function Todo() {

  const [tasks, setTasks] = useState([]);

  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(false);
  const[current,setCurrent]=useState(1);
  const[per]=useState(5);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
      setLoading(false);
    }, 2000);
    }
  }, [loading]);

  useEffect(()=>{
    console.log(process.env)
    setLoading(true);
    async function go(){
   try{  
  axios.get("http://localhost:3003/todos").then(res=>{
   setTasks(res.data);
   } )
    setLoading(false)
    }catch(err){
      setError(true)
    }
  }
    go()
    
  },[]);

  const indexOfLast=current * per;
  const indexOfFirst=indexOfLast-per;
  const currentPosts=tasks.slice(indexOfFirst,indexOfLast);

  const [query, setQuery] = useState("");
  
  const [showAll,setShowAll]=useState(true);

 
  const handleChange = (e) => {
    // console.log(e.target, e.target.value)
    const { value } = e.target;
    setQuery(value);

  };

  const handleAdd = () => {
    console.log(tasks)
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

  const paginate=(pageNumber)=>{setCurrent(pageNumber)}

  if(error){
    return<h2>something went wrong</h2>
}

 if(loading){
    return<h2>Loading..............</h2>
 }

  return (
    <div className="sub">
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
      {currentPosts.filter(item=>showAll?true:!item.status).map((item) => {
        return <TaskItem key={item.id} {...item} handleToggle={handleToggle} handleDelete={handleDelete}/>;
      })}
    </div>
<div>
<button id="complete" onClick={()=>setShowAll(!showAll)}>{showAll?'Show incomplete tasks':'show all tasks'}</button>
</div>
    <Pagination per={per} totalPosts={tasks.length} paginate={paginate}/>
  </div>
  );
}

export default Todo;
