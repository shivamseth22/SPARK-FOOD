import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-200 flex py-6 justify-between text-lg max-w-[1200px] min-w-[1200px] shadow-lg' >
        <div className='flex gap-14 '>
        <h1>SPARK-FOOD</h1>
        <h1>Current Address</h1>
        </div>
        <div className='flex gap-32'>
            <div>
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