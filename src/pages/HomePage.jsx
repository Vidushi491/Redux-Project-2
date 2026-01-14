import { useSelector } from "react-redux"
import ResultGrid from "../components/ResultGrid"
import SearchBar from "../components/SearchBar"
import Tabs from '../components/Tabs'
import { Link } from "react-router-dom"

const HomePage = () => {
    const { query } = useSelector((store) => store.search)
    return (
    
       
 
        <SearchBar/>
    {
        query != '' ? <div><Tabs />}
            <Tabs />

            <ResultGrid />
        </div>
  )
}

export default HomePage