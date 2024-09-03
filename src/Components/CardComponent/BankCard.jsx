import React from "react";
import CardHeader from "./CardHeader";
import Table from "../Tables/Table";
import Button from "../Button";

const BankCard = () => {
  const headers = [
    "Label",
    "Bank Name",
    "Account Type",
    "Account Number",
    "Swift/IFSC",
    "Currency",
    "Status",
    "Action",
  ];

  const rows = [];

  return (
    <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-lg border-[#1b3050] border-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.9)] pt-8 sm:px-4 flex flex-col items-center justify-center h-full w-full sm:w-[98%] sm:mt-0 mt-12">
      <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-md border-[#1b3050] border-[1px] shadow-[0px_6px_20px_rgba(0,0,0,0.9)] mb-16 px-2 sm:px-4 flex flex-col items-center justify-center h-full w-full">
        <CardHeader
          FundName="Bank List"
          fundClassName="text-white"
          showButton={true}
          BtnText="Add New Bank"
          showLogo={false}
        />
        <Table
          headers={headers}
          rows={rows}
          renderRow={(row) => (
            <>
              <td className="py-4 px-2 sm:px-6">{row.label}</td>
              <td className="py-4 px-2 sm:px-6">{row.bankName}</td>
              <td className="py-4 px-2 sm:px-6">{row.accountType}</td>
              <td className="py-4 px-2 sm:px-6">{row.accountNumber}</td>
              <td className="py-4 px-2 sm:px-6">{row.swift}</td>
              <td className="py-4 px-2 sm:px-6">{row.currency}</td>
              <td className="py-4 px-2 sm:px-6">{row.status}</td>
              <td className="py-4 px-2 sm:px-6">{row.action}</td>
            </>
          )}
        />
      </div>
      <hr className="w-full border-t-[1px] border-t-[#6e84a3] opacity-20 " />
      <div className="flex w-full justify-between my-4">
        <Button
          className="bg-[#152e4d] text-white py-4 px-5 sm:py-6 sm:px-7 font-medium border rounded-md"
          text="Back"
          // onClick={}
          icon={false}
        />
        <Button
          className="bg-[#2aaf2a] text-white py-4 px-5 sm:py-6 sm:px-7 font-medium rounded-md"
          text="Next"
          // onClick={}
          icon={false}
        />
      </div>
    </div>
  );
};

export default BankCard;
