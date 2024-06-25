import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-red-900 p-5 text-white flex justify-around items-center'>
         <h1 className='text-2xl font-bold'>Products</h1>
         <div className='flex gap-x-2'>

            <Link to={"/"}><button className='bg-white text-red-900 text-lg font-bold px-3 py-2 rounded-md'>Add product</button></Link>
            <Link to={"/list"}><button className='bg-white text-red-900 text-lg font-bold px-3 py-2 rounded-md'>See List</button></Link>
           
         </div>
         <Link to={"/cart"}><button className='bg-white text-red-900 text-lg font-bold px-3 py-2 rounded-md'>🛒</button></Link>
    </div>
  )
}

export default Navbar