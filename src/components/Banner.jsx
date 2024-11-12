import React from "react";
import { TiHome } from "react-icons/ti";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 justify-around items-center bg-[#0051d8]">
      <h1 className="text-[white] text-lg md:text-xl mb-4 md:mb-0 md:mr-72">DATA CATALOG</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
        <TiHome className="text-[white] text-xl md:text-2xl" />
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
          <span className="text-[#627591]">/</span>
          <li className="text-[white] font-semibold text-sm md:text-base">DataSets</li>
          <li className="bg-[white] p-2 text-[#4378cf] font-semibold text-sm md:text-base">
            Organization
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
