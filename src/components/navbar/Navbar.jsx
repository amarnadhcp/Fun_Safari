import React from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="grid grid-cols-12 items-center justify-between font-sans ">
      <div className="col-span-4  flex flex-col items-center justify-center">
        <img src="" alt="" />
        <div className="text-lg md:text-2xl lg:text-4xl text-white fredoka-texting pit">Fun Safari</div>
      </div>
      <div className="md:hidden text-2xl text-white col-start-12"
      >
        <GiHamburgerMenu />
      </div>
      <div className="max-md:hidden col-span-8  grid grid-cols-6 lg:grid-cols-7 items-center justify-center cursor-pointer">
        <div className="text-md text-center  active:translate-x-5 transition-transform duration-3000 hover:text-white  shadow-2xl ">
          Service
        </div>
        <div className="text-md text-center  active:translate-x-5 transition-transform duration-3000 hover:text-white  shadow-2xl">
          Destination
        </div>
        <div className="text-md text-center  active:translate-x-5 transition-transform duration-3000 hover:text-white  shadow-2xl ">
          Booking
        </div>
        <div className="text-md text-center  active:translate-x-5 transition-transform duration-3000 hover:text-white  shadow-2xl">
          Packages
        </div>
        <div className="text-md text-center  active:translate-x-5 transition-transform duration-3000 hover:text-white  shadow-2xl ">
          Testimonial
        </div>
        <div className="border border-black rounded-lg flex justify-center items-center gap-1 py-2 shadow-xl hover:scale-105">
          <div className="text-sm text-center  hover:text-white  shadow-2xl hover:scale-110 ">
            Login
          </div>
          <p>{`/`}</p>
          <div className="text-sm text-center  hover:text-white  shadow-2xl hover:scale-110">
            SignUp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
