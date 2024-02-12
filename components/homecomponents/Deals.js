import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function Deals() {
  const dealAPI = [
    {
      img: "/2.jpg",
      title: "Exclusive Flight Deals Just For You!",
      discount: "50%",
      text: "with Terms and Condition",
      icon: "/tag.png",
      valid: "Valid only on 2 Jan - 9 Jan 2024",
    },
    {
      img: "/1.jpg",
      title: "Exclusive rental Deals Just For You!",
      discount: "50%",
      text: "with Terms and Condition",
      icon: "/tag.png",
      valid: "Valid only on 2 Jan - 9 Jan 2024",
    },
  ];
  return (
    <>
      <div className="my-3 px-2">
        <div className="flex flex-col sm:flex-row items-center justify-between my-3">
          <h1 className="text-lg md:text-xl lg:text-2xl font-medium">
            Exclusive Deals Just For You!
          </h1>
          <button className="flex items-center gap-2 shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
            See All
            <Image
              src="/next.png"
              width={20}
              height={20}
              alt="icon"
              className="w-3 h-3 "
            />
          </button>
        </div>
        <Splide
          options={{
            perPage: 2,
            perMove: 1,
            pagination: false,
            rewind: true,
            autoplay: true,
            type: "loop",
            gap: "1rem",
            breakpoints: {
              640: {
                perPage: 1,
                gap: "1rem",
              },
            },
          }}
        >
          {dealAPI.map((v, i) => (
            <SplideSlide key={i}>
              <div className="relative group">
                <Image
                  src={v.img}
                  alt="img/slide"
                  className="w-full h-[44vh] md:h-[48vh] object-cover rounded-xl"
                  width={500}
                  height={50}
                />
                <div
                  className="absolute inset-0 flex flex-col
                bg-gradient-to-b from-slate-900/80 to-black/30 h-full w-auto px-5 py-5 gap-3 rounded-lg justify-between "
                >
                  <div className="flex items-center justify-between">
                    <Image
                      src={v.icon}
                      alt="icon"
                      width={20}
                      height={20}
                      className="bg-yellow-300/80 bg-opacity-70 rounded-full w-7 h-7 p-1"
                    />
                    <div className="bg-slate-200/50 px-3 py-0.5 rounded-xl bg-opacity-70">
                      <p className="text-xs md:text-sm text-white">{v.valid}</p>
                    </div>
                  </div>
                  <div className=" w-44  flex flex-col">
                    <h1 className="text-white text-lg lg:text-xl xl:text-2xl">
                      {v.title}
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white py-2">
                      {v.discount}
                    </h1>
                  </div>
                  <div>
                    {" "}
                    <p className="text-sm xl:text-base text-white">{v.text}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}
