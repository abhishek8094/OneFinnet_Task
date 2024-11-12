import React from "react";
import { TiHome } from "react-icons/ti";
import iconPublisher from "../../public/images/iconPublisher.png";
import { FaDownload } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import { FiCopy } from "react-icons/fi";

const Section = () => {
  return (
    <div className="mx-36  bg-[#f6f6f6]">
      <div className="bg-[#ffffff] border-[1.5px] p-6 ">
        <div className="flex flex-start gap-4 items-center text-[#505050] cursor-pointer font-semibold">
          <TiHome className="text-2xl " />/
          <img src={iconPublisher} alt="" className="w-5" />/
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
      <div className="border-[1.5px] px-10 bg-[white] ">
        <div className="flex justify-between mt-4">
          <div>
            <h3 className="font-bold text-2xl leadig-8 tracking-wider mb-5">
              JSON File
            </h3>
            <span>URL:</span>
            <a
              href="https://data.cityofchicago.org/api/views/cbyb-69xx/rows.json?accessType=DOWNLOAD"
              className="text-md text-[#4a658b] hover:border-b-[1.5px] border-[#4a658b]"
            >
              {" "}
              https://data.cityofchicago.org/api/views/cbyb-69xx/rows.json?accessType=DOWNLOAD
            </a>
          </div>
          <div className="flex flex-col">
            <button className="bg-[#206b82] flex gap-1 rounded p-2 px-4 text-[white] font-semibold mb-2">
              <FaDownload className="mt-[5px]" />
              Download
            </button>
            <span className="text-[#206b82] font-semibold ">More details</span>
          </div>
        </div>
        <div className="py-5 mb-4">
          <h2 className="font-bold text-xl mb-4">From the dataset abstract</h2>

          <p className="mb-4">
            Note: This dataset is no longer updated but is being kept for
            historical reference. For the current data, please see
            https://data.cityofchicago.org/d/hgdw-64h3. Bike racks in Chicago.
            To...
          </p>
          <span>
            Source:{" "}
            <a
              href="#"
              className="text-[#4a658b] hover:border-b-[1.5px] border-[#4a658b]"
            >
              Bike Racks - Historical
            </a>
          </span>
        </div>
      </div>
      <div className=" flex flex-start">
        <div className="w-64 border-[1.5px] bg-[white]">
          <h4 className="font-semibold text-[18px] flex justitdy-center items-center gap-1 border-b-[1.5px] px-4 py-1 bg-[#f6f6f6]">
            {" "}
            <FiCopy />
            Resources
          </h4>
          <ul>
            <li className="border-b-[1.5px] px-4 py-1 hover:bg-[#f6f6f6] cursor-pointer ">
              Comma Separated Values File
            </li>
            <li className="border-b-[1.5px] px-4 py-1 hover:bg-[#f6f6f6] cursor-pointer ">
              RDF File
            </li>
            <li className="bg-[#637a82] px-4 py-1 cursor-pointer text-[white] ">
              JSON File
            </li>
            <li className="border-b-[1.5px] px-4 py-1 hover:bg-[#f6f6f6] cursor-pointer ">
              XML File
            </li>
            <li className="flex border-b-[1.5px] px-4 py-1 bg-[#f6f6f6] items-center gap-1 ">
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
        <div className="px-16 py-8">
          <h3 className="font-bold text-[25px] leading-6 mb-4">
            About this Resource
          </h3>
          <div className=" shadow-lg rounded-lg">
            <table className="min-w-full bg-white border">
              <tbody>
                <tr className="border-b">
                  <th className="text-left px-6 py-4 font-bold bg-gray-100">
                    Last updated
                  </th>
                  <td className="px-6 py-4">unknown</td>
                </tr>
                <tr className="border-b">
                  <th className="text-left px-6 py-4 font-bold bg-gray-100">
                    Created
                  </th>
                  <td className="px-6 py-4">unknown</td>
                </tr>
                <tr className="border-b">
                  <th className="text-left px-6 py-4 font-bold bg-gray-100">
                    Format
                  </th>
                  <td className="px-6 py-4">JSON File</td>
                </tr>
                <tr className="border-b">
                  <th className="text-left px-6 py-4 font-bold bg-gray-100">
                    License
                  </th>
                  <td className="px-6 py-4">License not specified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
