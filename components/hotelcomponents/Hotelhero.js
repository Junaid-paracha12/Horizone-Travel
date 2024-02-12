import Image from "next/image";
import React from "react";

export default function Hotelhero() {
  return (
    <>
      <div className="my-1.5">
        <div className="relative">
          <Image
            src="/hotelhero.jpg"
            alt="hero/img"
            className="h-[40vh] sm:h-[100vh] w-full object-fill rounded-lg"
            width={3000}
            height={100}
          />
          <div className="absolute inset-0 flex flex-col gap-6   bg-gradient-to-b from-slate-900/80 to-black/30 rounded-lg justify-center sm:justify-end py-5 px-4">
            <div className="mb-0 sm:mb-60 md:mb-44 text-center sm:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">Find Your Best Staycation</h1>
           </div>
          </div>
        </div>{" "}
         <div className="sm:absolute bottom-0 left-0 right-0 my-4 mx-6 ">
          <div className="flex flex-col gap-5 h-auto bg-white rounded-lg px-4 py-5  shadow-sm ">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs md:text-sm font-semibold">Location</p>
                <div className="relative">
                  <input
                    placeholder="Find Location"
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
                  Check-in and Check-out Date
                </p>
                <div className="relative">
                  <input
                    placeholder="Add Dates"
                    type="text"
                    className="px-8 w-full placeholder:text-sm border bg-slate-200/50  py-1.5 rounded-lg"
                  />
                  <span className="absolute left-2 top-2.5 ">
                    <Image
                      src="/calendar.png"
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
                  Guest and Rooms
                </p>
                <div className="relative">
                  <input
                    placeholder="1 Room,1 Guest"
                    type="text"
                    className="px-8 w-full placeholder:text-sm border bg-slate-200/50  py-1.5 rounded-lg"
                  />
                  <span className="absolute left-2 top-2.5 ">
                    <Image
                      src="/user.png"
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
                <button className="shadow-sm bg-black text-white py-1.5 px-3 rounded-2xl text-xs lg:text-sm">
                  Hotels
                </button>
                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-sm">
                  Villas
                </button>
                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-xs lg:text-sm">
                  Apartments
                </button>
                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-xs lg:text-sm">
                  Resorts
                </button>
                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-xs lg:text-sm">
                  Cottages
                </button>
              </div>
              <button className="flex items-center gap-2 shadow-sm bg-black text-white py-2 px-4 rounded-lg text-xs md:text-sm">
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
    </>
  );
}
