import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {

  const dispatch = useDispatch()

  const removeFromCollection = (item)=>{
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }
  return (
   
        <div 
        className='w-[18vw] relative h-80 rounded-xl overflow-hidden'>
        <a target="_blank" className='h-full'
        href={item.url}>
        {item.type =='photo'?<img className='h-full w-full object-cover object-center' src={item.src}alt="" />:''}
        {item.type == 'video'? <video className='h-full w-full object-cover objrct-center' autoPlay loop muted src={item.src}></video> :''}
       </a>
      <div id='bottom' className='flex justify-between gap-3 items-center h-[35%] w-full px-4 py-10 absolute bottom-0 text-white'>
        <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>

        <button 
        onClick={()=>{
          removeFromCollection(item)
        }}
        className='bg-(--c1) active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'>
          Remove
          </button>
          
      </div>
    </div>

  )
}

export default CollectionCard