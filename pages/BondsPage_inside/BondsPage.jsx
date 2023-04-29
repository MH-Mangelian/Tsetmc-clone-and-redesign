import { Link } from "react-router-dom";
import SideBtns from "../../components/SideBtns";
import TableStockMarketGlance from "../../components/Tables/BondsBourseTehran_tables/TableStockMarketGlance";
import TableMessagesMarketWatcher from "../../components/Tables/BondsBourseTehran_tables/TableMessagesMarketWatcher";
import TableHighTransactionSymbols from "../../components/Tables/BondsBourseTehran_tables/TableHighTransactionSymbols";
import SideBtns_BondsPage from "./Btns side/SideBtns_BondsPage";

const BondsPage = () => {
  return (
    <section className='min-h-screen justify-center items-center w-screen'>
      
      <div className="my-32 container mx-auto flex flex-wrap justify-center items-center min-h-screen min-w-full max-md:px-1.5">
        
        <SideBtns/>
        <div className="grid min-h-screen justify-center min-w-fit sm:grid-flow-row">
          <div className='columns-1 text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-bold px-5'>بورس اوراق بهادار تهران</div>
            <SideBtns_BondsPage/>
            <div className="grid grid-cols-4 gap-4 max-md:gap-4">
              <div className='col-span-3 max-md:col-span-4'>
                <p className='bg-gradient-to-r from-yellow-700 to-yellow-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>پیام های ناظر بازار</p>
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
