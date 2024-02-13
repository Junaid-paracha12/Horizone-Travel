import Image from "next/image";
import React, { useEffect, useState } from "react";

import PopupModal from "./PopupModal";
import Link from "next/link";

export default function Navbar() {
  const [navState, setNavState] = useState(false);
  const [popupModalState, setPopupModalState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 opacity-100 z-40 mx-1 ${
          navState ? "bg-slate-700/25 backdrop-blur-md top-0 py-3 " : " top-3"
        } transition-all duration-300`}
      >
        <nav className=" flex items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center ">
              <h1 className="text-white text-xl lg:text-2xl font-semibold pr-1">
                Horizone
              </h1>
            </a>
            <ul className="hidden md:flex items-center gap-3 text-white ">
              <Link href={"/hotel"} className="text-xs lg:text-base">Hotel</Link>
              <Link href={"/flight"} className="text-xs lg:text-base">Flight</Link>
              <Link href={"/train"} className="text-xs lg:text-base">Train</Link>
              <Link href={"/travel"} className="text-xs lg:text-base">Travel</Link>
              <Link href={"/carrental"} className="text-xs lg:text-base">Car Rental</Link>
            </ul>
          </div>
          <div className="relative group md:flex items-center hidden">
            <input
              placeholder="Search Destination..."
              type="text"
              className="w-48 lg:w-60 bg-slate-200/25 backdrop-blur-md px-2 py-1 rounded-lg"
            />
            <div className="absolute right-2">
              <Image
                src="/loupe.png"
                width={20}
                height={20}
                alt="icon"
                className="w-4 h-4"
              />
            </div>
          </div>

          <ul className="hidden md:flex items-center  gap-2">
            <li className="flex items-center gap-1 text-white text-xs lg:text-base">
              <span className="bg-white p-1 rounded-full ">
                <Image
                  src="/global.png"
                  width={20}
                  height={20}
                  alt="icon"
                  className="w-4 h-4 "
                />
              </span>
              EN
            </li>
            <li className="">
              <button
                type="button"
                className="px-2.5 text-xs lg:text-base text-white button-theme"
              >
                Log In
              </button>
            </li>
            <li className="bg-white rounded-lg">
              <button type="button" className="button-theme">
                Sign Up
              </button>
            </li>
          </ul>
          <ul className="md:hidden flex items-center ">
            <li className=" grid items-center">
              <button
                className={`flex items-center gap-2  ${
                  navState ? "" : " "
                } p-1.5 rounded-full`}
                onClick={() => setPopupModalState(!popupModalState)}
              >
                <Image
                  src="/menu.png"
                  alt="menu/png"
                  width={20}
                  height={20}
                  className={`   ${navState ? "text-white" : "text-black"}`}
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {popupModalState && <PopupModal />}
    </>
  );
}
