import { useState } from "react"
import { useDispatch }  from "react-redux"
import { setQuery } from "../redux/features/searchSlice"

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
       dispatch(setQuery(text))
        setText('')
    }
     
  return (
    <div>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} className='flex bg-(--c1) gap-5 p-10'>

            <input 
            value={text}
            onChange={(e)=>{
               setText(e.target.value)
            }}
            required
            className=' w-full border-3 px-4 py-2 text-xl font-bold rounded outline-none'
            type = "text" 
            placeholder='search anything...'/>

            <button className='active:scale-0.95 cursor-pointer border-3 px-4 py-2 text-xl font-bold rounded outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar