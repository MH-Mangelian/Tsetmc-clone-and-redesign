import {FcHeatMap} from 'react-icons/fc';
import {RxHamburgerMenu} from 'react-icons/rx';
import {FaClipboardList} from 'react-icons/fa';
import {MdFiberNew,MdHome} from 'react-icons/md';
import {GiOpenBook,GiEarthAfricaEurope} from 'react-icons/gi';

import {BsFillQuestionCircleFill ,BsFillChatRightTextFill,BsSearch,BsTable} from 'react-icons/bs';



const Header = () => {
  return (
    <section className='fixed top-0 w-screen h-auto dark:bg-gray-600 bg-gray-300 shadow-lg'>
        <div className='flex  justify-between items-center p-6 '>
            {/* -------------------left---------------- */}
            <div className='flex flex-row ml-5'>
                <img src="/logo.png" alt="TSETMC" className='w-10 h-10 -ml-2' />
                <p className='sm:text-xs text-lg py-2.5 px-2 ml-1 font-medium dark:text-white text-black'>Tehran Securities Exchange Technology Management Co.</p>
            </div>
            {/* -------------------right---------------- */}
            <div className='flex flex-row mr-5'>
                {/* ----------icon---------- */}
                <div className='flex flex-row-reverse space-x-2'>
                    <MdFiberNew className='w-8 h-8 mx-2 text-black/90 dark:text-white jumper-hover'/>
                    <BsFillQuestionCircleFill className='w-6 h-7 my-0.5 text-black/90 dark:text-white jumper-hover'/>
                    <BsFillChatRightTextFill className='w-6 h-7 my-0.5 text-black/90 dark:text-white jumper-hover'/>
                    <FcHeatMap className='w-7 h-7 my-0.5 text-black/90 dark:text-white jumper-hover'/>
                    <GiOpenBook className='w-7 h-7  text-black/90 dark:text-white jumper-hover'/>
                    <BsSearch className='w-6 h-7  text-black/90 dark:text-white jumper-hover'/>
                    <BsTable className='w-6 h-7  text-black/90 dark:text-white jumper-hover'/>
                    <MdHome className='w-7 h-7  text-black/90 dark:text-white jumper-hover'/>
                    <GiEarthAfricaEurope className='w-6 h-7  text-black/90 dark:text-white jumper-hover'/>
                    <FaClipboardList className='w-6 h-7  text-black/90 dark:text-white jumper-hover'/>
                </div>
                <div className='flex'>
                    <RxHamburgerMenu className='w-7 h-7 mx-2  text-black/90 dark:text-white jumper-hover'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header