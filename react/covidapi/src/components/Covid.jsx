import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Covid = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = dd + '-' + mm + '-' + yyyy;


 const [state, setState] = useState([]);
 const [id,setId]=useState("421401");
 const [date,setDate]=useState(today);


const loaddata=async()=>{
 const res=await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${id}&date=${date}`);

 setState(res.data.centers);
 console.log(res.data.centers);
}


 useEffect(() => {
     
     loaddata()
 }, [])

 


const checkData=(e)=>{
    console.log(id,date)
   // e.preventDefault();
    loaddata()
}

    return (
        <div className="main">
            <h1>Covid</h1>
            <input type="text" placeholder="search by pincode" value={id} onChange={(e)=>setId(e.target.value)}></input>
            <input type="text" placeholder="search by name" value={date} onChange={(e)=>setDate(e.target.value)}></input>
            <button onClick={checkData}>Check</button>
            <table>
            <tr>
            <th>Name</th>
                <th>From</th>
                <th>To</th>
                <th>Availability</th>
                </tr>
            {state?.map((el)=>{
                return<tr>
                 <td>{el.name}</td>
                <td>{el.from}</td>
                <td>{el.to}</td>
                <td>{(el.sessions[0].available_capacity>0?"available":"not available")}</td>
                </tr>

            })
            }
            </table>
        </div>
    )
}

export default Covid
