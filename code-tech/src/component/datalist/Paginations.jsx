const Pagination=({currentPage,totalPage,onPageChange})=>{
    const pages = Array.from({length: totalPage}, (_,i)=>i+1)
    return(
        <div>
            <button disabled={currentPage===1} onClick={()=>onPageChange(currentPage-1)}>prev</button>
            {
                pages.map((page)=>{
                    return <button key={page} onClick={()=>onPageChange(page)} 
                    style={{fontWeight: page ===currentPage ? "bold" : "normal"}}>
                        {page}
                    </button>
                })
            }
            <button disabled={currentPage===totalPage} onClick={()=>onPageChange(currentPage+1)}>next</button>
        </div>
    )
}
export default Pagination;