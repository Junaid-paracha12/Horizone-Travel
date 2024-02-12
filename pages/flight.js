
import Booking from '@/components/flightcomponents/Booking'
import Discount from '@/components/flightcomponents/Discount'
import Flightdeals from '@/components/flightcomponents/Flightdeals'
import Flighthero from '@/components/flightcomponents/Flighthero'
import Journey from '@/components/flightcomponents/Journey'
import Footer from '@/components/homecomponents/Footer'
import Navbar from '@/components/homecomponents/Navbar'

import React from 'react'

export default function flight() {
  return (
  <div className='app-container flex flex-col gap-8'>
  <Navbar />
  <Flighthero />
  <Flightdeals />
  <Journey />
  <Discount />
  <Booking />
  <Footer />
  </div>
  )
}
