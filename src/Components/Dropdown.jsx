import React from "react";

const Dropdown = ({ label, options, onChange, value }) => {
  return (
    <div className="flex flex-col text-white w-1/4">
      <label className="mb-2">{label}</label>
      <select
        className="bg-[#043f63] text-white p-2 shadow-[0px_6px_20px_rgba(0,0,0,0.9)] rounded-md border border-[#1c3758]"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
