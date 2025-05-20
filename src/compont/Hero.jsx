import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  }; 

  const SliderData = [
    {
      off: "Sale 20% Off",
      text: "On Everything",
      content:
        "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    },
     {
      off: "Sale 20% Off",
      text: "On Everything",
      content:
        "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    },
     {
      off: "Sale 20% Off",
      text: "On Everything",
      content:
        "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    },
  ];

  return (
    <div className=" pt-[90px] pb-[75px] w-full  bg-[url(../public/images/slider-bg.jpg)] bg-cover  relative z-[-5] ">
      <div className=" max-w-[1170px] mx-auto px-5  ">
        <Slider {...settings}> 
            { 
                SliderData.map( 
                    (d,i)=> { 
                        return( 
                            <SliderUi key={i}  off = {d.off} text = {d.text} content = { d.content } /> 
                        ) 
                    } 
                ) 
            } 
        </Slider>
      </div>
    </div>
  );
}

export default Hero;

const SliderUi = () => {
  return (
    <div className="  w-[100%]  ">
      <h2 className=" text-[#002c3e] mb-[15px] text-[40px] sm:text-[72px] font-bold ">
        <span className=" text-[#f7444e] ">Sale 20% Off</span> <br />
        <span>On Everything</span>
      </h2>
      <p className=" leading-7 text-[14px] sm:text-[16px] ">
        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
        fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
        molestias, veniam, vel architecto veritatis delectus repellat modi
        impedit sequi.
      </p>
      <button className=" px-[45px] py-[12px] mt-4 font-semibold bg-[#f7444e] text-white ">
        {" "}
        Shop Now{" "}
      </button>
    </div>
  );
};
