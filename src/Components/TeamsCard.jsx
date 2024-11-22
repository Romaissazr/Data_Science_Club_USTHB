import React from 'react'

export default function TeamsCard({img,title,teamdes}) {
  return (
    <div className='bg-CardTeams bg-opacity-80  px-2 text-center rounded-xl  h-[350px]  flex items-center-center items-center   flex-col'>
 <img src={img}alt=""  className='w-[180px] '/>
 <div className="">
  <h1 className='text-xl my-2 font-semibold'>{title}</h1>
  <p className='text-sm '>{teamdes}</p>
 </div>
    </div>
  )
}


