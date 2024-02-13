import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PopupModal() {
  return (
    <>
      <nav className=" fixed top-8 right-11 bg-white  bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-40 h-auto py-5 px-6 transition-transform duration-300">
        <ul className="flex items-start flex-col gap-3  ">
        <Link href={"/hotel"}>Hotel</Link>
          <Link href={"/flight"}>Flight</Link>
          <Link href={"/train"}>Train</Link>
          <Link href={"/travel"}>Travel</Link>
          <Link href={"/carrental"}>Car Rental</Link>
          <li className="flex items-center ">
            <span className="bg-white p-1 rounded-full">
              <Image
                src="/global.png"
                width={20}
                height={20}
                alt="icon"
                className=""
              />
            </span>
            En
          </li>
          <li className="">
            <button
              type="button"
              className="text-base bg-white rounded-lg px-3 py-1.5"
            >
              Log In
            </button>
          </li>
          <li className="bg-white rounded-lg px-3 py-1.5">
            <button type="button" className="text-base ">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
