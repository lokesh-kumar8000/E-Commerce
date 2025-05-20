import React from "react";
import Products from "../compont/Products";

function Product() {
  return (
    <>
      <div className=" w-full py-[45px] bg-[#f7444c] text-center">
        <h1 className=" text-[42px] text-white font-extrabold ">Product List  </h1>
      </div>
      <Products/> 
    </>
  );
}

export default Product;
