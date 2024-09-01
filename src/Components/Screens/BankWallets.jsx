import React from "react";
import SideBar from "../SideBar";
import Card from "../CardComponent/Card";
import BankCard from "../CardComponent/BankCard";

const BankWallets = () => {
  return (
    <div className="bg-gradient-to-r from-[#0c1f37] from-10% to-[#103649] to-90% h-screen">
      <SideBar portalType="Customer" />
      <div className="py-6 ml-9 px-10 flex flex-col justify-center items-center">
        <BankCard />
      </div>
    </div>
  );
};

export default BankWallets;
