import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
export default function ConatctCard() {
  return (
    <div className='flex flex-col gap-5'>
        <div className="flex items-center gap-5">
        <p><FaPhoneAlt /></p>
        <p>0778346538</p>
        </div>
        <div className="flex items-center gap-5">
        <a href='https://mail.google.com/chat/u/0/?hl=en#chat/dm/u9ErecAAAAE'><SiGmail /> </a>
        <a href='https://mail.google.com/chat/u/0/?hl=en#chat/dm/u9ErecAAAAE'>datascienceclubusthb@gmail.com</a>
        </div>
        <div className="flex items-center gap-5">
        <p><IoLocationSharp /></p>
        <p className='max-w-[300px]'>University of Science and Technology Houari Boumediene (USTHB) ,Math faculty Bloc C</p>
        </div>
    </div>
  )
}
