import React from "react";
import Button from "../Button";
import SideBar from "../SideBar";


function FaceVerification() {
  return (
    <>
 <div className="bg-gradient-to-r from-[#0c2138] from-0% to-[#113c4d] to-100% flex min-h-screen">
    <SideBar portalType="Customer" />
    <div className="bg-custom-gradient w-[80%] ml-32  mt-32 rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)] text-white h-[780px] flex flex-col ">
      <div className="mt-10  border-b-4 border-[#043f63] ">
        <h1 className="text-2xl  mb-2 ml-10 ">Liveliness Test</h1>
        <p className="text-md mb-6 ml-10 mt-4 ">
          To meet the regulatory KYC and AML/CFT requirements, this step helps
          us to ensure that you are who you say you are.
        </p>
      </div>
      <div className="flex space-x-8 mt-[74px] justify-center ">
        <div className="bg-[#062b4d] p-6 rounded-lg w-[40%] shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
          <h2 className="text-lg p-[12px] rounded-md  mb-4 text-center shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
            Face Snap
          </h2>
          <div className="flex justify-center items-center mb-4 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-sky-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2a6 6 0 00-6 6v1H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2h-2V8a6 6 0 00-6-6zm-1 11a1 1 0 112 0v2a1 1 0 11-2 0v-2zm1-5a3 3 0 00-2.83 2H10a1 1 0 000 2h4a1 1 0 000-2h-.17A3 3 0 0012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-center mb-4  text-lg mt-10">
            Position your face within designated area.
          </p>
          <Button
            text="Proceed"
            className="bg-red-500 hover:bg-red-600 text-white py-[20px] px-4 rounded-[10px] mx-auto block mt-10"
          />
        </div>
        <div className="bg-[#062b4d] p-6 rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)] w-[40%] ">
          <h2 className="text-lg p-[12px] rounded-md  mb-4 text-center shadow-[5px_5px_15px_5px_rgba(0,0,0,0.3)]">
            National ID / Passport with Photo
          </h2>
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
            Position the front of your National ID / Passport within the frame.
          </p>
          <Button
            text="Proceed"
            className="bg-red-500 hover:bg-red-600 text-white py-[20px] px-4 rounded-[10px] mx-auto block mt-10"
          />
        </div>
        
      </div>
      <div className="flex justify-between mt-2">
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

export default FaceVerification;
