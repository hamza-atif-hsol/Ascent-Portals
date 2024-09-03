import React from "react";
import Table from "../Tables/Table";
import Header from "../Header";
import Button from "../Button";
import SideBar from "../SideBar";

const Identities = () => {
  const Headers = ["Name", "Type", "Status", "Actions"];
  const Rows = [
    {
      name: "Hamilton sosa sn",
      type: "Individual",
      status: "Active",
      //   actionText: "Sign & Submit",
    },
    {
      name: "Testa dasa ax",
      type: "Individual",
      status: "Active",
      //   actionText: "Sign & Submit",
    },
    {
      name: "Dsdsad adsd af",
      type: "Individual",
      status: "Active",
      //   actionText: "Sign & Submit",
    },
    {
      name: "Wqwd aasd ax",
      type: "Individual",
      status: "Active",
      //   actionText: "Sign & Submit",
    },
    {
      name: "Egdfg ewer al",
      type: "Individual",
      status: "Active",
      //   actionText: "Sign & Submit",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#0c1f37] from-10% to-[#103649] to-90% h-screen">
      <SideBar portalType="Customer" />
      <div className="py-6 sm:ml-12 mx-4 sm:px-10 ">
        <div className=" w-full">
          <Header
            heading="My Identites"
            subheading="Overview"
            showButton={false}
            //   onButtonClick={handleClick}
          />
          <div className="flex justify-end mb-8">
            <p></p>
            <Button
              className="bg-[#2c7be5] text-white font-light rounded-lg py-6 px-8 text-sm sm:text-md"
              text="Create New Identity"
            />
          </div>
          {/* <hr className=" w-[99%] border-t-[1px] border-t-[#6e84a3] opacity-20 my-6 mx-6" /> */}
        </div>
        <div className="flex flex-col w-full items-center justify-center ml-6">
          <div className="bg-gradient-to-b from-[#0e325a] from-10% to-[#141c3a] to-100% rounded-t-md border-[#1b3050] border-b-[1px] shadow-[0px_6px_20px_rgba(0,0,0,0.9)]  flex flex-col items-center justify-center h-full w-full">
            <p className="py-2 text-[#ee9d0b] text-xs w-full px-4">
              Please note that you can set your identities to "Inactive" or
              "Active" by using the toggle button. Your submitted account
              applications will not be impacted if you set your identities as
              "Inactive" <br />
              To delete/withdraw an account application, please proceed to the
              Account Details page to perform this action. <br />
              Please note that you can only delete/withdraw an application which
              are in "Draft" or "Pending" statues. Applications that has been
              already processed for KYC screening cannot be deleted/withdrawn.
              <br />
              You may contact your Account Manager to assist you in this case.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#0e325a] from-2% to-[#141c3a] to-100% shadow-[0px_6px_20px_rgba(0,0,0,0.9)] rounded-b-md border-[#1b3050] border-[1px] w-full">
            <Table
              headers={Headers}
              rows={Rows}
              renderRow={(row) => (
                <>
                  <td className="py-4 px-6">{row.name}</td>
                  <td className="py-4 px-6">{row.type}</td>
                  <td className="py-4 px-6 text-[#01cc7a]">{row.status}</td>
                  <td className="py-4 px-6">
                    {/* <button className="bg-[#e63757] text-white py-3 px-8 font-medium rounded-md hover:bg-[#c4304a] transition-all duration-200 ease-in-out">
                      {row.actionText}
                    </button> */}
                  </td>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identities;
