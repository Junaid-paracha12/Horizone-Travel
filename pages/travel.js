import React from "react";

import Navbar from "@/components/homecomponents/Navbar";
import Routes from "@/components/travelcomponents/Routes";
import Packeges from "@/components/travelcomponents/Packeges";
import Deals from "@/components/travelcomponents/Deals";
import Booking from "@/components/travelcomponents/Booking";
import Footer from "@/components/homecomponents/Footer";
import Journey from "@/components/travelcomponents/Journey";
import Travelhero from "@/components/travelcomponents/Travelhero";

export default function travel() {
  return (
    <div className="app-container flex flex-col gap-8">
      <Navbar />
      <Travelhero />
      <Routes />
      <Packeges />
      <Journey />
      <Deals />
      <Booking />
      <Footer />
    </div>
  );
}
