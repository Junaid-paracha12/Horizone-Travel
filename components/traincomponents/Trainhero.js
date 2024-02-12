import Image from "next/image";
import React from "react";

export default function Trainhero() {
  return (
    <>
      <div className="my-1.5">
        <div className="relative">
          <Image
            src="/train.jpg"
            alt="hero/img"
            className="h-[40vh] md:h-[100vh] w-full object-cover rounded-lg"
            width={3000}
            height={100}
          />
          <div className="absolute inset-0 flex flex-col gap-6   bg-gradient-to-b from-slate-900/80 to-black/30 rounded-lg justify-center md:justify-end py-5 px-4 ">
            <div className="mb-0 md:mb-60 lg:mb-56 text-center md:text-start">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                Navigate the World by Rail
              </h1>
            </div>
          </div>
        </div>{" "}
        <div className="md:absolute bottom-0 left-0 right-0 my-4 mx-6">
          <div className="flex flex-col gap-5 h-auto bg-white rounded-lg px-4 py-5  shadow-sm ">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
              <h1 className="text-base md:text-lg lg:text-xl font-semibold text-center sm:text-start">
                Navigate the World by Rail
              </h1>
              <div className="">
                <button className="bg-black text-xs md:text-sm text-white py-1.5 px-3 rounded-lg">
                  Europe
                </button>
                <button className="bg-white text-xs md:text-sm py-1.5 px-2">
                  Japan
                </button>
                <button className="bg-white text-xs md:text-sm py-1.5 px-2">
                  Indonesia
                </button>
                
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="">
                <p className="text-xs md:text-sm font-semibold">From</p>
                <div className="flex items-center gap-2">
                  <div className="relative w-full">
                    <input
                      placeholder="Jakarta(CGK)"
                      type="text"
                      className="px-8 w-full placeholder:text-sm border bg-slate-200/50  py-1.5 rounded-lg"
                    />
                    <span className="absolute left-2 top-2.5 ">
                      <Image
                        src="/trainicon.png"
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
                  <span className="bg-black py-2 px-2 rounded-full">
                    <Image
                      src="/loading.png"
                      width={20}
                      height={20}
                      className="w-3 h-3 "
                    />
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold">to</p>
                <div className="relative">
                  <input
                    placeholder="Denpaser(DPS)"
                    type="text"
                    className="px-8 w-full placeholder:text-sm border bg-slate-200/50  py-1.5 rounded-lg"
                  />
                  <span className="absolute left-2 top-2.5 ">
                    <Image
                      src="/trainicon.png"
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
                <p className="text-xs md:text-sm font-semibold">Departure</p>
                <div className="relative">
                  <input
                    placeholder="14 jan 2024"
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
                <p className="text-xs md:text-sm font-semibold">Return</p>
                <div className="relative">
                  <input
                    placeholder="Add date"
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
              <div>
                <p className="text-xs md:text-sm font-semibold">Passenger</p>
                <div className="relative">
                  <input
                    placeholder="1 adult"
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

                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-sm">
                  Luxury
                </button>
                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-xs lg:text-sm">
                  Executive 
                </button>
                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-xs lg:text-sm">
                  Business 
                </button>
                <button className="shadow-sm bg-white py-1.5 px-2 rounded-2xl text-xs lg:text-sm">
                  Economy 
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
    </>
  );
}
