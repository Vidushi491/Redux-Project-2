import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CollectionPage from "./pages/CollectionPage"
import HomePage from "./pages/HomePage"
import { ToastContainer, toast } from 'react-toastify';
const App = () => {

  return (
    <div className='min-h-screen text-white w-full bg-gray-950'>

    <Navbar/>
      <Routes>
        <Route 
        path='/' 
        elements={<HomePage/>}/>
        <Route 
        path='/collection'
        element={<CollectionPage/>}/>
      </Routes>

    <ToastContainer/>
    </div>
  )
}

export default App