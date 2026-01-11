import React from 'react'
import { useDispatch } from 'react-redux'

const Tabs = () => {
    const tabs = ['photos','videos']
    const dispatch = useDispatch()
  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem,idx){
            return (
            <button className={`${}`}
             key={idx}
             onClick={()=>{
                dispatch(setActiveTabs(elem))
             }}>
               {elem} 
             </button>
            )
        })}
    </div>
  )
}

export default Tab