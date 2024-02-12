
import Booking from "@/components/hotelcomponents/Booking";
import Destination from "@/components/hotelcomponents/Destination";
import Hotel from "@/components/hotelcomponents/Hotel";
import Promo from "@/components/hotelcomponents/Promo";
import Visited from "@/components/hotelcomponents/Visited";
import React from "react";
import Hotelhero from "@/components/hotelcomponents/Hotelhero";
import Navbar from "@/components/homecomponents/Navbar";
import Footer from "@/components/homecomponents/Footer";

export default function hotel() {
  return (
    <div className="app-container flex flex-col gap-8">
      <Navbar />
      <Hotelhero />
      <Destination />
      <Hotel />
      <Visited />
      <Promo />
      <Booking />
      <Footer />
    </div>
  );
}
