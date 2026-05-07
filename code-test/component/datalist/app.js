
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { fetchData } from './component/datalist/api';
import DataList from './component/datalist/DataList';
import Pagination from './component/datalist/Paginations';

const ITEM_PER_PAGE = 3;
function App() {
    const [userData ,setUserData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);

    useEffect(()=>{
      const getData =async()=>{
        setLoading(true)
      try{
        const data = await fetchData();
        setUserData(data)
      } catch(e) {console.log(e)}
        finally{setLoading(false)}
        return userData;
      }
      getData();
    },[])
    // Pagination logic
    const totalPage = Math.ceil(userData.length / ITEM_PER_PAGE);
    const paginatedUser = useMemo(()=>{
      const start = (currentPage-1) * ITEM_PER_PAGE;
      return userData.slice(start, start+ITEM_PER_PAGE);
    },[userData,currentPage])
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <DataList tableData={paginatedUser} loading={loading}/> 
        {!loading && userData.length > 0 &&  <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={setCurrentPage}/>}
      </section>
    </>
  )
}

export default App