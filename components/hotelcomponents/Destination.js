import Image from 'next/image'
import React from 'react'

export default function Destination() {

 const destinationAPI=[
      {
        imgsrc:"/des3.jpg",
        title:"Villas",
        iconsrc:"/home.png",
        text:"12,984 available",
        nexticon:"/next.png"
      },
      {
        imgsrc:"/des2.jpg",
        title:"Apartments",
        iconsrc:"/home.png",
        text:"10,984 available",
        nexticon:"/next.png"
      },
      {
        imgsrc:"/des1.jpg",
        title:"Resorts",
        iconsrc:"/home.png",
        text:"384 available",
        nexticon:"/next.png"
      },
      {
        imgsrc:"/des4.jpg",
        title:"Cottages",
        iconsrc:"/home.png",
        text:"264 available",
        nexticon:"/next.png"
      },
 ]

  return (
    <>
    <div className='flex flex-col gap-6 mx-3'>
       <div className='flex flex-col items-center sm:items-start'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold py-2 '>Discover your destination</h1>
        <p className='text-slate-700 text-xs md:text-sm '>Explore our range of property types for every traveler's preference.</p>
       </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' >
        {destinationAPI.map((v, i) => (
            <div key={i}>
                <div className='flex items-center justify-between py-4 px-1'>
           <div>
            <h1 className='text-xl font-semibold'>{v.title}</h1>
            <div className='flex items-center'>
              <Image src={v.iconsrc} width={20} height={20} alt='icon' className='' />
            <p className='text-xs text-slate-700'>{v.text}</p>
           </div>
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
