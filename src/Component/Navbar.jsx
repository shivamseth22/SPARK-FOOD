import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
const[search , setSearch] = useState('');
console.log(search);
  return (
    <div className=' flex py-6 justify-between text-lg max-w-[1200px] min-w-[1200px] shadow-xl sticky top-0 z-0 bg-white ' >
        <div className='flex gap-14 '>
        <Link to="/">
        <h1>SPARK-FOOD</h1>
        </Link>
        <h1>Current Address</h1>
        </div>
        <div className='flex gap-32'>
            <div className='flex'>
            <input 
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
            type="text" 
            className=' bg-red-100'/>
            <h1>Search</h1>
            </div>
            <div>
            <h1>Offer</h1>
            </div>
            <div>
            <h1>Login</h1>
            </div>
            <div>
            <h1>Cart</h1>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar;