import { addCollection ,addedToast} from '../redux/features/collectionSlice'
import { useDispatch } from 'react-redux'



const ResultCard = ({item}) => {
  const dispatch = useDispatch()

  const addToCollection = (item) =>{
    dispatch(addCollection(item))
    dispatch(addedToast())
  }
  return (
    <div 
        className='w-[18vw] relative h-80 bg-(--c1) rounded-xl overflow-hidden'>

        <a target="_blank" className='h-full'
        href={item.url}>
         {item.type =='photo'?<img className='h-full w-full object-cover object-center' src={item.src}alt="" />:''}
        {item.type == 'video'? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> :'No Video Avalable'}
       </a>

      <div id='bottom' className='flex justify-between gap-3 items-center w-full px-3 py-3 absolute bottom-0 text-white'>
        <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>

        <button 
        onClick={()=>{
          addToCollection(item)
        }}
        className='bg-(--c1) active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'>
          Save
          </button>
          
      </div>
    </div>
  )
}

export default ResultCard