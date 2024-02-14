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
      {isAuthenticated ? (
        <>
          <Navbar />
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
            src="/pac5.jpg"
            alt="img"
            width={2000}
            height={3000}
            className="w-full h-[100vh] rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col gap-6   bg-gradient-to-b from-slate-900/80 to-black/30 rounded-lg  py-5 px-4 justify-center ">
            <div className="flex items-end w-full justify-end mt-16">
              <div className="bg-white flex flex-col w-96 p-4 gap-4 rounded-md">
                <div>
                  <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                  <p className="text-xs text-slate-500">Hey there! Ready to jump back in?</p>
                </div>
                <button className="ring-1 ring-slate-500/60 rounded-md button-theme">
                  Continue with Linkedin
                </button>
                <button className="ring-1 ring-slate-500/60 rounded-md button-theme">
                  Continue with Apple
                </button>
                <label className="flex flex-col">
                  Email Address
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Username or Email"
                    className=""
                  />
                </label>
                <label className="flex flex-col">
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
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
              <h1 className="text-5xl font-semibold text-white">
                Book Your Adventure Now
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
