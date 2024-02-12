import Image from "next/image";
import React from "react";

export default function Flightdeals() {
  const flightAPI = [
    {
      imgsrc: "/cou1.jpg",
      title: "Singapore",

      text: "include taxes & fees",
      nexticon: "/next.png",
      componay1: "HorizonWings",
      componay2: "SkyVista Airlines",
      icon2: "/circle.png",
      icon1: "/arrow.png",
      date1: "Wed,6 Mar 2024",
      date2: "Wed,13 Mar 2024",
      class1: "Economy Class",
      class2: "First Class",
      price1: "$120",
      price2: "$200",
    },
    {
      imgsrc: "/cou2.jpg",
      title: "Malaysia",

      text: "include taxes & fees",
      nexticon: "/next.png",
      componay1: "ZenAir Express",
      componay2: "Stellarjet Airways",
      icon2: "/circle.png",
      icon1: "/arrow.png",
      date1: "Wed,6 Mar 2024",
      date2: "Wed,13 Mar 2024",
      class1: "Business Class",
      class2: "Business Class",
      price1: "$180",
      price2: "$200",
    },
    {
      imgsrc: "/cou3.jpg",
      title: "Thiland",

      text: "include taxes & fees",
      nexticon: "/next.png",
      componay1: "BlueSkies Flights",
      componay2: "PacificGide Airways",
      icon2: "/circle.png",
      icon1: "/arrow.png",
      date1: "Wed,6 Mar 2024",
      date2: "Wed,13 Mar 2024",
      class1: "First Class",
      class2: "Economy Class",
      price1: "$250",
      price2: "$180",
    },
    {
      imgsrc: "/cou4.jpg",
      title: "Japan",

      text: "include taxes & fees",
      nexticon: "/next.png",
      componay1: "UnityFly Airlines",
      componay2: "SerenityAir",
      icon2: "/circle.png",
      icon1: "/arrow.png",
      date1: "Wed,6 Mar 2024",
      date2: "Wed,13 Mar 2024",
      class1: "Economy Class",
      class2: "First Class",
      price1: "$100",
      price2: "$250",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-6 mx-3">
        <div className="flex flex-col items-center sm:items-start px-2 text-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold py-2 ">
            Explore low-cost flight deals from Indonesia!
          </h1>
          <p className="text-slate-700 text-xs md:text-sm ">
            Act fast - departures within three months!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {flightAPI.map((v, i) => (
            <div key={i}>
              <div className="flex items-center justify-between py-4 px-1">
                <h1 className="text-lg md:text-xl font-semibold">{v.title}</h1>

                <div className="mr-4">
                  <Image
                    src={v.nexticon}
                    width={20}
                    height={20}
                    className="w-3 h-4 md:w-4 md:h-4"
                    alt="icon"
                  />
                </div>
              </div>
              <div>
                <Image
                  src={v.imgsrc}
                  width={200}
                  height={200}
                  alt="img/house"
                  className="h-[25vh] w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 my-4 mx-4">
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg md:text-xl font-semibold">
                    {v.componay1}
                  </h1>
                  <div className="flex items-center gap-1">
                    <Image
                      src={v.icon1}
                      width={10}
                      height={10}
                      className="w-3 h-4 md:w-4 md:h-4"
                    />
                    <p className="text-sm text-slate-700/90">{v.date1}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={v.icon2}
                      width={10}
                      height={10}
                      className="w-3 h-4 md:w-4 md:h-4"
                    />
                    <p className="text-sm text-slate-700/90">{v.class1}</p>
                  </div>
                  <div>
                    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      {v.price1}
                    </h1>
                    <p className="text-xs text-slate-700/90">{v.text}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg md:text-xl font-semibold">
                    {v.componay2}
                  </h1>
                  <div className="flex items-center gap-1">
                    <Image
                      src={v.icon1}
                      width={10}
                      height={10}
                      className="w-3 h-4 md:w-4 md:h-4"
                    />
                    <p className="text-sm text-slate-700/90">{v.date2}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={v.icon2}
                      width={10}
                      height={10}
                      className="w-3 h-4 md:w-4 md:h-4"
                    />
                    <p className="text-sm text-slate-700/90">{v.class2}</p>
                  </div>
                  <div>
                    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      {v.price2}
                    </h1>
                    <p className="text-xs text-slate-700/90">{v.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
