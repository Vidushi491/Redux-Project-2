import { useState } from "react"
import { useDispatch }  from "react-redux"
import { setQuery } from "../redux/features/searchSlice"
import { fetchVideos } from "../api/mediaApi"

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = async (e)=>{
        e.preventDefault()
       dispatch(setQuery(text))
         fetchVideos(text)
        setText('')
    }
     
  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex bg-gray-900 gap-5 p-10'>

            <input 
            value={text}
            onChange={(e)=>{
               setText(e.target.value)
            }}
            required
            className=' w-full border-2 px-4 py-2 text-xl rounded outline-none'
            type = "text" 
            placeholder='search anything...'/>

            <button className='active:scale-0.95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar