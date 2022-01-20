import React from 'react'

export const Pagination = ({per,totalPosts,paginate}) => {

    const pageNums=[];

    for(let i=1;i<=Math.ceil(totalPosts/per);i++){
        pageNums.push(i);
    }

    return (
        <div className="page">
            <nav>
            <h1><hr></hr></h1>
                <ul className="pagination pagination-lg">
                {
                    pageNums.map(number=>(
                        <li key={number} className="page-item list" >
                        <a onClick={()=>paginate(number)} href="!#" className="page-link list">
                        {number}
                        </a>
                        </li>
                    ))
                }

                </ul>
            </nav>
        </div>
    )
}
