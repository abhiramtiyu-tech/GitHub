
import { useEffect, useState } from 'react'
import './App.css'
import SearchInput from './component/searchbar/SearchInput'
import { useDebounce } from './component/searchbar/useDebounce'
import { fetchUser } from './component/searchbar/api'
import UserList from './component/searchbar/UserList'


function App() {
  const [keyword, setKeyword] = useState("");
  const [user, setUser] = useState([]);
  const [loading,setLoading] = useState(false);
  const debounceQuery = useDebounce(keyword, 300);

  useEffect(()=>{
    if(!debounceQuery) {
      setUser([])
      return
    }
    const getUser = async()=>{
      setLoading(true)
      try{
        const data = await fetchUser(debounceQuery);
        setUser(data)
      }
      catch(error){
        console.log(error)
      }finally{setLoading(false)}
    }
    getUser()
  },[debounceQuery])
    

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <SearchInput keyword={keyword} onChange={setKeyword}/>
        <UserList data={user} loading={loading} keyword={keyword}/>
      </section>
    </>
  )
}

export default App