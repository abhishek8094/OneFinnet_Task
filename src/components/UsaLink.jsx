import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import usaFlag from "../../public/images/usaFlag.png";

const UsaLink = () => {
  return (
    <div className="flex bg-[#d8d8de] items-center p-3 ">
      <div>
        <img src={usaFlag} alt="" className="w-5" />
      </div>
      <p className="mr-2 ml-2">
        An official website of the United States government
      </p>
      <a href="#" className="text-[#457ca4] cursor-pointer">
        Here’s how you know{" "}
      </a>
      <span>
        <MdOutlineKeyboardArrowDown />
      </span>
    </div>
  );
};

export default UsaLink;
