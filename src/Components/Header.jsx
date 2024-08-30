import React from 'react';
import Button from "./Button";
import {
  FaRegFileAlt,
  FaEye,
  FaCreditCard,
  FaToggleOn,
  FaTrashAlt,
  FaCheck,
} from "react-icons/fa";

const Header = ({ subheading, heading, showButton, onButtonClick }) => {
  return (
    <>
    <div className="flex items-center">
      {/* Left Side: Subheading and Heading */}
      <div className='my-[35px] w-[80%]'>
        <h6 className="mx-[130px] text-xs text-[#6e84a3] uppercase">{subheading}</h6>
        <h1 className="mx-[130px] text-3xl text-white">{heading}</h1>
      </div>

      {showButton && (
        // <button
        //   className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 my-[35px] w-[10%]"
        //   onClick={onButtonClick}
        // >
        //   Create an Account
        // </button>


        <Button
        text="Create An Account"
        // onClick={handleClick}
        className="bg-[#0d6efd] text-white rounded-lg p-4   "
        icon={<FaCreditCard />}
        iconPosition="left"
      />
      )}
    </div>
    <hr className=" w-[87%] border-t-[1px] border-t-[rgb(85,85,85)] mx-[120px]" />
    </>
  );
};

export default Header;
