import React from "react";
import Image from "next/image";

export default function Topcars() {
  const topcarAPI = [
    {
        title:"Hatchback",
        img:"/yaris.jpg",
        names:"Toyota Yaris",
        text:"Automatic/Manual",
        prize:"$70/day",
        icon3:"/star.png",
        rating:"4.7",
        icon1:"/chair.png",
        person:"3",
    },
    {
        title:"Hatchback",
        img:"/yaris.jpg",
        names:"Toyota Yaris",
        text:"Automatic/Manual",
        prize:"$70/day",
        icon3:"/star.png",
        rating:"4.7",
        icon1:"/chair.png",
        person:"3",
    },
    {
        title:"Hatchback",
        img:"/yaris.jpg",
        names:"Toyota Yaris",
        text:"Automatic/Manual",
        prize:"$70/day",
        icon3:"/star.png",
        rating:"4.7",
        icon1:"/chair.png",
        person:"3",
    },
    {
        title:"Hatchback",
        img:"/yaris.jpg",
        names:"Toyota Yaris",
        text:"Automatic/Manual",
        prize:"$70/day",
        icon3:"/star.png",
        rating:"4.7",
        icon1:"/chair.png",
        person:"3",
    },
    {
        title:"Hatchback",
        img:"/yaris.jpg",
        names:"Toyota Yaris",
        text:"Automatic/Manual",
        prize:"$70/day",
        icon3:"/star.png",
        rating:"4.7",
        icon1:"/chair.png",
        person:"3",
    },
    {
        title:"Hatchback",
        img:"/yaris.jpg",
        names:"Toyota Yaris",
        text:"Automatic/Manual",
        prize:"$70/day",
        icon3:"/star.png",
        rating:"4.7",
        icon1:"/chair.png",
        person:"3",
    },
    {
        title:"Hatchback",
        img:"/yaris.jpg",
        names:"Toyota Yaris",
        text:"Automatic/Manual",
        prize:"$70/day",
        icon3:"/star.png",
        rating:"4.7",
        icon1:"/chair.png",
        person:"3",
    },
  ];
  return (
    <>
      <div className="px-2">
        <div className="flex flex-col gap-2 text-center sm:text-start">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">
            Top picks vehicle this month
          </h1>
          <p className="text-slate-700 text-sm md:text-base">
            Experience the epitome of amazing journey with our top picks
          </p>
         
        </div>
        <div
        className="grid grid-cols-4 gap-4"
        >
          {topcarAPI.map((v, i) => (
            <div key={i}>
              <div className="">
                <h1 className="font-semibold">{v.title}</h1>
                <Image
                  src={v.img}
                  alt="img/slide"
                  className="w-full h-[33vh] object-cover rounded-xl"
                  width={300}
                  height={300}
                />
               
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <h1 className="text-base md:text-lg font-semibold">
                  {v.names}
                </h1>
                <p>{v.text}</p>
                <div>
                 <div className="flex items-center gap-2">
                    <Image src={v.icon1} width={10} height={10} className="w-3 h-3" />
                    <p>{v.person}</p>
                    <Image src={v.icon3} width={10} height={10} className="w-3 h-3" />
                    <p>{v.rating}</p>
                 </div>
                 
                </div>
                <div>
                    <p className="text-xs text-slate-500/90">Start from</p>
                  <h2 className="text-lg md:text-xl  font-semibold">
                    {v.prize}
                  </h2>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
