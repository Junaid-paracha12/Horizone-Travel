import Image from 'next/image'
import React from 'react'

export default function Destination() {

 const destinationAPI=[
      {
        imgsrc:"/cou1.jpg",
        title:"Jakarta",
        
        nexticon:"/next.png"
      },
      {
        imgsrc:"/cou2.jpg",
        title:"Paris",
       
        nexticon:"/next.png"
      },
      {
        imgsrc:"/cou3.jpg",
        title:"Rome",
    
        nexticon:"/next.png"
      },
      {
        imgsrc:"/cou4.jpg",
        title:"London",
  
        nexticon:"/next.png"
      },
 ]

  return (
    <>
    <div className='flex flex-col gap-6 mx-3'>
       <div className='flex flex-col items-center sm:items-start'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold py-2 '>Favourite destination in world wide</h1>
        <p className='text-slate-700 text-xs md:text-sm '>Discover the most trending hotels worldwide for an unforgetable experience.</p>
       </div>
       <div className="flex items-center gap-6">
              <p className="shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                City
              </p>
              <p className="shadow-sm border py-1.5 px-3 rounded-lg text-xs lg:text-sm font-semibold">
                Country
              </p>
            </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' >
        {destinationAPI.map((v, i) => (
            <div key={i}>
                <div className='flex items-center justify-between py-4 px-1'>
           <div>
            <h1 className='text-xl font-semibold'>{v.title}</h1>
           
           </div>
           <div className='mr-4'>
            <Image src={v.nexticon} width={20} height={20} className='w-4 h-4' alt='icon' />
           </div>
        </div>
                <div>
                    <Image src={v.imgsrc} width={200} height={200} alt='img/house' className='h-[25vh] w-full rounded-lg object-cover'/>
                </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}
