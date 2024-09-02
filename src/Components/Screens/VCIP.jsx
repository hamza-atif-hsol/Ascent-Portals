import React from "react";
import Button from "../Button";
import SideBar from "../SideBar";


function VCIP() {
  return (
    <>
     <div className="bg-gradient-to-r from-[#0c2138] from-0% to-[#113c4d] to-100% flex min-h-screen">

    <SideBar portalType="Customer" />
    <div className="bg-custom-gradient w-[88%] ml-32  mt-32 rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)] text-white h-[760px] flex flex-col ">
      <div className="mt-10  border-b-4 border-[#043f63] ">
        <h1 className="text-[1.625rem]   mb-2 ml-10 ">
          VCIP - Video Based Customer Identification Process
        </h1>
      </div>
      <div className="flex space-x-8 mt-[74px] justify-center ">
        <div className="bg-[#062b4d] p-6 ml-4 rounded-lg w-[70%] shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
          <h3 className="text-lg p-[12px] rounded-md  mb-4 shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
            Welcome to the VCIP Step.
          </h3>

          <p className=" mb-4  text-[16px] mt-10">
            To proceed with the VCIP verification when the video recording
            begins:
          </p>
          <ol className="ml-6 list-decimal list-inside space-y-2 ">
            <li >
              Please say out your full name as per your National ID/Passport
              clearly.
            </li>
            <li>Please say out your Birth Date.</li>
            <li>
              Please show us your National ID/Passport, please ensure its
              clearly visible.
            </li>
          </ol>
          <p className=" mb-4  text-[16px] mt-6">
            Please click on the [Start Recording] button when you are ready.{" "}
          </p>
          
        </div>
        <div className="bg-[#062b4d] p-2 h-[430px] mr-4 rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)] w-[34%] ">
          <p className="text-[16px] p-[6px] mb-4  ">
          For personal privacy purpose the video recorded will be blurred.
          </p>
          <div className="flex justify-center items-center mb-4 mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-sky-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 8a6 6 0 016-6h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8zm12 7a1 1 0 112 0v2a1 1 0 11-2 0v-2zm-1-5a3 3 0 00-2.83 2H10a1 1 0 000 2h4a1 1 0 000-2h-.17A3 3 0 0012 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-center mb-4  text-lg mt-10">
          Position your face in the designated area.
          </p>
          <Button
            text="Start Recording"
            className="bg-green-600 hover:bg-green-600 text-white  py-[20px] px-8 rounded-[18px] mx-auto block mt-24"
          />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button
          text="Back"
          className="bg-[#062b4d] py-6 px-8 border b-white ml-4 hover:border-0 rounded-lg text-white mt-20"
        />
        <Button
          text="Next"
          className="bg-green-600 py-6 px-8  mr-4 rounded-lg text-white mt-20"
        />
      </div>
    </div>
    </div>
    </>
  );
}

export default VCIP;
