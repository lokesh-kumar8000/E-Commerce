import React from "react";
import Slider from "react-slick";

function Testmonal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  const Review = [
    {
      img: "../public/images/client.jpg",
      name: "Anna Trevor",
      pera: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
    },
    {
      img: "../public/images/client.jpg",
      name: "Anna Trevor",
      pera: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
    },
    {
      img: "../public/images/client.jpg", 
      name: "Anna Trevor",
      pera: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.",
    },
  ];
  return (
    <div className=" w-full py-[70px] ">
      <div className=" mx-auto max-w-[1179px] ">
        <div className=" text-3xl sm:text-[56px] px-[20px] font-bold text-center ">
          Customer's Testimonial
        </div>
        <Slider {...settings}>
          {Review.map((d, i) => {
            return <ReviewUi img={d.img} name={d.name} pera={d.pera} key={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testmonal;

const ReviewUi = () => {
  return (
    <div className=" mt-[56px] mx-[20px] sm:mx-[95px] ">
      <div className=" flex justify-center ">
        <img
          className=" w-[150px] rounded-full "
          src="../public/client.jpg"
          alt=""
        />
      </div>
      <div className=" text-center ">
        <h5 className=" font-bold py-3 text-xl ">Anna Trevor</h5>
        <div className=" text-[15px] tracking-wider text-gray-400  ">
          {" "}
          Customer{" "}
        </div>
        <p className=" my-3 font-extralight tracking-wider  ">
          Dignissimos reprehenderit repellendus nobis error quibusdam? Atque
          animi sint unde quis reprehenderit, et, perspiciatis, debitis totam
          est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus
          accusantium sapiente nam! Quaerat.
        </p>
      </div>
    </div>
  );
};
