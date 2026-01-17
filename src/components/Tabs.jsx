import { useDispatch, useSelector } from 'react-redux'
import {setActiveTabs} from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos','videos']
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem,idx){
            return (
            <button 
            className={`${(activeTab==elem?'bg-(--c2) text-(--c1) font-bold text-xl':'bg-(--c2) text-(--c1) font-bold text-xl')}
            transition bg-(--c1) cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
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

export default Tabs