import React from "react";

function Men() {
  return (
    <div className=" w-full bg-[#d4ced0] ">
      <div className=" max-w-[1170px] mx-auto">
        <div className=" md:grid grid-cols-2  py-[50px] relative z-[1] ">
          <div className=" col-span-1 hidden md:inline ">
            <img src="Images/men-removebg-preview.png" alt="" className=" absolute bottom-0 " />
          </div> 
          <div className=" col-span-1 text-[#002c3e] px-[20px] "> 
            <h2 className=" text-[40px] sm:text-[56px] font-bold mb-2.5  ">#NewArrivals</h2> 
            <p className=" my-5 tracking-wider text-[14px] sm:text-[16px]  " >
              Vitae fugiat laboriosam officia perferendis provident aliquid
              voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
              Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique
              ex unde!
            </p> 
            <button className=" bg-[#f7444e] py-[10px] px-[45px] text-white cursor-pointer " > Shop Now  </button>
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default Men;
