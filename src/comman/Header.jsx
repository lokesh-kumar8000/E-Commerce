import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [toggle, setToggle] = useState(true); 

  return ( 
    <div className="w-full py-4 shadow bg-white sticky top-0 z-[999] "> 
      <div className=" max-w-[1170px] mx-auto"> 
        <div className="flex justify-between items-center px-5 text-[#131313]">
          <img className=" w-[150px] sm:w-[250px] py-1" src="Images/logo.png" alt="" />
          <ul className=" lg:flex hidden ">
            <li className="px-5 py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] ">
              {" "}  
              <Link to="/">home</Link>{" "}
            </li> 
            <li className="px-5 py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] ">
              {" "}
              <Link to="/about">about</Link>{" "}
            </li>
            <li className="px-5 py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] ">
              {" "}
              <Link to="/products">products</Link>{" "}
            </li>
            <li className="px-5 py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] ">
              {" "}
              <Link to="/blog">blog</Link>{" "}
            </li>
            <li className="px-5 py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] ">
              {" "}
              <Link to="/testmonial">testimonial</Link>{" "}
            </li> 
          </ul>
          {toggle ? ( 
            <IoMenu 
              onClick={() => setToggle(!toggle)}
              className=" block lg:hidden text-2xl  cursor-pointer"
            /> 
          ) : (
            <RxCross1
              onClick={() => setToggle(!toggle)}
              className=" block lg:hidden text-2xl  cursor-pointer"
            /> 
          )} 
           <ul className= { ` duration-500 lg:hidden w-full h-screen text-white  bg-black fixed top-[65px] md:top-[85px] ${ toggle? 'left-[-100%]':'left-[0px]'  } ` } >
            <li className="px-5 py-3 lg:py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] shadow-2xl  ">
              {" "}
              <Link to="/" onClick={() => setToggle(!toggle)} >home</Link>{" "} 
            </li>
            <li className="px-5 py-3 lg:py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] shadow-2xl  ">
              {" "}
              <Link to="/about" onClick={() => setToggle(!toggle)} >about</Link>{" "} 
            </li>
            <li className="px-5 py-3 lg:py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] shadow-2xl  ">
              {" "}
              <Link to="/products" onClick={() => setToggle(!toggle)} >products</Link>{" "} 
            </li>
            <li className="px-5 py-3 lg:py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] shadow-2xl  ">
              {" "}
              <Link to="/blog" onClick={() => setToggle(!toggle)} >blog</Link>{" "}
            </li>
            <li className="px-5 py-3 lg:py-1 uppercase font-bold cursor-pointer  hover:text-[#f7444e] shadow-2xl  ">
              {" "}
              <Link to="/testmonial" onClick={() => setToggle(!toggle)} >testimonial</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
