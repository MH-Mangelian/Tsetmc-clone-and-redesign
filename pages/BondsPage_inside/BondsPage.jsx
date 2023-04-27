import { Link } from "react-router-dom";
import SideBtns from "../../components/SideBtns";
import TableStockMarketGlance from "../../components/Tables/BondsBourseTehran_tables/TableStockMarketGlance";
import TableMessagesMarketWatcher from "../../components/Tables/BondsBourseTehran_tables/TableMessagesMarketWatcher";
import TableHighTransactionSymbols from "../../components/Tables/BondsBourseTehran_tables/TableHighTransactionSymbols";

const BondsPage = () => {
  return (
    <section className='min-h-screen justify-center items-center w-screen'>
      
      <div className="my-32 container mx-auto flex flex-wrap justify-center items-center min-h-screen min-w-full max-md:px-1.5">
        
        <SideBtns/>
        <div className="grid min-h-screen justify-center min-w-fit sm:grid-flow-row">
          <div className='columns-1 text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-bold px-5'>بورس اوراق بهادار تهران</div>
            
            {/* -------------------------btns side Mobile Display------------------------------- */}
            <div className="grid grid-cols-4 gap-1 mx-2 text-center md:hidden max-md:mb-7 max-md:mt-1">
                  <div className='col-span-2 font-medium bg-gradient-to-r from-blue-600 to-blue-900 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/">در یک نگاه</Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-green-500 to-green-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds"></Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-yellow-500 to-yellow-600  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/iran-exchange">فرابورس ایران</Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-blue-500 to-blue-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/iran-energy-exchange">بورس انرژی ایران</Link></div>
                  <div className='col-span-3 w-[133.3%] font-medium bg-gradient-to-r from-purple-500 to-purple-800 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/investment-funds">صندوق های سرمایه گذاری</Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-orange-500 to-orange-700  p-2 border-1 rounded-lg active:shadow-md jumper-hover-btn-center'><Link to="/codal-network">شبکه کدال</Link></div>
                  <div className='col-span-2 font-medium bg-gradient-to-r from-pink-500 to-pink-800 p-2 px-3 border-1 rounded-lg active:shadow-md jumper-hover-btn-center'><Link to="/commodity-exchange">بورس کالا</Link></div>
              </div>
              {/* ------------------top side Btns MD Display ---------------- */}
              <div className='grid grid-flow-col auto-cols-max px-16 gap-x-2 max-md:hidden xl:flex-row xl:top-20'>
                  <div className='inline-block font-medium bg-gradient-to-r from-purple-500 to-purple-800 p-2 px-3  border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/investment-funds">صندوق های سرمایه گذاری</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-orange-500 to-orange-700  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/codal-network">شبکه کدال</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-blue-500 to-blue-800  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/iran-energy-exchange">بورس انرژی ایران</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-yellow-500 to-yellow-600  p-2 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/iran-exchange">فرابورس ایران</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-pink-500 to-pink-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/commodity-exchange">بورس کالا</Link></div>
                  <div className='inline-block font-medium bg-gradient-to-r from-green-500 to-green-800 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/bonds">بورس اوراق بهادار تهران</Link></div>
                  <div className='inline-flex font-medium text-center  bg-gradient-to-r from-blue-600 to-blue-900 p-2 px-3 border-1 rounded-t-lg active:shadow-md jumper-hover-btn-center'><Link to="/">در یک نگاه</Link></div>
              </div>
            
            <div className="grid grid-cols-4 gap-4 max-md:gap-4">
              <div className='col-span-3 max-md:col-span-4'>
                <p className='bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>پیام های ناظر بازار</p>
                <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                  <TableMessagesMarketWatcher/>
                </div>
              </div>

              <div className='max-md:col-span-4'>
                <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بازار نقدی بورس در یک نگاه</p>
                <TableStockMarketGlance/>
              </div>

              <div className='col-span-4 max-md:col-span-4'>
                <p className='bg-gradient-to-l from-green-900 to bg-green-300 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>نماد های پر تراکنش</p>
                <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                  <TableHighTransactionSymbols/>
                </div>
              </div>


            </div>

        </div>

        

      </div>
    </section>
  );
};

export default BondsPage;
