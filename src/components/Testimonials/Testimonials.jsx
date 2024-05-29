import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nostrum minima dolor voluptatum odit eius!",
    img: "https://picsum.photos101/101",
  },
  {
    id: 2,
    name: "Wirtz",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nostrum minima dolor voluptatum odit eius!",
    img: "https://picsum.photos102/102",
  },
  {
    id: 3,
    name: "Xhaka",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nostrum minima dolor voluptatum odit eius!",
    img: "https://picsum.photos103/103",
  },
  {
    id: 4,
    name: "Frimpong",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nostrum minima dolor voluptatum odit eius!",
    img: "https://picsum.photos104/104",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Linear",
    pauseOnHover: true,
    pauseonFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slideToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* {Header Section} */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our Customers are Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sit harum vitae temporibus esse sunt.
          </p>
        </div>
        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6 ">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className=" flex flex-col items-center ga-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ''
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
