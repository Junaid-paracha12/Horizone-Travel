import Image from "next/image";
import React from "react";

export default function Activities() {
  const activitiesAPI = [
    {
      img: "/a1.jpg",

      title: "Jakarta Food Corner",
      address: "Indonesia",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/a2.jpg",

      title: "Sushi Symphny soiree",
      address: "Japan",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/a3.jpg",

      title: "Egg Trailblazers Tour",
      address: "Mexico",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/a4.jpg",

      title: "Pasta Bonanza Bash",
      address: "Italy",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/a5.jpg",

      title: "Jakarta Food Corner",
      address: "Indonesia",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/a6.jpg",

      title: "Sushi Symphny soiree",
      address: "Japan",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/a8.jpg",

      title: "Egg Trailblazers Tour",
      address: "Mexico",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/a7.jpg",

      title: "Pasta Bonanza Bash",
      address: "Italy",
      rating: "4.8 (2,345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
  ];
  return (
    <>
      <div className=" px-2">
        <div className="flex flex-col  ">
          <div className="flex flex-col text-center sm:text-start">
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium py-2">
              Top trending activities worldwide
            </h1>
            <p className="text-slate-700 text-xs md:text-sm">
              Explore the most activities globally for an unforgettable
              experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between my-4 flex-wrap text-center">
            <div className="flex items-center flex-wrap gap-4 ">
              <p className="bg-slate-200/50 bg-opacity-65 shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                Culinary Delight
              </p>
              <p className="shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                Adventure Seekers
              </p>
              <p className="shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                Cultural Immersion
              </p>
              <p className="shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                Outdoor Exploration
              </p>
            </div>
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 md:gap-4">
          {activitiesAPI.map((v, i) => (
            <div key={i}>
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
                      className="w-3 h-3"
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
                      className="w-3 h-3"
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    <p className=" text-slate-700/70 text-xs md:text-sm">
                      {v.rating}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
