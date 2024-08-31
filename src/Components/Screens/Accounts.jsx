import React from "react";
import SideBar from "../SideBar";
import Header from "../Header";
import Card from "../CardComponent/Card";

const Accounts = () => {
  function handleClick() {
    console.log("test");
  }

  return (
    <div className="bg-gradient-to-r from-[#0c1f37] from-10% to-[#103649] to-90% ">
      <SideBar portalType="Customer" />
      <div className="py-6 ml-9 px-10">
        <Header
          heading="My Accounts"
          subheading="Overview"
          showButton={true}
          onButtonClick={handleClick}
        />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Accounts;
