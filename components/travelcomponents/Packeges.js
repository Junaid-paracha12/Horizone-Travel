import Image from "next/image";
import React from "react";

export default function Activities() {
  const activitiesAPI = [
    {
      img: "/pac1.jpg",
      price :"$700",
      title: "Trip to Bromo",
      address: "Jawa Timur",
      rating: "4.8 (492 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/pac2.jpg",
      price :"$700",
      title: "Trip to Harapan Island",
      address: "Jakarta",
      rating: "5.0 (673 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/pac3.jpg",
      price :"$700",
      title: "Trip to Pangalengan",
      address: "Jawa Barat",
      rating: "4.8 (345 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/pac4.jpg",
      price :"$700",
      title: "Trip to Komodo Island",
      address: "Nusa Tenggara Timur",
      rating: "4.6 (544 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/pac5.jpg",
      price :"$700",
      title: "Trip to Dolphin Island",
      address: "Jakarta",
      rating: "4.8 (567 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/pac6.jpg",
      price :"$700",
      title: "Trip to Kuta",
      address: "Bali",
      rating: "4.8 (994 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/pac7.jpg",
      price :"$700",
      title: "Trip to Waterfall",
      address: "Jawa Timur",
      rating: "4.8 (234 Review)",
      adsicon: "/gps.png",
      raticon: "/star.png",
      icon: "/heart.png",
    },
    {
      img: "/pac8.jpg",
      price :"$700",
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
        
          <div className="flex flex-col text-center sm:text-start my-6">
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium py-2">
              Top travel packeges this month
            </h1>
            <p className="text-slate-700 text-xs md:text-sm">
              Explore most trending tour packeges indonesia
            </p>
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
                  <div className="flex items-center mt-2">
                    <h2 className="text-lg font-semibold">{v.price}</h2>
                    <p className="text-xs text-slate-500/90">/pax</p>
                  </div>
                  <p className="text-xs text-slate-500/90">include taxes & fees</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}
