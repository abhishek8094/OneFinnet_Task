import React from "react";
import navLogo from "../../public/images/navLogo.svg";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import gsaStarmark from "../../public/images/gsaStarmark.png";

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
      <div className="bg-[#e0e1e3] flex justify-around p-8">
        <div>
          <img src={navLogo} alt="" className="w-44" />
          <div className="flex gap-4 mt-2">
            {govDetails.map((detail, idx) => (
              <div
                key={idx}
                className="text-[#36537a] cursor-pointer hover:border-b-[1px] border-[#36537a]"
              >
                {" "}
                {detail} <span className="text-[#488ac3]">|</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-2 cursor-pointer text-[#36537a] ">
            <FaTwitter />
            <span className="hover:border-b-2 border-[#36537a]">Twitter</span>
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer text-[#36537a] ">
            <FaGithub />
            <span className="hover:border-b-2 border-[#36537a]"> Github </span>
          </div>
        </div>
      </div>
      <div className="bg-[#1b1b1b] p-20 ">
        <div className="flex">
          <div>
            <img src={gsaStarmark} alt="" className="w-16" />
          </div>
          <div className="ml-4">
            <span className="text-[#a8afb0]">data.gov</span>
            <div className="flex gap-2">
              <p className="text-[white]">An official website of the GSA's </p>
              <a
                href="#"
                className="text-[#a8afb0] border-b-2 border-[#a8afb0] hover:text-[white]"
              >
                Technology Transformation Services
              </a>{" "}
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>About GSA</li>
            <li>Accessibility statement</li>
          </ul>
          <ul>
            <li>FOIA requests </li>
            <li>No FEAR Act data </li>
          </ul>
          <ul>
            <li> Office of the Inspector General</li>
            <li></li>
          </ul>
          <ul>
            <li> Performance reports</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
