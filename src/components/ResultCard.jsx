import { addCollection } from '../redux/features/collectionSlice'
import { useDispatch } from 'react-redux'



const ResultCard = ({item}) => {
  const addToCollection = (item)=>{
    
  const dispatch = useDispatch()

  const addToCollection = (item) =>{
    dispatch(addToCollection(item))
  }
  }
  return (
    <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
        <a target="_blank" className='h-full'
        href={item.url}>

         {item.type =='photo'?<img className='h-full w-full object-cover object-center' src={item.src}alt="" />:''}
        {item.type == 'video'? <video className='h-full w-full object-cover objrct-center' autoPlay loop muted src={item.src}></video> :''}

       </a>
      <div id='bottom' className='flex justify-between gap-3 items-center h-[35%] w-full px-4 py-10 absolute bottom-0 text-white'>
        <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>

        <button 
        onClick={()=>{
          addToCollection(item)
        }}
        className='bg-red-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'>
          Save
          </button>
          
      </div>
    </div>
  )
}

export default ResultCard