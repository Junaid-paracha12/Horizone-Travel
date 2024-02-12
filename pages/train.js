import Footer from '@/components/homecomponents/Footer'
import Navbar from '@/components/homecomponents/Navbar'
import Booking from '@/components/traincomponents/Booking'
import Destination from '@/components/traincomponents/Destination'
import Promo from '@/components/traincomponents/Promo'
import Routes from '@/components/traincomponents/Routes'
import Trendingroutes from '@/components/traincomponents/Trendingroutes'
import Trainhero from '@/components/traincomponents/Trainhero'
import React from 'react'

export default function train() {
  return (
    <div className='app-container flex flex-col gap-8'>
      <Navbar />
      <Trainhero />
      <Routes />
      <Destination />
      <Trendingroutes />
      <Promo />
      <Booking />
      <Footer />
    </div>
  )
}
