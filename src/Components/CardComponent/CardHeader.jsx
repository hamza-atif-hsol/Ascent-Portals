import React from "react";
import fundLogo from "../../Assets/logo.investor.entity.png";

const CardHeader = ({ FundName }) => {
  return (
    <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-t-md border-[#1b3050] border-b-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.9)] py-3 px-8 flex items-center justify-between h-full w-[98%]">
      <div className="flex items-center gap-1">
        <img src={fundLogo} alt="Fund Logo" className="w-10 h-auto rounded-md" />
        <h3 className="text-white font-medium">{FundName}</h3>
      </div>
      <div></div>
    </div>
  );
};

export default CardHeader;
