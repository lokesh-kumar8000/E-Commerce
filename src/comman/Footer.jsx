import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' w-full pt-[90px] pb-[70px] bg-[#f8f8f8]'>
        <div className=' max-w-[1170px] mx-auto ' >
            <div className="sm:flex justify-between flex-wrap px-5 ">
                <div className=' max-w-[360px]  ' >
                    <img className=' max-w-[210px] mb-7 ' src="Images/logo.png" alt="" /> 
                    <div className=' text-[15px] mb-5 '>
                        <strong>ADDRESS:</strong> 
                         28 White tower, Street Name New York City, USA
                    </div>
                    <div className=' text-[15px] mb-5 '>
                        <strong>TELEPHONE:</strong> 
                          +91 987 654 3210
                    </div> 
                     <div className=' text-[15px] mb-5 '>
                        <strong>EMAIL:</strong> 
                           yourmain@gmail.com 
                    </div>
                </div>
                <div className=' max-w-[215px] pt-5 lg:pt-0 ' >
                    <h3 className='text-[18px] mb-[25px] font-bold uppercase '  > menu  </h3> 
                    <ul>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> home </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> about </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> services </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> testimonial </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> blog  </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> contact </Link> </li>
                    </ul>
                </div>
                <div className=' max-w-[215px] pt-5 lg:pt-0 '>
                     <h3 className='text-[18px] mb-[25px] font-bold uppercase '  > account  </h3> 
                    <ul>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> account </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> checkout </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> login </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> register </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> shopping </Link> </li>
                        <li className=' text-[15px] mt-[7px] capitalize ' > <Link> widget </Link> </li>
                    </ul> 
                </div>
                <div className=' max-w-[295px] pt-5 lg:pt-0 '>
                    <h3 className='text-[18px] mb-[25px] font-bold uppercase '  > newsletter  </h3>  
                    <p className=' text-[15px] mb-5 ' >Subscribe by our newsletter and get update protidin.</p> 
                    <div className='flex' >
                        <input className=' border border-gray-400 py-[10px] ps-[11px] pe-[15px] w-full ' type="email"  placeholder='Enter Your Mail..'/> 
                        <button className='bg-red-600 px-[15px] text-white ms-[-5px] font-medium' > Subscribe </button>
                    </div>

                </div> 
            </div> 
        </div> 
    </div> 
  )
}

export default Footer