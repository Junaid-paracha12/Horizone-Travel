import Booking from "@/components/carcomponents/Booking";
import Discount from "@/components/carcomponents/Discount";
import Hero from "@/components/carcomponents/Hero";
import Journey from "@/components/carcomponents/Journey";
import Topcars from "@/components/carcomponents/Topcars";
import Footer from "@/components/homecomponents/Footer";
import Navbar from "@/components/homecomponents/Navbar";


export default function index() {
  return (
    <div className="app-container flex flex-col gap-8">
    <Navbar />
    <Hero />
    <Topcars />
    <Journey />
    <Discount/>
    <Booking />
    <Footer />
    </div>
  );
}
