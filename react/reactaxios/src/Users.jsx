import axios from "axios";

const fetchUsers=(query,page)=>{
  if(!query){
      return new Promise.reject("wrong query")
  }

  return axios.get("https://api.github.com/search/users",{
   params:{
       q:query,
       page:page,
       per_page:5,
   }
  })
}

export {fetchUsers}