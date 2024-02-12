import Booking from "@/carcomponents/Booking";
import Discount from "@/carcomponents/Discount";
import Hero from "@/carcomponents/Hero";
import Journey from "@/carcomponents/Journey";
import Topcars from "@/carcomponents/Topcars";





export default function index() {
  return (
    <div className="app-container flex flex-col gap-8">
    <Hero />
    <Topcars />
    <Journey />
    <Discount/>
    <Booking />
    </div>
  );
}
