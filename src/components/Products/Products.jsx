import React from "react";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "women ethnic",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "women ethnic",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "women ethnic",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "women ethnic",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "women ethnic",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* {Header Section} */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sit harum vitae temporibus esse sunt.
          </p>
        </div>
        {/* {Body Section} */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items center gap-5">
            {/* {Card Section} */}
            {ProductData.map((data) => (
              <div key={data.id} className="space-y-3">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
