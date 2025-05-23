import React from "react";

function Products() {
  const ProductData = [
    {
      img: "Images/p1.png", 
      type: `Men's Shirt `,
      price: "$75 ",
    },
    {
      img: "Images/p2.png",
      type: `Men's Shirt `,
      price: "$80 ",
    },
    {
      img: "Images/p3.png",
      type: ` Women's Dress `,
      price: "$68 ",
    },
    {
      img: "Images/p4.png",
      type: `Women's Dress `,
      price: "$70 ",
    },
    {
      img: "Images/p5.png",
      type: `Women's Dress `,
      price: "$75 ",
    },
    {
      img: "Images/p6.png",
      type: `Women's Dress `,
      price: "$68 ",
    },
    {
      img: "Images/p7.png",
      type: `Women's Dress `,
      price: "$80 ",
    },
    {
      img: "Images/p8.png",
      type: `Men's Shirt `,
      price: "$65 ",
    },
    {
      img: "Images/p9.png",
      type: `Men's Shirt `,
      price: "$65 ",
    },
    {
      img: "Images/p10.png",
      type: `Men's Shirt `,
      price: "$65 ",
    },
    {
      img: "Images/p11.png",
      type: `Men's Shirt `,
      price: "$65 ",
    },
    {
      img: "Images/p12.png",
      type: `Women's Dress `,
      price: "$65 ",
    },
  ];

  return ( 
    <div className=" w-full py-[70px] "> 
      <div className=" max-w-[1170px] mx-auto "> 
        <h2 className=" text-center font-bold text-[40px] sm:text-[56px] "> 
          {" "}
          Our <span className=" text-[#f7444e] "> Products </span>{" "}
        </h2>
        <div className=" sm:grid grid-cols-3 px-3 lg:px-0">
          {ProductData.map((d, i) => {
            return <ProductUi img={d.img} type={d.type} price={d.price} />;
          })}
        </div>
        <div className=" flex justify-center items-center mt-[45px]  ">
          <button className=" bg-[#f7444e] border border-1-[#f7444e] text-white py-[10px] px-[40px] tracking-wide font-light cursor-pointer hover:bg-transparent hover:text-[#f7444e] duration-200 ">
            View All products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;

const ProductUi = (props) => {
  console.log('first',props)
  return (
    <div className=" cols-span-1 mt-[25px] p-[35px] mx-[15px] mb-[4px] shadow bg-[#f7f8f9] cursor-pointer hover:scale-102 duration-500 relative ">
      <div className="flex justify-center ">
        <img
          src={props.img}
          className=" max-w-[124px] max-h-[160px] py-6 "
          alt=""
        />
      </div>
      <div className=" flex justify-between font-bold text-[16px] lg:text-[18px] my-[10px] ">
        <h4>{props.type}</h4>
        <h4> {props.price} </h4>
      </div>
    </div>
  );
};
