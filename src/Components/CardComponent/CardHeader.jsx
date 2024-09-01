import React from "react";
import fundLogo from "../../Assets/logo.investor.entity.png";
import Button from "../Button";

const CardHeader = ({ FundName, showButton = true, BtnText, showLogo = true }) => {
  return (
    <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-t-md border-[#1b3050] border-b-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.9)] py-2 px-8 flex items-center justify-between h-full w-full">
      <div className="flex items-center gap-1 my-2">
        {showLogo && (
          <img
            src={fundLogo}
            alt="Fund Logo"
            className="w-10 h-auto rounded-md"
          />
        )}
        <h3 className="text-white font-medium">{FundName}</h3>
      </div>
      {showButton && (
        <div>
          <Button
            text={BtnText}
            // onClick={handleClick}
            className="bg-[#2c7be5] text-white font-medium border border-gray-700 rounded-lg py-6 px-7 "
            // icon={<FaCreditCard />}
            // iconPosition="left"
          />
        </div>
      )}
    </div>
  );
};

export default CardHeader;
