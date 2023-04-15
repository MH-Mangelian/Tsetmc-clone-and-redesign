import { useEffect, useState } from "react";

// -------------------import icons -----------------
import { FcHeatMap } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaClipboardList } from "react-icons/fa";
import { MdFiberNew,MdHome,MdClose } from "react-icons/md";
import { GiOpenBook,GiEarthAfricaEurope } from "react-icons/gi";
import {
  BsFillQuestionCircleFill,
  BsFillChatRightTextFill,
  BsSearch,
  BsTable,
  BsMoonStarsFill,
  BsSun,
} from "react-icons/bs";

const Header = () => {
  // ------------------ HamburgerMenu -----------------------------
  const [toggle,setToggle] = useState(false);
  
  // ----------switch Mode : dark/light --------------------------
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    localStorage.theme = "dark";

    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 w-screen h-auto border-b dark:border-gray-300 border-gray-800 dark:bg-gray-900 bg-gray-300 shadow-lg">
      <div className="flex  justify-between items-center py-3 xl:max-w-[90%] xl:mx-auto max-w-full px-[8%] ">
        {/* -------------------left---------------- */}
        <div className="flex flex-row ml-5">
          <img src="/logo.png" alt="TSETMC" className="w-10 h-10 -ml-2" />
          <p className="flex max-sm:hidden py-2.5 px-2 ml-1 font-medium dark:text-white text-black">
            Tehran Securities Exchange Technology Management Co.
          </p>
          <p className="text-sm sm:hidden py-2.5 px-2 ml-1 font-medium dark:text-white text-black">
            T.S.E.T.M.C
          </p>
        </div>
        {/* -------------------right---------------- */}
        <div className="flex flex-row mr-5">
          {/* ---------mood-------------- */}
          <div className="flex flex-row px-3">
            {darkMode ? (
              <BsSun
                onClick={() => setDarkMode(!darkMode)}
                className="w-6 h-6 my-0.5 text-white transition-all hover:scale-110 ease-out cursor-pointer hover:text-blue-400"
              />
            ) : (
              <BsMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="w-6 h-6 my-0.5 text-black/90 transition-all hover:scale-110 ease-out cursor-pointer hover:text-blue-950"
              />
            )}
          </div>
          {/* ----------icon---------- */}
          <div className="hidden md:flex flex-row-reverse space-x-2 ">
            <MdFiberNew className="w-8 h-8 mx-2 text-black/90 dark:text-white jumper-hover" />
            <BsFillQuestionCircleFill className="w-6 h-7 my-0.5 text-black/90 dark:text-white jumper-hover" />
            <BsFillChatRightTextFill className="w-6 h-7 my-0.5 text-black/90 dark:text-white jumper-hover" />
            <FcHeatMap className="w-7 h-7 my-0.5 text-black/90 dark:text-white jumper-hover" />
            <GiOpenBook className="w-7 h-7  text-black/90 dark:text-white jumper-hover" />
            <BsSearch className="w-6 h-7  text-black/90 dark:text-white jumper-hover" />
            <BsTable className="w-6 h-7  text-black/90 dark:text-white jumper-hover" />
            <MdHome className="w-7 h-7  text-black/90 dark:text-white jumper-hover" />
            <GiEarthAfricaEurope className="w-6 h-7  text-black/90 dark:text-white jumper-hover" />
            <FaClipboardList className="w-6 h-7  text-black/90 dark:text-white jumper-hover" />
          </div>
          <div className="sm:hidden flex items-center">
            <div>
                {
                    toggle ? 
                    <MdClose className="w-7 h-7 mx-2 text-black/90 dark:text-white jumper-hover hover:text-blue-700"
                    onClick={() => setToggle(!toggle)}/>
                    :
                    <RxHamburgerMenu className="w-7 h-7 mx-2 text-black/90 dark:text-white jumper-hover hover:text-blue-700"
                    onClick={() => setToggle(!toggle)}/>
                }
            </div>

            <div className={`${toggle ? "flex" : "hidden"} p-4  bg-gradient-to-l from-white/25 to-white/80 dark:bg-gradient-to-l dark:from-slate-800 dark:to-slate-600 `}>
                <ul>
                    <li>hiiii</li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
