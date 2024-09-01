import React from "react";
import CardHeader from "./CardHeader";

const ApplicationCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-lg border-[#1b3050] border-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.9)] pt-8 px-4 flex flex-col items-center justify-center h-full w-[98%]">
      <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-md border-[#1b3050] border-[1px] shadow-[0px_6px_20px_rgba(0,0,0,0.9)] mb-8 flex flex-col items-center justify-center h-full w-full">
        <CardHeader
          FundName="Review & Sign Documents"
          showButton={false}
          BtnText="Add New Bank"
          showLogo={false}
        />
        <table className="w-[97%] my-4 ">
          <thead>
            <tr className="bg-[#12263f] text-[#4f6a86] text-[10px] text-left font-light uppercase  border-[#1b3050] border-b-[1px]">
              <th className="py-4 px-6">Type</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">E Sign</th>
              <th className="py-4 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white text-sm text-left font-medium border-[#1b3050] border-t-[1px]">
              <td className="py-4 px-6 uppercase">Subscription Application</td>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">Not Completed</td>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">
                <button className="bg-[#e63757] text-white py-3 px-8 font-medium rounded-md">
                  Sign & Submit
                </button>
              </td>
            </tr>
            {/* <hr className=" w-full border-t-[1px] border-t-[#6e84a3] opacity-20 " /> */}
            <tr className="text-white text-sm text-left font-medium border-[#1b3050] border-t-[1px]">
              <td className="py-4 px-6 uppercase">Subscription Application</td>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">Not Completed</td>
              <td className="py-4 px-6"></td>
              <td className="py-4 px-6">
                <button className="bg-[#e63757] text-white py-3 px-8 font-medium rounded-md">
                  Sign & Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-md border-[#1b3050] border-[1px] shadow-[0px_6px_20px_rgba(0,0,0,0.9)] mb-16 flex flex-col items-center justify-center h-full w-full">
        <CardHeader
          FundName="Transaction History"
          showButton={false}
          BtnText="Add New Bank"
          showLogo={false}
        />
        <table className="w-[97%] my-4 ">
          <thead>
            <tr className="bg-[#12263f] text-[#4f6a86] text-[10px] text-center  font-light uppercase  border-[#1b3050] border-b-[1px]">
              <th className="py-4 px-2">Subscription Type</th>
              <th className="py-4 px-2">Amount</th>
              <th className="py-4 px-2">No of shares</th>
              <th className="py-4 px-2">Currency</th>
              <th className="py-4 px-2">Status</th>
              <th className="py-4 px-2">date</th>
              <th className="py-4 px-2">Last Nav Price</th>
              <th className="py-4 px-2">No of shares owned</th>
              <th className="py-4 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white text-sm text-left font-medium border-[#1b3050] border-t-[1px]">
             
            </tr>
            
           
          </tbody>
        </table>
      </div>
      <hr className=" w-full border-t-[1px] border-t-[#6e84a3] opacity-20 " />
      <div className="flex w-full justify-between my-4">
        <button className="bg-[#152e4d] text-white py-3 px-8 font-medium border rounded-md">
          Back
        </button>
        <button className="bg-[#2aaf2a] text-white py-3 px-8 font-medium rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
