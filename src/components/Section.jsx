import React from "react";
import { TiHome } from "react-icons/ti";
import iconPublisher from "../../public/images/iconPublisher.png";
import { FaDownload, FaTwitter, FaFacebookF } from "react-icons/fa6";
import { RiShareForwardFill } from "react-icons/ri";
import { FiCopy } from "react-icons/fi";

const Section = () => {
  return (
    <div className="bg-[#f6f6f6] flex justify-center ">
    <div className="container w-[1000px] px-4 sm:px-6 lg:px-8">
      <div className="bg-[#ffffff] border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-gray-300 p-3">
        <div className="flex flex-wrap gap-2 items-center text-[#505050] cursor-pointer font-semibold">
          <TiHome className="text-2xl" />/
          <img src={iconPublisher} alt="Publisher Icon" className="w-5 mx-2" />/
          <a href="" className="hover:border-b-[1.5px] border-[#505050]">
            City of Chicago
          </a>
          /
          <a href="" className="hover:border-b-[1.5px] border-[#505050]">
            Bike Racks - Historical
          </a>
          /
          <a href="" className="hover:border-b-[1.5px] border-[#505050]">
            data.cityofchicago.org
          </a>
        </div>
      </div>
      <div className="border-[1.5px] bg-[white] p-5 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between mt-4">
          <div>
            <h3 className="font-bold text-2xl leading-8 tracking-wider mb-5">
              JSON File
            </h3>
            <span className="text-[#747c82]">URL:</span>
            <a
              href="https://data.cityofchicago.org/api/views/cbyb-69xx/rows.json?accessType=DOWNLOAD"
              className="text-md text-[#4a658b] hover:border-b-[1.5px] border-[#4a658b]"
            >
              https://data.cityofchicago.org/api/views/cbyb-69xx/rows.json?accessType=DOWNLOAD
            </a>
          </div>
          <div className="flex flex-col mt-4 md:mt-0">
            <button className="bg-[#206b82] flex items-center gap-1 rounded p-2 px-4 text-[white] font-semibold mb-2">
              <FaDownload className="mt-[5px]" />
              Download
            </button>
            <span className="text-[#206b82] font-semibold mt-1 cursor-pointer">
              More details
            </span>
          </div>
        </div>
        <div className="py-5 mb-4">
          <h2 className="font-bold text-xl mb-4">From the dataset abstract</h2>
          <p className="mb-4">
            Note: This dataset is no longer updated but is being kept for historical reference. For the current data, please see https://data.cityofchicago.org/d/hgdw-64h3. Bike racks in Chicago. To...
          </p>
          <span>
            Source:{" "}
            <a href="#" className="text-[#4a658b] hover:border-b-[1.5px] border-[#4a658b]">
              Bike Racks - Historical
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-64 border-l-[1.5px] border-r-[1.5px] bg-[white] mb-4 lg:mb-0">
          <h4 className="font-semibold text-[18px] flex items-center gap-1 border-b-[1.5px] px-4 py-1 bg-[#f6f6f6]">
            <FiCopy />
            Resources
          </h4>
          <ul>
            <li className="border-b-[1.5px] px-4 py-1 hover:bg-[#f6f6f6] cursor-pointer">
              Comma Separated Values File
            </li>
            <li className="border-b-[1.5px] px-4 py-1 hover:bg-[#f6f6f6] cursor-pointer">
              RDF File
            </li>
            <li className="bg-[#637a82] px-4 py-1 cursor-pointer text-[white]">
              JSON File
            </li>
            <li className="border-b-[1.5px] px-4 py-1 hover:bg-[#f6f6f6] cursor-pointer">
              XML File
            </li>
            <li className="flex border-b-[1.5px] px-4 py-1 bg-[#f6f6f6] items-center gap-1">
              <RiShareForwardFill />
              Share on Social Sites
            </li>
            <li className="flex border-b-[1.5px] px-4 py-1 items-center gap-1 cursor-pointer hover:bg-[#f6f6f6]">
              <FaTwitter />
              Twitter
            </li>
            <li className="flex border-b-[1.5px] px-4 py-1 items-center gap-1 cursor-pointer hover:bg-[#f6f6f6]">
              <FaFacebookF />
              Facebook
            </li>
          </ul>
        </div>
        <div className="flex-1 px-4 py-8 lg:px-16">
          <h3 className="font-bold text-[25px] leading-6 mb-4">
            About this Resource
          </h3>
          <div className="border-2">
            <div className="bg-[#e9e9e9] p-1.5 border-b-[1.5px] flex justify-between">
              <span className="font-semibold">Last updated</span>
              <span>unknown</span>
            </div>
            <div className="p-1.5 border-b-[1.5px] flex justify-between">
              <span className="font-semibold">Created</span>
              <span>unknown</span>
            </div>
            <div className="bg-[#e9e9e9] p-1.5 border-b-[1.5px] flex justify-between">
              <span className="font-semibold">Format</span>
              <span>JSON file</span>
            </div>
            <div className="p-1.5 flex justify-between">
              <span className="font-semibold">License</span>
              <span>License not specified</span>
            </div>
          </div>
          <div className="border-l border-b p-1">
            <hr className="w-48" />
          </div>
          <div className="border-l border-b p-2">
            <span className="font-semibold text-sm p-1 text-[#3e536e]">
              Show more
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section;
