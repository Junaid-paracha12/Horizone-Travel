import Navbar from '@/components/homecomponents/Navbar'
import Destination from '@/components/traincomponents/Destination'
import Routes from '@/components/traincomponents/Routes'
import Trainhero from '@/components/traincomponents/Trainhero'
import React from 'react'

export default function train() {
  return (
    <div className='app-container flex flex-col gap-8'>
      <Navbar />
      <Trainhero />
      <Routes />
      <Destination />
    </div>
  )
}
