import React from "react";
import SideBar from "../SideBar";
import Header from "../Header";

const Accounts = () => {
  function handleClick() {
    console.log("test");
  }

  const content = (
    <div>
      <h3 className="text-lg font-semibold text-white">Muhammad Imran AX</h3>
      <p className="text-gray-400">
        Nationality: Aland Islands <span className="text-white">✔</span>
      </p>
      <p className="text-gray-400">
        Country of residence: Akrotiri <span className="text-green-500">✔</span>
      </p>
      <p className="text-gray-400">
        Customer Type: Individual <span className="text-green-500">✔</span>
      </p>
      <p className="text-white">
        Subscription Type: Standalone <span className="text-green-500">✔</span>
      </p>
      <p className="text-white">
        Status: Pending <span className="text-green-500">✔</span>
      </p>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-[#0c1f37] from-10% to-[#103649] to-90% h-screen">
      <SideBar portalType="Customer" />
      <div className="py-6 ml-16 px-10">
        <Header
          heading="My Accounts"
          subheading="Overview"
          showButton={true}
          onButtonClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Accounts;
