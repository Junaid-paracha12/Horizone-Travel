import Image from "next/image";
import React from "react";

export default function Promo() {
  const promoAPI = [
    {
      img: "/t2.jpg",
      title: "Unlock Your Journey with Unbeatable Savings",
      discount: "35%",
      text: "with Terms and Condition",
      icon: "/tag.png",
      valid: "Valid only on 2 Jan - 9 Jan 2024",
    },
    {
      img: "/t3.jpg",
      title: "Snag Your Seat with Our Exclusive Promotion",
      discount: "50%",
      text: "with Terms and Condition",
      icon: "/tag.png",
      valid: "Valid only on 2 Jan - 9 Jan 2024",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5 my-3 px-2">
        <div className="flex flex-col sm:flex-row items-center justify-between px-3 py-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Get promo for a cheaper price
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
        <div
         className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {promoAPI.map((v, i) => (
            <div key={i}>
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
                  <div className="flex flex-col">
                    <h1 className="text-white text-lg lg:text-xl xl:text-2xl max-w-56">
                      {v.title}
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white py-2 font-semibold">
                      {v.discount}
                    </h1>
                  </div>
                  <div>
                    {" "}
                    <p className="text-sm  text-white">{v.text}</p>
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
