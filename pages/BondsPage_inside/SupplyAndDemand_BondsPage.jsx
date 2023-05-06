import React from 'react'
import SideBtns_BondsPage from './Btns side/SideBtns_BondsPage'
import SideBtns from '../../components/SideBtns'
import TableTopSupply from '../../components/Tables/BondsBourseTehran_tables/TableTopSupply'
import TableTopDemand from '../../components/Tables/BondsBourseTehran_tables/TableTopDemand'
import ChartOverallIndex from '../../components/Charts/BondsBourseTehran_Charts/ChartOverallIndex'


const SupplyAndDemand_BondsPage = () => {
  return (
    <section className='min-h-screen justify-center items-center w-screen'>
      
    <div className="my-32 container mx-auto flex flex-wrap justify-center items-center min-h-screen min-w-full max-md:px-1.5">
      
      <SideBtns/>
      <div className="grid min-h-screen justify-center min-w-fit sm:grid-flow-row">
        <div className='columns-1 text-right bg-gray-600 text-white rounded-t-lg p-1 -mt-0.5 mb-2 font-bold px-5'>بورس اوراق بهادار تهران</div>
          <SideBtns_BondsPage/>
          <div className="grid grid-cols-4 grid-rows-4 gap-4 max-md:gap-4 mt-3 max-md:mt-0.5">

            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-green-900 to bg-green-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>برترین تقاضا</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableTopDemand/>
              </div>
            </div>

            <div className='col-span-2 max-md:col-span-4'>
              <p className='bg-gradient-to-l from-red-900 to bg-red-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>برترین عرضه</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <TableTopSupply/>
              </div>
            </div>

            {/* <div className='col-span-4 max-md:col-span-4 c'>
              <p className='bg-gradient-to-r from-gray-700 to bg-gray-500 text-white p-0.5 rounded-t-md text-right px-2 font-medium'>شاخص کل</p>
              <div className='overflow-x-auto md:table-scroll max-md:mx-3'>
                <ChartOverallIndex/>
              </div>
            </div> */}

          </div>

      </div>

      

    </div>
  </section>
  )
}

export default SupplyAndDemand_BondsPage