import React, { useState } from "react";
import Activities from "@/components/homecomponents/Activities";
import Deals from "@/components/homecomponents/Deals";
import Footer from "@/components/homecomponents/Footer";
import Hero from "@/components/homecomponents/Hero";
import Memories from "@/components/homecomponents/Memories";
import Navbar from "@/components/homecomponents/Navbar";
import Villas from "@/components/homecomponents/Villas";
import Image from "next/image";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Perform your authentication logic here
    // For the demo, I'm just checking if both email and password are non-empty
    if (email && password) {
      // Assuming authentication is successful, trigger onSignIn callback
      setIsAuthenticated(true);
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="app-container flex flex-col gap-8">
       <Navbar />
      {isAuthenticated ? (
        <>
          <Hero />
          <Deals />
          <Villas />
          <Activities />
          <Memories />
          <Footer />
        </>
      ) : (
        
        <div className="relative my-2">
          
          <Image
            src="/pac2.jpg"
            alt="img"
            width={2000}
            height={500}
            className="w-full xl:h-[100vh]  rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex flex-col gap-6   bg-gradient-to-b from-slate-900/80 to-black/30 rounded-lg  py-6 px-4 justify-end ">
            <div className="flex items-end w-full justify-end ">
              <div className="bg-white flex flex-col w-96 p-4 gap-2 rounded-md mt-10">
                <div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Welcome Back!</h1>
                  <p className="text-xs text-slate-500">
                    Hey there! Ready to jump back in?
                  </p>
                </div>
                <button className="border border-slate-500/60 rounded-md button-theme flex items-center gap-2  justify-center">
                  Continue with Linkedin
                  <Image src="/google.png" width={20} height={20} className="h-5 w-5"/>
                </button>
                <button className="border border-slate-500/60 rounded-md button-theme flex items-center gap-2  justify-center">
                  Continue with Apple
                  <Image src="/apple.png" width={20} height={20} className="h-5 w-5"/>
                </button>
                <label className="flex flex-col">
                  Email Address
                  <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Username or Email"
                    className="py-1.5 px-7 w-full"
                  />
                  <span className="absolute left-1 top-2">
                    <Image src="/email.png" width={20} height={20} className="h-5 w-5" />
                  </span>
                  </div>
                </label>
                <label className="flex flex-col">
                  Password
                  <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="py-1.5 px-7 w-full"
                  />
                   <span className="absolute left-1 top-2">
                    <Image src="/lock.png" width={20} height={20} className="h-5 w-5" />
                  </span>
                  </div>
                </label>
                <button
                  onClick={handleSignIn}
                  className="rounded-md button-theme bg-black text-white"
                >
                  Login
                </button>
                <div className="flex items-center justify-center">
                  <u>
                    <h3 className="font-semibold text-sm">
                      Forgot Your Password?
                    </h3>
                  </u>
                  <p className="text-xs">Let's get you back in.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                Book Your Adventure Now
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
