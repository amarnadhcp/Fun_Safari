import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="grid grid-cols-12 items-center justify-between font-sans">
        <div className='col-span-4  text-gray-400 flex flex-col items-center justify-center'>
            <img src="" alt="" />
            <div className="text-4xl fredoka-texting pit">Fun Safari</div>
        </div>
        <div className='col-span-8  grid grid-cols-7 items-center justify-center '>
            <div className='text-md text-center hover:text-yellow-100 '>Service</div>
            <div className='text-md text-center   hover:text-yellow-100'>Destination</div>
            <div className='text-md text-center  hover:text-yellow-100 '>Booking</div>
            <div className='text-md text-center  hover:text-yellow-100'>Packages</div>
            <div className='text-md text-center  hover:text-yellow-100 '>Testimonial</div>
            <div className='text-md text-center  hover:text-yellow-100 '>Login</div>
            <div className='text-md text-center hover:text-white border border-black py-2 px-2 rounded-xl hover:bg-gray-300'>Signup</div>
        </div>
    </div>
  )
}

export default Navbar
