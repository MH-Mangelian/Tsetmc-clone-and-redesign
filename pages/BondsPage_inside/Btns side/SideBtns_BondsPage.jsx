import { Link } from "react-router-dom"

const SideBtns_BondsPage = () => {
  return (
    <>
        {/* -------------------------btns side Mobile Display------------------------------- */}
        <div className="grid grid-cols-4 gap-1 mx-2 text-center md:hidden max-md:mb-7 max-md:mt-1">
                  <div className='col-span-2 font-medium bg-gradient-to-r from-blue-600 to-blue-900 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds">در یک نگاه</Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-yellow-500 to-yellow-700 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds/indicators"></Link>شاخص ها</div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-purple-700 to-pink-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds/prices">قیمت ها</Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-cyan-600 to-cyan-900  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="">عرضه و تقاضا</Link></div>
                  <div className='col-span-3 w-[133.3%] font-medium bg-gradient-to-r from-red-600 to-orange-800 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="">ابزارهای مشتقه و اوراق بدهی</Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-sky-500 to-sky-700 p-2 border-1 rounded-lg active:shadow-md jumper-hover-btn-center'><Link to="">افزایش ها و تغییرات</Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-fuchsia-600 to-violet-700 p-2 px-3 border-1 rounded-lg active:shadow-md jumper-hover-btn-center'><Link to=""></Link>نمادهای مشمول تعلیق</div>
                  <div className='col-span-3 w-[133.3%] font-medium bg-gradient-to-r from-lime-600 to-cyan-700 p-2 px-3 border-1 rounded-lg active:shadow-md jumper-hover-btn-center'><Link to=""></Link>همه اطلاعات</div>
              </div>
              {/* ------------------top side Btns MD Display ---------------- */}
              <div className='grid grid-flow-col auto-cols-max px-16 gap-x-2 max-md:hidden xl:flex-row xl:top-20'>
                  <div className='inline-block font-medium bg-gradient-to-r from-lime-600 to-cyan-700 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="">همه اطلاعات</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-fuchsia-600 to-violet-700 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="">نمادهای مشمول تعلیق</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-red-600 to-orange-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="">افزایش ها و تغییرات</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-cyan-600 to-cyan-900  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="">ابزارهای مشتقه و اوراق بدهی</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-pink-900 to-red-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="">عرضه و تقاضا</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-purple-700 to-pink-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds/prices">قیمت ها</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-yellow-500 to-yellow-700 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds/indicators">شاخص ها</Link></div>
                  <div className='inline-flex font-medium text-center  bg-gradient-to-r from-blue-600 to-blue-900 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds">در یک نگاه</Link></div>
              </div>
    </>
  )
}

export default SideBtns_BondsPage