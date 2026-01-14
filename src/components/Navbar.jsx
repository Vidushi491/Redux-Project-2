import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className="min-h-screen text-white w-full bg-gray-950">

        <div className="flex justify-between items-center py-6 px-10 bg-(--c2)">

        <h2 className="text-2xl font-medium">
            Media Search</h2>

         <div className="flex gap-5  items-center">

            <Link className="text-xl bg-(--c4)" to='/'>Search</Link>

            <link className="text-xl bg-(--c4)" to='/collection'>Collection</link>
        </div>
        </div>
    </div>
  )
}

export default Navbar