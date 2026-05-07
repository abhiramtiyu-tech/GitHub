const SearchInput =({keyword,onChange})=>{
    return <input
        type="text"
        placeholder="search keyword"
        value={keyword}
        onChange={(e)=>onChange(e.target.value)}
    />
}
export default SearchInput;