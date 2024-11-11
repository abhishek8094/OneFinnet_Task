import React from "react";
import { TiHome } from "react-icons/ti";

const Banner = () => {
  return (
    <div className="flex p-4 justify-around items-center bg-[#0051d8]">
      <h1 className="text-[white] text-xl">DATA CATALOG</h1>
      <div className="flex gap-6 justify-center items-center">
        <TiHome className="text-[white] text-2xl" />
        <ul className="flex gap-4 justify-center items-center">
          /<li className="text-[white] font-semibold">DataSets</li>
          <li className="bg-[white] p-2 text-[#4378cf] font-semibold">Organization</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
