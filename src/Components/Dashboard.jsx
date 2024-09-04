import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import AUMCard from "./CardComponent/AUMCards";
import CardHeader from "./CardComponent/CardHeader";
import FinancialChart from "./FinancialChart";

function Dashboard() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [5, 10, 20, 25, 18, 7, 12, 22, 15, 19, 25, 37],
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#0c1f37] from-10% to-[#103649] to-90% flex flex-col md:flex-row">
        <SideBar portalType="Customer" />
        <div className="w-full">
          <div className="flex-1 py-6 sm:ml-9 sm:px-10 px-4">
            <Header
              heading="Dashboard"
              subheading="INVESTOR PORTAL"
              showButton={false}
            />
            <div className="flex space-x-10">
              <AUMCard
                date=" As at 03/09/2024"
                amount="38,000,000.00"
                text="Current Total AUM"
              />
              <AUMCard amount="40,000,000.00" text="Total Subscription" />
              <AUMCard amount="1,000,000.00" text="Total Redemption" />
            </div>
            <div className="flex justify-between mt-7 ml-6">
              <div className="w-[48%] rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
                <div className="w-full">
                  <CardHeader
                    FundName="NAV HISTORY"
                    fundClassName="text-white"
                    showButton={false}
                    showLogo={false}
                  />
                </div>
                <FinancialChart data={data} year="2024" chartType="bar" />
              </div>
              <div className="w-[48%] rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
                <div className="w-full">
                  <CardHeader
                    FundName="PRICE CHART"
                    fundClassName="text-white"
                    showButton={false}
                    showLogo={false}
                  />
                </div>
                <FinancialChart data={data} year="2024" chartType="line" />
              </div>
            </div>
            <div className="flex justify-between mt-7 ml-6 overflow-hidden rounded-lg shadow-[5px_1px_px_rgba(0,0,0,0.3)]">
              <div className="w-[33%] overflow-hidden rounded-lg ">
                <div className="w-full overflow-hidden shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)] ">
                  <CardHeader
                    FundName="PERFORMANCE HISTORY"
                    fundClassName="text-white"
                    showButton={false}
                    showLogo={false}
                  />
                </div>
                <FinancialChart data={data} year="2024" chartType="bar" />
              </div>
              <div className="w-[65%] rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
                <div className="w-full rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
                  <CardHeader
                    FundName="LATEST ACTIVITY"
                    fundClassName="text-white"
                    showButton={true}
                    showLogo={false}
                    BtnText="View All"
                    className="text-blue-600 text-md"
                  />
                </div>
                <FinancialChart data={data} year="2024" chartType="bar" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
