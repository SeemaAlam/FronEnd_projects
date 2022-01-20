import React from 'react';

function List({h,a,b,c,d}){
    return(
        <div>
        <h1>{h}</h1>
        <ul>
           <li>{a}</li>
           <li>{b}</li>
           <li>{c}</li>
           <li>{d}</li>
        </ul>

        </div>
        
    )
}



export default List;
