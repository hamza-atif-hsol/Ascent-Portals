import React from "react";
import Logo from "../Assets/OneConstellation.png";
import { RxDashboard } from "react-icons/rx";
import { TbUsers, TbSwitch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlineAccountTree } from "react-icons/md";
import { PiCompass } from "react-icons/pi";
import Tooltip from "./Tooltip";

const SideBar = ({ portalType }) => {
  return (
    <>
      {portalType === "Compliance" && (
        <div className="bg-[#152e4d] h-screen w-16 fixed flex flex-col content-between items-center py-6">
          <img
            src={Logo}
            alt="One Constellation Logo"
            className="w-6 items-center"
          />
          <div className="flex flex-col content-between h-screen">
            <div className="flex-grow flex flex-col gap-6 items-center mt-8">
              <Tooltip content="Domains">
                <Link to="">
                  <RxDashboard
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Customers">
                <Link to="">
                  <TbUsers
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Switch">
                <Link to="">
                  <TbSwitch
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Settings">
                <Link to="">
                  <CiSettings
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Ageing Report">
                <Link to="">
                  <MdOutlineFileDownload
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Consumption Report">
                <Link to="">
                  <MdOutlineFileDownload
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <hr className="w-full border-t border-[#6e84a3] opacity-10" />
            </div>
            {/* Bottom Section */}
            <div className="flex flex-col items-center gap-6">
              <hr className="w-full border-t border-[#6e84a3] opacity-10" />
              <Link to="">
                <FaRegBell
                  size={18}
                  className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                />
              </Link>
              <div className="bg-[#244166] rounded-full text-sm text-white w-12 h-12 flex items-center justify-center">
                <p>U</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {portalType === "Customer" && (
        <div className="bg-[#152e4d] h-screen w-16 fixed flex flex-col content-between items-center py-6">
          <img
            src={Logo}
            alt="One Constellation Logo"
            className="w-6 items-center"
          />
          <div className="flex flex-col content-between h-screen">
            <div className="flex-grow flex flex-col gap-6 items-center mt-8">
              <Tooltip content="Dashboard">
                <Link to="">
                  <FiHome
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Documents">
                <Link to="">
                  <IoDocumentsOutline
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Accounts">
                <Link to="">
                  <MdOutlineAccountTree
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Identities">
                <Link to="">
                  <TbUsers
                    size={14}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Walkthrough">
                <Link to="">
                  <PiCompass
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <hr className="w-full border-t border-[#6e84a3] opacity-10" />
            </div>
            {/* Bottom Section */}
            <div className="flex flex-col items-center gap-6">
              <hr className="w-full border-t border-[#6e84a3] opacity-10" />

              <div className="bg-[#244166] rounded-full text-sm text-white w-10 h-10 flex items-center justify-center">
                <p>U</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {portalType === "Manager" && (
        <div className="bg-[#152e4d] h-screen w-16 fixed flex flex-col content-between items-center py-6">
          <img
            src={Logo}
            alt="One Constellation Logo"
            className="w-6 items-center"
          />
          <div className="flex flex-col content-between h-screen">
            <div className="flex-grow flex flex-col gap-6 items-center mt-8">
              <Tooltip content="Domains">
                <Link to="">
                  <RxDashboard
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>
              <Tooltip content="Switch">
                <Link to="">
                  <TbSwitch
                    size={18}
                    className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                  />
                </Link>
              </Tooltip>

              <hr className="w-full border-t border-[#6e84a3] opacity-10" />
            </div>
            {/* Bottom Section */}
            <div className="flex flex-col items-center gap-6">
              <hr className="w-full border-t border-[#6e84a3] opacity-10" />
              <Link to="">
                <FaRegBell
                  size={18}
                  className="text-[#6e84a3] hover:text-white transition-colors duration-200"
                />
              </Link>
              <div className="bg-[#244166] rounded-full text-sm text-white w-10 h-10 flex items-center justify-center">
                <p>U</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
