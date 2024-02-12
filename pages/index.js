
import Activities from "@/components/homecomponents/Activities";
import Deals from "@/components/homecomponents/Deals";
import Footer from "@/components/homecomponents/Footer";
import Hero from "@/components/homecomponents/Hero";
import Memories from "@/components/homecomponents/Memories";
import Navbar from "@/components/homecomponents/Navbar";
import Villas from "@/components/homecomponents/Villas";
import React from "react";

export default function home() {
  return (
    <div className="app-container flex flex-col gap-8">
      <Navbar />
      <Hero />
      <Deals />
      <Villas />
      <Activities />
      <Memories />
      <Footer />
    </div>
  );
}
