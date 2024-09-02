import React from "react";
import CardHeader from "./CardHeader";
import Table from "../Tables/Table";
import Button from "../Button";

const ApplicationCard = () => {
  const DocHeaders = ["Type", "Date", "Status", "E Sign", "Action"];
  const THistoryHeaders = [
    "Subscription Type",
    "Amount",
    "No of shares",
    "Currency",
    "Status",
    "Date",
    "Last Nav Price",
    "No of shares Owned",
    "Action",
  ];

  const docRows = [
    {
      type: "Subscription Application",
      date: "",
      status: "Not Completed",
      esign: "",
      actionText: "Sign & Submit",
    },
    {
      type: "Subscription Application",
      date: "",
      status: "Not Completed",
      esign: "",
      actionText: "Sign & Submit",
    },
  ];

  const historyRows = [];

  return (
    <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-lg border-[#1b3050] border-[1px] shadow-[2px_6px_20px_rgba(0,0,0,0.9)] pt-8 px-4 flex flex-col items-center justify-center h-full w-[98%] sm:mt-0 mt-12">
      <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-md border-[#1b3050] border-[1px] shadow-[0px_6px_20px_rgba(0,0,0,0.9)] mb-8 flex flex-col items-center justify-center h-full w-full">
        <CardHeader
          FundName="Review & Sign Documents"
          showButton={false}
          BtnText="Add New Bank"
          showLogo={false}
        />
        <Table
          headers={DocHeaders}
          rows={docRows}
          renderRow={(row) => (
            <>
              <td className="py-4 px-4 uppercase">{row.type}</td>
              <td className="py-4 px-4">{row.date}</td>
              <td className="py-4 px-4">{row.status}</td>
              <td className="py-4 px-4">{row.esign}</td>
              <td className="py-4 px-4">
                <button className="bg-[#e63757] text-white py-3 px-8 font-medium rounded-md hover:bg-[#c4304a] transition-all duration-200 ease-in-out">
                  {row.actionText}
                </button>
              </td>
            </>
          )}
        />
      </div>
      <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-md border-[#1b3050] border-[1px] shadow-[0px_6px_20px_rgba(0,0,0,0.9)] mb-8 flex flex-col items-center justify-center h-full w-full">
        <CardHeader
          FundName="Trasaction History"
          showButton={false}
          BtnText="Add New Bank"
          showLogo={false}
        />
        <Table
          headers={THistoryHeaders}
          rows={historyRows}
          renderRow={(row) => (
            <>
              <td className="py-4 px-6 uppercase">{row.standardType}</td>
              <td className="py-4 px-6 uppercase">{row.amount}</td>
              <td className="py-4 px-6 uppercase">{row.NoOfShare}</td>
              <td className="py-4 px-6 uppercase">{row.currency}</td>

              <td className="py-4 px-6">{row.status}</td>
              <td className="py-4 px-6">{row.date}</td>
              <td className="py-4 px-6">{row.lastNavPrice}</td>
              <td className="py-4 px-6">{row.NoOfShareOwned}</td>
              <td className="py-4 px-6">
                <button className="bg-[#e63757] text-white py-3 px-8 font-medium rounded-md">
                  {row.actionText}
                </button>
              </td>
            </>
          )}
        />
      </div>
      <hr className=" w-full border-t-[1px] border-t-[#6e84a3] opacity-20 mt-6" />
      <div className="flex w-full justify-between my-4">
        <Button
          className="bg-[#152e4d] text-white py-6 px-7 font-medium border rounded-md hover:bg-[#12273f] hover:border-[#1b3050] transition-all duration-200 ease-in-out"
          text="Back"
          // onClick={}
          icon={false}
        />
        <Button
          className="bg-[#2aaf2a] text-white py-6 px-7 font-medium rounded-md hover:bg-[#00b86b] transition-all duration-200 ease-in-out"
          text="Next"
          // onClick={}
          icon={false}
        />
      </div>
    </div>
  );
};

export default ApplicationCard;
