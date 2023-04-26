import SideBtns from './SideBtns'
import TableElectedIndex from './Tables/BondsBourseTehran_tables/TableElectedIndex'
import TableHighTransactionSymbols from './Tables/BondsBourseTehran_tables/TableHighTransactionSymbols'
import TableImpactIndex from './Tables/BondsBourseTehran_tables/TableImpactIndex'
import TableStockMarketGlance from './Tables/BondsBourseTehran_tables/TableStockMarketGlance'
import TableElectedIndexIR from './Tables/IranExchangeBourse_tables/TableElectedIndexIR'
import TableHighTransactionSymbolsIR from './Tables/IranExchangeBourse_tables/TableHighTransactionSymbolsIR'
import TableImpactIndexIR from './Tables/IranExchangeBourse_tables/TableImpactIndexIR'
import TableStockMarketGlanceIR from './Tables/IranExchangeBourse_tables/TableStockMarketGlanceIR'

const Medial = () => {
  return (
    <section className='min-h-screen justify-center items-center w-screen'>
        <div className='my-32 container mx-auto flex flex-wrap justify-center items-center min-h-screen min-w-full max-md:px-1.5'>
            {/* ----------------------Side Btns-------------------- */}
            <SideBtns/>
            {/* ----------------------center side -------------------- */}
            <div className='grid min-h-screen justify-center min-w-fit sm:grid-flow-row'>
                <div className=' text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-bold px-2'>بورس اوراق بهادار تهران</div>
                <div className='grid grid-cols-4 gap-4 max-md:gap-4'>
                    <div className='col-span-3 max-md:col-span-4'>
                        <p className='bg-gray-600 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص های منتخب</p>
                        <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                            <TableElectedIndex/>
                        </div>
                    </div>

                    <div className='max-md:col-span-4'>
                        <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بازار نقدی بورس در یک نگاه</p>
                        <TableStockMarketGlance/>

                    </div>

                    <div className='col-span-3 max-md:col-span-4'>
                        <p className='bg-gradient-to-l from-green-900 to bg-green-300 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>نماد های پر تراکنش</p>
                        <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                            <TableHighTransactionSymbols/>
                        </div>
                    </div>

                    <div className='max-md:col-span-4'>
                        <p className='bg-gray-600 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>تاثیر در شاخص</p>
                        <TableImpactIndex/>
                    </div>
                </div>
            {/* ------------------------------------------ seconde part fara bors  ----------------------------------------------------- */}
                <div className='w-full text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-semibold max-md:bg-gradient-to-r max-md:from-yellow-500 max-md:to-yellow-600'>فرابورس ایران</div>

                <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-3 max-md:col-span-4'>
                        <p className='bg-gray-600 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص های منتخب</p>
                        <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                            <TableElectedIndexIR/>
                        </div>
                    </div>

                    <div className='max-md:col-span-4 '>
                        <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بازار نقدی فرابورس در یک نگاه</p>
                        <TableStockMarketGlanceIR/>
                    </div>

                    <div className='col-span-3 max-md:col-span-4'>
                        <p className='bg-gradient-to-l from-green-900 to bg-green-300 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>نماد های پر تراکنش</p>
                        <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                            <TableHighTransactionSymbolsIR/>
                        </div>
                    </div>

                    <div className='max-md:col-span-4'>
                        <p className='bg-gray-600 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>تاثیر در شاخص</p>
                        <TableImpactIndexIR/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Medial