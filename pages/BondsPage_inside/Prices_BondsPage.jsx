import React from 'react'
import SideBtns from '../../components/SideBtns'
import SideBtns_BondsPage from './Btns side/SideBtns_BondsPage'
import TableBiggestPriceIncrease from '../../components/Tables/BondsBourseTehran_tables/TableBiggestPriceIncrease'
import TableBiggestPriceReduction from '../../components/Tables/BondsBourseTehran_tables/TableBiggestPriceReduction'
import TableIncreaseLastPriceEnd from '../../components/Tables/BondsBourseTehran_tables/TableIncreaseLastPriceEnd'
import TableMajorDeals from '../../components/Tables/BondsBourseTehran_tables/TableMajorDeals'
import TableNewFinancialTools from '../../components/Tables/BondsBourseTehran_tables/TableNewFinancialTools'
import TableBondsPriority from '../../components/Tables/BondsBourseTehran_tables/TableBondsPriority'
import TableIncreaseInMarketValue from '../../components/Tables/BondsBourseTehran_tables/TableIncreaseInMarketValue'
import TableCapitalIncrease from '../../components/Tables/BondsBourseTehran_tables/TableCapitalIncrease'
import TablePriceAdjustment from '../../components/Tables/BondsBourseTehran_tables/TablePriceAdjustment'
import TableDecreaseInMarketValue from '../../components/Tables/BondsBourseTehran_tables/TableDecreaseInMarketValue'
import TableLargestTransactionVolume from '../../components/Tables/BondsBourseTehran_tables/TableLargestTransactionVolume'
import TableHighestTransactionValue from '../../components/Tables/BondsBourseTehran_tables/TableHighestTransactionValue'
import TableReductionLastPriceEnd from '../../components/Tables/BondsBourseTehran_tables/TableReductionLastPriceEnd'

const Prices_BondsPage = () => {
  return (
    <section className='min-h-screen justify-center items-center w-screen'>
      
    <div className="my-32 container mx-auto flex flex-wrap justify-center items-center min-h-screen min-w-full max-md:px-1.5">
      
      <SideBtns/>
      <div className="grid min-h-screen justify-center min-w-fit sm:grid-flow-row">
        <div className='columns-1 text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-bold px-5'>بورس اوراق بهادار تهران</div>
          <SideBtns_BondsPage/>
          <div className="grid grid-cols-4 gap-4 max-md:gap-4 mt-3 max-md:mt-0.5">
            
            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-red-900 to bg-red-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>کاهش آخرین قیمت به پایانی</p>
              <TableReductionLastPriceEnd/>
            </div>
            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-green-900 to bg-green-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>افزایش آخرین قیمت به پایانی</p>
              <TableIncreaseLastPriceEnd/>
            </div>
            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-red-900 to bg-red-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بیشترین کاهش قیمت</p>
              <TableBiggestPriceReduction/>
            </div>
            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-green-900 to bg-green-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بیشترین افزایش قیمت</p>
              <TableBiggestPriceIncrease/>
            </div>
            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>معاملات عمده</p>
              <TableMajorDeals/>
            </div>
            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>ابزارهای نوین مالی</p>
              <TableNewFinancialTools/>
            </div>
            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>حق تقدم</p>
              <TableBondsPriority/>
            </div>

            

            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-green-900 to bg-green-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>افزایش ارزش بازار</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableIncreaseInMarketValue/>
              </div>
            </div>

            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-yellow-700 to-yellow-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>افزایش سرمایه</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableCapitalIncrease/>
              </div>
            </div>

            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-yellow-700 to-yellow-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>تعدیل قیمت</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TablePriceAdjustment/>
              </div>
            </div>

            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-red-900 to bg-red-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>کاهش ارزش بازار</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableDecreaseInMarketValue/>
              </div>
            </div>
            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بیشترین حجم معامله</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableLargestTransactionVolume/>
              </div>
            </div>

            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>بیشترین ارزش معامله</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableHighestTransactionValue/>
              </div>
            </div>


          </div>

      </div>

      

    </div>
  </section>
  )
}

export default Prices_BondsPage