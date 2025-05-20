import React from 'react'
import ShopWith from '../compont/ShopWith'
import Men from '../compont/Men'

function About() {
  return (
    <>
    <div className=' w-full py-[45px] bg-[#f7444c] text-center' >
        <h1 className=' text-[42px] text-white font-extrabold ' >About us</h1>
    </div> 
    <ShopWith/> 
    <Men/>
    </>
  )
}

export default About