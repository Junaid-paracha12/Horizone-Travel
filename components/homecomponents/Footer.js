import Image from "next/image";
import React from "react";

export default function Footer() {
  const footerAPI = {
    sociallinks: [
      { icon: "/instagram.png" },
      { icon: "/twitter.png" },
      { icon: "/facebook.png" },
      { icon: "/discord.png" },
      { icon: "/tik-tok.png" },
    ],
  };

  return (
    <>
      <div className=" bg-black px-7 py-6 my-1.5 rounded-lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 max-w-60">
            <h1 className="text-xl text-white font-semibold">Horizono</h1>
            <p className="text-sm text-slate-100/50">
              Our mission is to equip modern explorers with cutting-edge,
              functional, and stylish bags that elevate every adventure.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-start  lg:items-center">
            <h1 className="text-lg font-semibold text-white">About</h1>
            <ul className="grid item-start gap-2">
              <li className="text-slate-100/50 text-sm">About Us</li>
              <li className="text-slate-100/50 text-sm">Blog</li>
              <li className="text-slate-100/50 text-sm">Career</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-white">Support</h1>
            <ul className="grid item-start gap-2">
              <li className="text-slate-100/50 text-sm">Contact Us</li>
              <li className="text-slate-100/50 text-sm">Return</li>
              <li className="text-slate-100/50 text-sm">FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-xl text-white ">Get Updates</h1>
            <div className="relative group flex items-center ">
              <input
                placeholder="Enter Your Email"
                type="email"
                className="w-full  bg-slate-200/25 backdrop-blur-md px-2 py-2 rounded-lg placeholder:text-sm"
              />
              <div className="absolute right-1">
                <button className="text-black bg-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold button-theme">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex items-center justify-around my-4">
              {footerAPI.sociallinks?.map((val, i) => (
                <div key={i} className="bg-slate-600/50  rounded-full">
                  <Image
                    src={val.icon}
                    alt="social/icons"
                    className="w-9 h-9 p-2.5"
                    width={20}
                    height={20}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-5">
          <p className="text-xs lg:text-sm text-white">
            ©2023 OROBROUS ALL RIGHT RESERVED
          </p>
          <ul className="flex items-center gap-5 px-1 py-2 md:py-0">
            <li className="text-xs lg:text-sm text-white">Privacy Policy</li>
            <li className="text-xs lg:text-sm text-white">Terms of Services</li>
          </ul>
        </div>
      </div>
    </>
  );
}
