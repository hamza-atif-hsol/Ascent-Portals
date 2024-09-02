import React from "react";
import fundLogo from "../../Assets/logo.investor.entity.png";
import Button from "../Button";

const CardHeader = ({
  FundName,
  fundClassName = "",
  showButton = true,
  BtnText,
  showLogo = true,
  logoClassname = "",
  className = "",
  middleContent = null,
  rightContent = null,
}) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-t-md border-[#1b3050] border-b-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.9)] py-2 px-8 flex justify-between h-full w-full ${className}`}
    >
      <div className="flex items-center gap-1 my-2">
        {showLogo && (
          <img
            src={fundLogo}
            alt="Fund Logo"
            className={`w-10 h-auto rounded-md ${logoClassname}`}
          />
        )}
        <h3 className={`text-white font-medium ${fundClassName}`}>{FundName}</h3>
      </div>

      {middleContent && <div className="flex x">{middleContent}</div>}

      <div className="flex items-start">
        {rightContent && <div>{rightContent}</div>}

        {showButton && (
          <Button
            text={BtnText}
            className="bg-[#2c7be5] text-white font-medium border border-gray-700 rounded-lg py-6 px-7 "
          />
        )}
      </div>
    </div>
  );
};

export default CardHeader;
