import React from 'react'
import SideBtns from '../../components/SideBtns'
import SideBtns_BondsPage from './Btns side/SideBtns_BondsPage'
import TableImpactIndex from '../../components/Tables/BondsBourseTehran_tables/TableImpactIndex'
import TableElectedIndex from '../../components/Tables/BondsBourseTehran_tables/TableElectedIndex'
import TableMarketValue from '../../components/Tables/BondsBourseTehran_tables/TableMarketValue'
import TableTopIndustryGroups from '../../components/Tables/BondsBourseTehran_tables/TableTopIndustryGroups'
import TableIndustryIndicators from '../../components/Tables/BondsBourseTehran_tables/TableIndustryIndicators'
import ChartTotalIndexEqualWeight from '../../components/Charts/BondsBourseTehran_Charts/ChartTotalIndexEqualWeight'
import ChartOverallIndex from '../../components/Charts/BondsBourseTehran_Charts/ChartOverallIndex'

const Indicators_BondsPage = () => {
  return (
    <section className='min-h-screen justify-center items-center w-screen'>
      
    <div className="my-32 container mx-auto flex flex-wrap justify-center items-center min-h-screen min-w-full max-md:px-1.5">
      
      <SideBtns/>
      <div className="grid min-h-screen justify-center min-w-fit sm:grid-flow-row">
        <div className='columns-1 text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-bold px-5'>بورس اوراق بهادار تهران</div>
          <SideBtns_BondsPage/>
          <div className="grid grid-cols-4 gap-4 max-md:gap-4">
            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-r from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص كل (هم وزن)</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <ChartTotalIndexEqualWeight/>
              </div>
            </div>

            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-r from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص کل</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <ChartOverallIndex/>
              </div>
            </div>

            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>تاثیر در شاخص</p>
              <TableImpactIndex/>
            </div>

            <div className='col-span-3 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص های منتخب</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableElectedIndex/>
              </div>
            </div>

            <div className='max-md:col-span-4'>
              <p className='bg-gradient-to-l from-yellow-700 to-yellow-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>ارزش بازار</p>
              <TableMarketValue/>
            </div>

            <div className='col-span-3 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-yellow-700 to-yellow-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>برترین گروه های صنعت</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableTopIndustryGroups/>
              </div>
            </div>

            <div className='col-span-4 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-green-900 to bg-green-300 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص های صنعت</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableIndustryIndicators/>
              </div>
            </div>


          </div>

      </div>

      

    </div>
  </section>
  )
}

export default Indicators_BondsPage