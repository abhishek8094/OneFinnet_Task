import React from "react";
import { TiHome } from "react-icons/ti";
import iconPublisher from "../../public/images/iconPublisher.png";
import { FaDownload } from "react-icons/fa6";

const Section = () => {
  return (
    <div className="mx-36  bg-[#f6f6f6]">
      <div className="bg-[#ffffff] border-[1.5px] p-6 ">
        <div className="flex gap-4">
          <TiHome />/
          <img src={iconPublisher} alt="" className="w-6" />/
          <a href="">City of Chicago</a>/<a href="">Bike Racks - Historical</a>/
          <a href="">data.cityofchicago.org</a>
        </div>
      </div>
      <div className="border-2 p-20 bg-[white]">
        <div className="flex justify-around">
          <div>
            <h3 className="font-bold text-xl">JSON File</h3>
            <span>URL:</span>
            <a
              href="https://data.cityofchicago.org/api/views/cbyb-69xx/rows.json?accessType=DOWNLOAD"
              className="text-[]"
            >
              {" "}
              https://data.cityofchicago.org/api/views/cbyb-69xx/rows.json?accessType=DOWNLOAD
            </a>
          </div>
          <div className="flex flex-col">
            <button className="bg-[#206b82] flex gap-1 rounded p-2 px-4 text-[white] font-semibold">
              <FaDownload className="mt-[5px]" />
              Download
            </button>
            <span className="text-[#206b82] font-semibold">More details</span>
          </div>
        </div>
        <div >
          <h2>From the dataset abstract</h2>
          Note:{" "}
          <p>
            {" "}
            This dataset is no longer updated but is being kept for historical
            reference. For the current data, please see
            https://data.cityofchicago.org/d/hgdw-64h3. Bike racks in Chicago.
            To...
          </p>
          <span>
            Source: <a href="">Bike Racks - Historical</a>
          </span>
        </div>
      </div>
      <div className="p-20 bg-[blue]">

      </div>
    </div>
  );
};

export default Section;
