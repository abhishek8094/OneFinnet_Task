import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import usaFlag from "../../public/images/usaFlag.png";

const UsaLink = () => {
  return (
    <div className="bg-[#d8d8de] cursor-pointer">
      <div className="flex flex-col md:flex-row items-center p-2 md:relative md:left-20 text-center md:text-left">
        <img src={usaFlag} alt="" className="w-5" />
        <p className="mr-2 ml-2 text-sm md:text-base mt-2 md:mt-0">
          An official website of the United States government
        </p>
        <a
          href="#"
          className="text-[#457ca4] border-b-[1.5px] border-[#457ca4] mt-2 md:mt-0"
        >
          Here’s how you know{" "}
        </a>
        <span className="mt-2 md:mt-0">
          <MdOutlineKeyboardArrowDown className="text-[#457ca4]" />
        </span>
      </div>
    </div>
  );
};

export default UsaLink;
