import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="my-1.5">
        <div className="relative">
          <Image
            src="/carhero.jpg"
            alt="hero/img"
            className="h-auto md:h-[100vh] w-full object-cover rounded-lg"
            width={3000}
            height={100}
          />
          <div className="absolute inset-0 flex flex-col gap-6   bg-gradient-to-b from-slate-900/80 to-black/30 rounded-lg justify-end py-5 px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">Rent a Car for Every Journey</h1>
             <div className="w-full">
          <div className="flex flex-col gap-5 h-auto bg-white rounded-lg px-4 py-5  shadow-sm ">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs md:text-sm font-semibold">Departure</p>
                <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    placeholder="City,airport or station"
                    type="text"
                    className="px-8 w-full placeholder:text-sm border bg-slate-200/50  py-1.5 rounded-lg"
                  />
                  <span className="absolute left-2 top-2.5 ">
                    <Image
                      src="/gps.png"
                      width={20}
                      height={20}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </span>
                  <span className="absolute right-2 top-2.5 bg-slate-600/60 rounded-full">
                    <Image
                      src="/down.png"
                      width={20}
                      height={20}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </span>
                 
                </div>
               
                </div>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold">
                  Return Location
                </p>
                <div className="relative">
                  <input
                    placeholder="City,airport or station"
                    type="text"
                    className="px-8 w-full placeholder:text-sm border bg-slate-200/50  py-1.5 rounded-lg"
                  />
                  <span className="absolute left-2 top-2.5 ">
                    <Image
                      src="/gps.png"
                      width={20}
                      height={20}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </span>
                  <span className="absolute right-2 top-2.5 bg-slate-600/60 rounded-full">
                    <Image
                      src="/down.png"
                      width={20}
                      height={20}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold">
                  Pick Up Date & Time
                </p>
                <div className="relative">
                  <input
                    placeholder="14 jan 2024  10:30 AM"
                    type="text"
                    className="px-8 w-full placeholder:text-sm border bg-slate-200/50  py-1.5 rounded-lg"
                  />
                  <span className="absolute left-2 top-2.5 ">
                    <Image
                      src="/arrow.png"
                      width={20}
                      height={20}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </span>
                  <span className="absolute right-2 top-2.5 bg-slate-600/60 rounded-full">
                    <Image
                      src="/down.png"
                      width={20}
                      height={20}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold">
                  Return Date & Time
                </p>
                <div className="relative">
                  <input
                    placeholder="19 jan 2024   04:40 PM"
                    type="text"
                    className="px-8 w-full placeholder:text-sm border bg-slate-200/50  py-1.5 rounded-lg"
                  />
                  <span className="absolute left-2 top-2.5 ">
                    <Image
                      src="/arrowdown.png"
                      width={20}
                      height={20}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </span>
                  <span className="absolute right-2 top-2.5 bg-slate-600/60 rounded-full">
                    <Image
                      src="/down.png"
                      width={20}
                      height={20}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </div>
             
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 ">
              <div className="flex items-center flex-wrap gap-2 ">
                <h1 className="text-sm lg:text-base font-semibold">Filter:</h1>
               
                <button className="shadow-sm bg-black text-white py-1.5 px-4 rounded-2xl text-sm">
                  Without Driver 
                </button>
                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-xs lg:text-sm">
                  With Driver
                </button>
               
                
              </div>
              <button className="flex items-center gap-2 shadow-sm bg-black text-white py-1.5 px-4 rounded-lg text-xs md:text-sm">
                Search
                <Image
                  src="/next1.png"
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-3 h-3 "
                />
              </button>
            </div>
          </div>
        </div>
          </div>
        </div>{" "}
       
      </div>
    </>
  );
}
