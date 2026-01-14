import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos} from '../api/mediaApi'
import { setLoading,setError,setResults, } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'
   

const ResultGrid = () => {

const dispatch = useDispatch()
 const{query,results,loading,activeTab,error} =  useSelector((store)=>store.search)

useEffect(function () {
  if(!query) return
  const getData = async()=>{

  try{
    dispatch(setLoading())
    let data = []
  if(activeTab == 'photos'){
    let response = await fetchPhotos(query)
    data = response.results.map((item)=>({
      id:item.id,
      type:'photo',
      thumbnail:item.urls.small,
      title:item.alt_description,
      src:item.urls.full,
      url:item.links.html
    }))
  }
  if(activeTab == 'videos'){
     let response = await fetchVideos(query)
     data = response.videos.map((item)=>({
      id:item.id,
      type:'video',
      title:item.user.name || 'video',
      thumbnail:item.image,
      src:item.video_files[0].link,
      url:item.url
     }))
  }
  dispatchEvent(setResults(data))
  }catch(err){
    dispatch(setError(err.message))
  }
}
  getData()
}, [query, activeTab,dispatch])
if(error) return <h1>Error</h1>
if(loading) return <h1>Loading...</h1>
  return (
    <div className='flex justify-between w-full flex-wrap gap-5 overflow-auto px-5'>
       {results.map((item, idx)=> {
        return <div key={idx}>
         <ResultCard item={item}/>
        </div>
      })}
    
    </div>
  )
}

export default ResultGrid