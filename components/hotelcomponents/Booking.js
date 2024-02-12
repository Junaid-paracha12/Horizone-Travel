import Image from "next/image";
import React from "react";

export default function Booking() {
  return (
    <>
      <div className="my-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 ">
          <div className="grid gap-3">
            <div className="relative">
              <Image
                src="/hotel1.jpg"
                className="w-full h-[41vh] rounded-lg object-cover "
                alt="img"
                width={100}
                height={100}
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-slate-950/80 to-black/70 py-4 px-4 rounded-lg bg-opacity-50 flex flex-col justify-between">
                <div className="">
                  <Image
                    src="/globe.png"
                    width={20}
                    height={20}
                    className="w-8 h-8 bg-slate-200/40 bg-opacity-70 p-2 rounded-lg "
                  />
                </div>
                <div className="max-w-72 ">
                  <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white ">
                    Explore more to get your comfort zone
                  </h1>
                  <p className="text-slate-200 text-sm lg:text-base py-1">
                    Book your perfect stay with us
                  </p>
                </div>
                <div>
                  <button className=" bg-white flex items-center gap-0.5 rounded-lg  button-theme text-sm xl:text-base">
                    Booking Now
                    <Image
                      src="/next.png"
                      width={20}
                      height={20}
                      className="w-4 h-3"
                      alt="ico.png"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hotel2.jpg"
                className="w-full h-[30vh] md:h-[39vh] rounded-lg object-cover"
                alt="img"
                width={2000}
                height={2000}
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-slate-900/80 to-black/30 rounded-lg px-5 ">
                <div className="absolute bottom-0 py-5">
                  <h1 className="text-white text-xl">
                    Hotel Available
                  </h1>
                  <p className="text-white text-4xl font-semibold">1,242,857</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-2 my-4 md:my-0">
            <Image
              src="/hotel1.jpg"
              className="w-full h-auto md:h-[82vh] object-cover rounded-lg"
              width={3000}
              height={3000}
              alt="img"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-slate-900/80 to-black/30 flex items-center text-center justify-center rounded-lg px-6">
              <div className="max-w-md">
                <h1 className="text-xl md:text-2xl xl:text-3xl text-white">
                  Eeyond acommodation,creating memories of a lifetime
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
