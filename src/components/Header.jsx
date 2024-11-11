import React from "react";
import UsaLink from "./UsaLink";
import navLogo from "../../public/images/navLogo.svg";
import userGuide from "../../public/images/userGuide.svg";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <UsaLink />
      <div className="flex justify-between ">
        <div className="flex justify-around items-center  ml-8">
          <div>
            <img src={navLogo} alt="" className="w-48"/>
          </div>
          <div className="relative left-20">
            <ul className="flex  gap-10">
              <li className="text-[565c65] font-bold hover:text-[#005fa3] border-b-4 border-blue-500 hover:border-red-500 cursor-pointer">DATA</li>
              <li className="text-[565c65] font-bold hover:text-[#005fa3]  hover:border-b-4 hover:border-red-500 cursor-pointer">METRICS</li>
              <li className="text-[565c65] font-bold hover:text-[#005fa3] hover:border-b-4 hover:border-red-500 cursor-pointer">OPEN GOVERNMENT</li>
              <li className="text-[565c65] font-bold hover:text-[#005fa3] hover:border-b-4  hover:border-red-500 cursor-pointer">CONTACT</li>
            </ul>
          </div>
        </div>
        <div className="relative right-12 border-l p-2">
          <img src={userGuide} alt="" className="w-20 ml-6" />
          <span className=" ml-6  ">User Guide</span>
        </div>
      </div>
      <Banner/>
    </>
  );
};

export default Header;
