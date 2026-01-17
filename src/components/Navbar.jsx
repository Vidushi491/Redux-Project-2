import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className="flex justify-between items-center py-6 px-10 bg-(--c2)">
            
        <Link to='/' className="text-5xl font-medium text-(--c1)">
            Media Search</Link>

         <div className="flex gap-5  items-center">

            <Link className="text-xl font-bold active:scale-95 bg-(--c1) text-(--c2) rounded px-4 py-2" to='/'>Search</Link>

            <Link className="text-xl font-bold active:scale-95 bg-(--c1) text-(--c2) rounded px-4 py-2" to=
            '/collection'>Collection</Link>
        </div>
        </div>
  )
}

export default Navbar