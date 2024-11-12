import React from "react";
import navLogo from "../../public/images/navLogo.svg";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import gsaStarmark from "../../public/images/gsaStarmark.png";
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  const govDetails = [
    "About",
    "Open Government",
    "Website Policies",
    "Sitemap",
    "PERFORMANCE.GOV",
    "Login",
  ];
  return (
    <>
      <div className="bg-[#e0e1e3] flex flex-col md:flex-row justify-around p-8">
        <div className="flex flex-col items-center md:items-start">
          <img src={navLogo} alt="" className="w-44" />
          <div className="flex flex-wrap gap-4 mt-2 text-sm justify-center">
            {govDetails.map((detail, idx) => (
              <div
                key={idx}
                className="text-[#36537a] cursor-pointer hover:border-b-[1px] border-[#36537a]"
              >
                {detail} <span className="text-[#488ac3]">|</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mr-36 mt-4 md:mt-0">
          <div className="flex justify-center items-center gap-2 cursor-pointer text-[#36537a]">
            <FaTwitter />
            <span className="hover:border-b-[1.5px] border-[#36537a]">
              Twitter
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer text-[#36537a] mt-2">
            <FaGithub />
            <span className="hover:border-b-[1.5px] border-[#36537a]">
              Github
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#1b1b1b] px-2 py-8 md:px-32">
        <div className="flex flex-col md:flex-row cursor-pointer">
          <div className="flex justify-center md:justify-start">
            <img src={gsaStarmark} alt="" className="w-16" />
          </div>
          <div className="ml-4 mt-4 md:mt-0">
            <span className="text-[#a8afb0]">data.gov</span>
            <div className="flex gap-2">
              <p className="text-[white]">An official website of the GSA's </p>
              <a
                href="#"
                className="text-[#a8afb0] border-b-[1.5px] border-[#a8afb0] hover:text-[white]"
              >
                Technology Transformation Services
              </a>
              <FiExternalLink className="text-[white] mt-1 text-xl" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 gap-10 cursor-pointer">
          <ul className="text-[#a8afb0]">
            <li className="flex gap-1 mb-1">
              <span className="border-b-[1px] hover:text-white">About GSA</span>
              <FiExternalLink className="text-[white] mt-1 text-xl" />
            </li>
            <li className="flex gap-1">
              <span className="border-b-[1px] hover:text-white">
                Accessibility statement
              </span>
              <FiExternalLink className="text-[white] mt-1 text-xl" />
            </li>
          </ul>
          <ul className="text-[#a8afb0]">
            <li className="flex gap-1 mb-1">
              <span className="border-b-[1px] hover:text-white">
                FOIA requests
              </span>
              <FiExternalLink className="text-[white] mt-1 text-xl" />
            </li>
            <li className="flex gap-1">
              <span className="border-b-[1px] hover:text-white">
                No FEAR Act data
              </span>
              <FiExternalLink className="text-[white] mt-1 text-xl" />
            </li>
          </ul>
          <ul className="text-[#a8afb0] text-sm">
            <li className="flex gap-1 mb-1">
              <span className="border-b-[1px] hover:text-white">
                Office of the Inspector General
              </span>
              <FiExternalLink className="text-[white] text-xl" />
            </li>
            <li className="flex gap-1">
              <FiExternalLink className="text-[white] mt-1 text-xl" />
            </li>
          </ul>

          <ul className="text-[#a8afb0] ">
            <li className="flex gap-1 mb-1">
              <span className="border-b-[1px] hover:text-white">
                Performance reports
              </span>
              <FiExternalLink className="text-[white] mt-1 text-xl" />
            </li>
            <li className="flex gap-1">
              <span className="border-b-[1px] hover:text-white">
                Privacy policy
              </span>
              <FiExternalLink className="text-[white] mt-1 text-xl" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-1 cursor-pointer">
          <p className="text-[white]">
            Looking for U.S. government information and services?
          </p>
          <a href="#" className="font-bold text-[white] border-b-2">
            Visit USA.gov
          </a>
          <FiExternalLink className="text-[white] mt-1 text-xl" />
        </div>
      </div>
    </>
  );
};

export default Footer;
