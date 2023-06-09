import React from 'react'
import { Link } from 'react-router-dom'
const SideBtns = () => {
  return (
    <>
        {/* ------------------top side Mobile ---------------- */}
            <div className="grid grid-cols-4 gap-1 mx-2 text-center md:hidden max-md:mb-7 max-md:-mt-10">
                <div className='col-span-2 font-medium bg-gradient-to-r from-red-500 to-red-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/">در یک نگاه</Link></div>
                <div className='col-span-2 font-medium bg-gradient-to-r from-green-500 to-green-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds">بورس اوراق بهادار تهران</Link></div>
                <div className='col-span-2 font-medium bg-gradient-to-r from-yellow-500 to-yellow-600  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/iran-exchange">فرابورس ایران</Link></div>
                <div className='col-span-2 font-medium bg-gradient-to-r from-blue-500 to-blue-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/iran-energy-exchange">بورس انرژی ایران</Link></div>
                <div className='col-span-3 w-[133.3%] font-medium bg-gradient-to-r from-purple-500 to-purple-800 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/investment-funds">صندوق های سرمایه گذاری</Link></div>
                <div className='col-span-2 font-medium bg-gradient-to-r from-orange-500 to-orange-700  p-2 border-1 rounded-lg active:shadow-md jumper-hover-btn-center'><Link to="/codal-network">شبکه کدال</Link></div>
                <div className='col-span-2 font-medium bg-gradient-to-r from-pink-500 to-pink-800 p-2 px-3 border-1 rounded-lg active:shadow-md jumper-hover-btn-center'><Link to="/commodity-exchange">بورس کالا</Link></div>
            </div>
            {/* ------------------top side ---------------- */}
            <div className='grid grid-flow-col auto-cols-max px-16 gap-x-2 max-md:hidden xl:absolute xl:flex-row xl:top-20'>
                <div className='inline-block font-medium bg-gradient-to-r from-purple-500 to-purple-800 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/investment-funds">صندوق های سرمایه گذاری</Link></div>
                <div className='inline-block font-medium bg-gradient-to-r from-orange-500 to-orange-700  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/codal-network">شبکه کدال</Link></div>
                <div className='inline-block font-medium bg-gradient-to-r from-blue-500 to-blue-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/iran-energy-exchange">بورس انرژی ایران</Link></div>
                <div className='inline-block font-medium bg-gradient-to-r from-yellow-500 to-yellow-600  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/iran-exchange">فرابورس ایران</Link></div>
                <div className='inline-block font-medium bg-gradient-to-r from-pink-500 to-pink-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/commodity-exchange">بورس کالا</Link></div>
                <div className='inline-block font-medium bg-gradient-to-r from-green-500 to-green-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds">بورس اوراق بهادار تهران</Link></div>
                <div className='inline-flex font-medium text-center  bg-gradient-to-r from-red-500 to-red-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/">در یک نگاه</Link></div>
            </div>
    </>
  )
}

export default SideBtns