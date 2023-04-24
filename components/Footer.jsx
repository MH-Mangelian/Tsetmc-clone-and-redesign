import React from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen h-auto border-t dark:border-gray-300 border-gray-800 dark:bg-gray-900 bg-gray-300 shadow-lg">
      <div className="flex justify-between items-center py-3 xl:max-w-[90%] xl:mx-auto max-w-full px-[8%]">
        {/* ----------------------Right-------------------- */}
        <div className="flex flex-col ml-5 max-md:-ml-6">
          <a href="https://github.com/MH-Mangelian/Tsetmc-clone-and-redesign" target="_blank" className="flex cursor-pointer hover:text-blue-600">
            <AiFillProject className="flex w-7 h-7 my-2"/>
            <p className="flex max-md:hidden py-2.5 px-2 ml-1 font-medium dark:text-white text-black">
                Tehran Securities Exchange Technology Management Co.
            </p>
            <p className="text-sm md:hidden py-2.5 px-2 ml-1 font-medium dark:text-white text-black">
                T.S.E.T.M.C
            </p>
          </a>
          <h3 className="flex text-sm px-10 max-md:px-0.5 max-md:text-[10px] max-md:font-semibold">All<span className="font-bold underline hover:text-red-600 px-1">data is fake </span>, a self Project</h3>
        </div>
        {/* -------------------------Left------------------------ */}
        <div className="flex flex-row mr-5 max-md:-mr-6">
            <h3 className="flex text-sm my-3 max-md text-[9px]">Design and Make By :</h3>
            <a href="https://github.com/MH-Mangelian" target="_blank" className="flex mx-3 max-md:mx-1 hover:text-blue-600">
                <AiFillGithub className="flex w-8 h-8 my-2 mx-0.5"/>
                <p className="flex my-2.5 max-md:text-[10px] max-md:font-bold max-md:my-4">@MH-Mangelian</p>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
