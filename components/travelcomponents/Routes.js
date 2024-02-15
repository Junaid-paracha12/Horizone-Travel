import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";

export default function Routes() {
  const routesAPI = [
    {
      img: "/cou1.jpg",
      icon: "/heart.png",
      title: "Bandung to jakarta",
      address: "CityHopper Express",
      type: "Executive Bus",
      adsicon: "/trainicon.png",
      typeicon: "/circle.png",
      prize: "$49",
      text: "Start from",
    },
    {
      img: "/cou2.jpg",
      icon: "/heart.png",
      title: "Jakarta to Semarang",
      address: "UrbanSwift Travel",
      type: "Economy",
      adsicon: "/trainicon.png",
      typeicon: "/circle.png",
      prize: "$99",
      text: "Start from",
    },
    {
      img: "/cou3.jpg",
      icon: "/heart.png",
      title: "Surabaya to Yogyakarata",
      address: "MetroWave",
      type: "Double-Decker Bus",
      adsicon: "/trainicon.png",
      typeicon: "/circle.png",
      prize: "$49",
      text: "Start from",
    },
    {
      img: "/cou4.jpg",
      icon: "/heart.png",
      title: "Medan to Aceh",
      address: "TravelEase Transport",
      type: "Luxury",
      adsicon: "/trainicon.png",
      typeicon: "/circle.png",
      prize: "$149",
      text: "Start from",
    },
  ];
  return (
    <>
      <div className="px-2">
        <div className="flex flex-col gap-2 text-center sm:text-start">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">
            Popular rail routes this month
          </h1>
          <p className="text-slate-700 text-sm md:text-base">
            Discover the most trending hotels worldwide for an unforgetable
            experience.
          </p>
          <div className="flex flex-col sm:flex-row  items-center justify-between my-3 gap-6 ">
            <div className="flex items-center gap-6">
              <p className="bg-slate-200/50 shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                France
              </p>
              <p className="shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                Germany
              </p>
              <p className="shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                Italy
              </p>
              <p className="shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                Spain
              </p>
            </div>
          </div>
        </div>
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            pagination: false,
            rewind: true,
            autoplay: true,
            type: "loop",
            gap: "1rem",
            breakpoints: {
              1200: {
                gap: "1rem",
              },
              1020: {
                perPage: 3,
                gap: "1rem",
              },
              756: {
                perPage: 2,
                gap: "1rem",
              },
              640: {
                perPage: 1,
                gap: "1rem",
              },
            },
          }}
        >
          {routesAPI.map((v, i) => (
            <SplideSlide key={i}>
              <div className="relative group">
                <Image
                  src={v.img}
                  alt="img/slide"
                  className="w-full h-[33vh] object-cover rounded-xl"
                  width={300}
                  height={300}
                />
                <span className="absolute top-0 right-0 p-2 ">
                  <Image
                    src={v.icon}
                    width={20}
                    height={20}
                    alt="icon"
                    className="w-4 h-4 fill-slate-300"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <h1 className="text-base md:text-lg font-semibold">
                  {v.title}
                </h1>
                <div> 
                  <span className="flex items-center gap-1">
                    {" "}
                    <Image
                      src={v.typeicon}
                      className="w-3 h-3 md:h-4 md:w-4"
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    <p className=" text-slate-700/70 text-xs md:text-sm">
                      {v.type}
                    </p>
                  </span>
                  <span className="flex items-center gap-1">
                    {" "}
                    <Image
                      src={v.adsicon}
                      className="w-3 h-3 md:h-4 md:w-4"
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    <p className="text-slate-700/70 text-xs md:text-sm">
                      {v.address}
                    </p>
                  </span>
                 
                </div>
                <div>
                  <p className="text-xs md:text-sm text-slate-700/70 ">
                    {v.text}
                  </p>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {v.prize}
                  </h2>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}
