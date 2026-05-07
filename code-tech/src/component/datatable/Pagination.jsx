    import React from 'react'

    const Pagination = ({currentpage, totalPage, onPageChange}) => {
        const pages = Array.from({length: totalPage}, (_,i)=>i+1);
    return (
        <div>
        <button disabled={currentpage===1} onClick={()=>onPageChange(currentpage-1)}>Prev</button>
        {pages.map(page=>{
            return (<button onClick={()=>{onPageChange(page)}} >
                {page}
            </button>)
        })}
        <button disabled={currentpage ===totalPage} onClick={()=>onPageChange(currentpage+1)}>next</button>
        </div>
    )
    }

    export default Pagination