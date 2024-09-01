import React from "react";
import CardHeader from "./CardHeader";

const BankCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-lg border-[#1b3050] border-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.9)] pt-8 px-4 flex flex-col items-center justify-center h-full w-[98%]">
      <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-md border-[#1b3050] border-[1px] shadow-[0px_6px_20px_rgba(0,0,0,0.9)] mb-16 flex flex-col items-center justify-center h-full w-full">
        <CardHeader
          FundName="Bank List"
          showButton={true}
          BtnText="Add New Bank"
          showLogo={false}
        />
        <table className="w-[98%] my-4">
          <thead>
            <tr className="bg-[#12263f] text-[#4f6a86] text-xs font-light uppercase">
              <th className="py-4 px-6">Label</th>
              <th className="py-4 px-6">Bank Name</th>
              <th className="py-4 px-6">Account Type</th>
              <th className="py-4 px-6">Account Number</th>
              <th className="py-4 px-6">Swift/IFSC</th>
              <th className="py-4 px-6">Currency</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <hr className=" w-full border-t-[1px] border-t-[#6e84a3] opacity-20 " />
      <div className="flex w-full justify-between my-4">
        <button className="bg-[#152e4d] text-white py-3 px-8 font-medium border rounded-md">Back</button>
        <button className="bg-[#2aaf2a] text-white py-3 px-8 font-medium rounded-md">Next</button>
      </div>
    </div>
  );
};

export default BankCard;
