import React from "react";
import SideBar from "../SideBar";
import Header from "../Header";


const Accounts = () => {
  function handleClick() {
    console.log("test");
  }
  return (
    <div className="bg-gradient-to-r from-[#0c2138] from-0% to-[#113c4d] to-100% h-screen">
      <SideBar portalType="Customer" />
      <div className="py-10 ml-16 px-12">
        <Header
          heading="Domain Accounts"
          subheading="Customer Portal"
          showButton={true}
          onButtonClick={handleClick}
        />
        
      </div>
    </div>
  );
};

export default Accounts;
