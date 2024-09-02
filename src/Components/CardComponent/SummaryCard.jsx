import React from "react";
import CardHeader from "./CardHeader";
import Button from "../Button";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";

const rightContent = (
  <div className="flex flex-col gap-1 text-left justify-start items-start py-3">
    <p className="text-white text-sm flex items-center gap-1">
      <span>
        <MdOutlineAccessTime color="#01cc7a" size={16} />
      </span>
      Dealing Cycle: Open
    </p>
  </div>
);

const middleContent = (
  <div className="flex flex-col gap-1 py-3 text-left">
    <p className="text-white text-sm flex items-center gap-1">
      <span>
        <FiCheckCircle color="#01cc7a" size={16} />
      </span>
      Fund's KYC: Accepted
    </p>
    <p className="text-[#6881a3] text-sm flex items-center gap-1">
      <span>
        <FiCheckCircle color="#01cc7a" size={16} />
      </span>
      Fund Domicile: united-states-of-america-(USA)
    </p>
  </div>
);

const SummaryCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-lg border-[#1b3050] border-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.9)] pt-8 px-4 flex flex-col items-center justify-center h-full w-[98%]">
      {/* <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-md border-[#1b3050] border-[1px] shadow-[0px_6px_20px_rgba(0,0,0,0.9)] mb-8 flex flex-col items-center justify-center h-full w-full">
       
      </div> */}
      <CardHeader
          FundName="Demo Fund"
          showButton={false}
          showLogo={true}
          logoClassname="rounded-none w-20"
          className="py-0 rounded-md mb-6"
          rightContent={rightContent}
          middleContent={middleContent}
        />
      <CardHeader
        FundName="Reference Documents"
        showButton={false}
        showLogo={false}
        className="mb-6"
      />
      <div className="flex w-full">
        <div>
          <CardHeader
            FundName="Profile"
            showButton={false}
            showLogo={false}
            fundClassName="text-[#6881a3]"
          />
        </div>
      </div>
      <hr className=" w-full border-t-[1px] border-t-[#6e84a3] opacity-20 mt-6" />
      <div className="flex w-full justify-between my-4">
        <Button
          className="bg-[#152e4d] text-white py-6 px-7 font-medium border rounded-md hover:bg-[#12273f] hover:border-[#1b3050] transition-all duration-200 ease-in-out"
          text="Back"
          icon={false}
        />
        <Button
          className="bg-[#2aaf2a] text-white py-6 px-7 font-medium rounded-md hover:bg-[#00b86b] transition-all duration-200 ease-in-out"
          text="Next"
          icon={false}
        />
      </div>
    </div>
  );
};

export default SummaryCard;
