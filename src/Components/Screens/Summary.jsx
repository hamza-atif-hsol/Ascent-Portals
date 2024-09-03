import React from "react";
import SideBar from "../SideBar";
import SummaryCard from "../CardComponent/SummaryCard";

const Summary = () => {
  return (
    <div className="bg-gradient-to-r from-[#0c1f37] from-10% to-[#103649] to-90% h-full">
      <SideBar portalType="Customer" />
      <div className="py-6 sm:ml-9 mx-4 sm:px-10 flex flex-col justify-center items-center">
        <SummaryCard />
      </div>
    </div>
  );
};

export default Summary;
