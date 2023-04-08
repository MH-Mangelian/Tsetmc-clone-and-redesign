import {MdFiberNew,MdHome} from 'react-icons/md';
import {FcHeatMap} from 'react-icons/fc';
import {GiOpenBook,GiEarthAfricaEurope} from 'react-icons/gi';

import {BsFillQuestionCircleFill ,BsFillChatRightTextFill,BsSearch,BsTable} from 'react-icons/bs';



const Header = () => {
  return (
    <section className='fixed w-screen h-auto dark:bg-gray-600 bg-gray-300'>
        <div className='flex  justify-between items-center p-6 '>
            {/* -------------------left---------------- */}
            <div className='flex flex-row ml-5'>
                <img src="/logo.png" alt="TSETMC" className='w-10 h-10 -ml-2' />
                <p className='sm:text-xs text-lg py-2.5 px-2 font-medium dark:text-white text-black'>Tehran Securities Exchange Technology Management Co.</p>
            </div>
            {/* -------------------right---------------- */}
            <div className='flex flex-row mr-5'>
                {/* ----------icon---------- */}
                <div className='flex space-x-2'>
                    <MdFiberNew className='w-8 h-8 text-black/90 dark:text-white'/>
                    <BsFillQuestionCircleFill className='w-6 h-7 my-0.5 text-black/90 dark:text-white'/>
                    <BsFillChatRightTextFill className='w-6 h-7 my-0.5 text-black/90 dark:text-white'/>
                    <FcHeatMap className='w-7 h-7 my-0.5 text-black/90 dark:text-white'/>
                    <GiOpenBook className='w-7 h-7  text-black/90 dark:text-white'/>
                    <BsSearch className='w-6 h-7  text-black/90 dark:text-white'/>
                    <BsTable className='w-6 h-7  text-black/90 dark:text-white'/>
                    <MdHome className='w-6 h-7  text-black/90 dark:text-white'/>
                    <GiEarthAfricaEurope className='w-6 h-7  text-black/90 dark:text-white'/>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header