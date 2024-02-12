import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";

export default function Visited() {
  const visitedAPI = [
    {
      img: "/hotel1.jpg",
      icon: "/heart.png",
      title: "Azure Oasis",
      address: "Maldives",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      prize: "$180",
      text: "Include Taxex & fees",
    },
    {
      img: "/hotel3.jpg",
      icon: "/heart.png",
      title: "Opulent Heights",
      address: "Dubia,UAE",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      prize: "$180",
      text: "Include Taxex & fees",
    },
    {
      img: "/hotel5.jpg",
      icon: "/heart.png",
      title: "Bella Vista",
      address: "Amalfi Coast,Italy",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      prize: "$180",
      text: "Include Taxex & fees",
    },
    {
      img: "/hotel2.jpg",
      icon: "/heart.png",
      title: "Majestic Serenity Palace",
      address: "Kyoto,Japan",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      prize: "$180",
      text: "Include Taxex & fees",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5 px-2">
        <div className="flex flex-col gap-2 text-center sm:text-start px-4 sm:px-2 py-5">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">
            Most visited hotel this month
          </h1>
          <p className="text-slate-700 text-sm md:text-base">
            trending exceptional hospitality that captivated travelers this month.
          </p>
         
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
          {visitedAPI.map((v, i) => (
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
                  <span className="flex items-center gap-1">
                    {" "}
                    <Image
                      src={v.raticon}
                      className="w-3 h-3 md:h-4 md:w-4"
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    <p className=" text-slate-700/70 text-xs md:text-sm">
                      {v.rating}
                    </p>
                  </span>
                </div>
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {v.prize}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-700/70 ">
                    {v.text}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}
