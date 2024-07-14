import React from "react";
import Header from "../component/Header";
import herobg from "../assets/herobg.png";
import xr2 from "../assets/xr2.png";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className=" ">
      <div className=" rounded-[38px] bg-[#1a73bd] bg-opacity-[11%] max-w-[797px] mx-auto p-[14px] gap-[60px] flex justify-center h-[63px] mt-10">
        <Link className="max-w-[127px] w-full text-[25px] text-[#4b4b4b] hover:text-[#1a73bd] ">
          Refer
        </Link>
        <Link className="max-w-[127px] w-full text-[25px] text-[#4b4b4b] hover:text-[#1a73bd] ">
          Benefits{" "}
        </Link>
        <Link className="max-w-[127px] w-full text-[25px]  text-[#4b4b4b] hover:text-[#1a73bd]">
          {" "}
          FAQs
        </Link>
        <Link className="max-w-[127px] w-full text-[25px] text-[#4b4b4b] hover:text-[#1a73bd] ">
          {" "}
          Support
        </Link>
      </div>

      <div className="  relative overflow-hidden  flex items-center max-w-[1360px] h-[692px]  rounded-[29px] bg-[#eef5ff] shadow-[0px_4px_65px_1px_#00072B36] mx-auto mt-[27px]   ">
        <div className="ml-[45px] max-w-[450px] ">
          <h2 className="text-[88px] text-[#1a202c] font-bold ">
            Let's Learn & Earn{" "}
          </h2>

          <p className="text-[40px] mt-[37px] mb-[61px]  ">
            Get a Chance to win up-to <span className="text-[54px] font-bold text-[#1a73eb]  ">Rs15,000</span>{" "}
          </p>

          <Link to={'/login'}  className="text-[20px] bg-[#1a73eb] py-[15px] px-[52px]  rounded-[8px]  ">Refer</Link>
        </div>
      
          <img
            src={herobg}
            alt="xr"
            className=" absolute right-0 -bottom-[33px] h-full    "
          />
       
      </div>
      <div className="bg-blue-100   ">
        <div className="flex justify-center py-5">
          <p className="text-4xl">how do i refer</p>
        </div>
        <div className="flex justify-center">
          <img src={xr2} alt="xr2" className="max-w-[1000px]   " />
        </div>
        <div className="flex justify-center py-5">
          <button className="bg-blue-700 px-7 rounded-lg py-2 text-white">
            refer now
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
