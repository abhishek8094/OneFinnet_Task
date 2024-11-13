import React from "react";
import UsaLink from "./UsaLink";
import navLogo from "../../public/images/navLogo.svg";
import userGuide from "../../public/images/userGuide.svg";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <UsaLink />
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex justify-around items-center cursor-pointer">
          <div>
            <img
              src={navLogo}
              alt=""
              className="w-32 sm:w-36 md:w-40 lg:w-48"
            />
          </div>
          <div className="relative left-4 sm:left-10 md:left-14 lg:left-20">
            <ul className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <li className="text-[#565c65] font-bold hover:text-[#005fa3] border-b-4 border-blue-500 hover:border-red-500 cursor-pointer">
                DATA
              </li>
              <li className="text-[#565c65] font-bold hover:text-[#005fa3] hover:border-b-4 hover:border-red-500 cursor-pointer">
                METRICS
              </li>
              <li className="text-[#565c65] font-bold hover:text-[#005fa3] hover:border-b-4 hover:border-red-500 cursor-pointer">
                OPEN GOVERNMENT
              </li>
              <li className="text-[#565c65] font-bold hover:text-[#005fa3] hover:border-b-4 hover:border-red-500 cursor-pointer">
                CONTACT
              </li>
            </ul>
          </div>
        </div>
        <div className="relative right-0 sm:left:10 md:left-12 lg:left-12 border-l border-gray-300 p-2 cursor-pointer">
          <img
            src={userGuide}
            alt=""
            className="w-12 sm:w-14 md:w-16 ml-3 sm:ml-5"
          />
          <span className="ml-2 leading-6 tracking-wider text-sm sm:text-base md:text-lg hover:border-b-[1.5px] border-[gray] cursor-pointer">
            User Guide
          </span>
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Header;
