"use client";

import { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="cursor-pointer flex justify-between items-center  border-b border-color-[rgba(0,0,0,0.5)] "
        onClick={toggleCollapse}
      >
        <h2 className="text-lg font-semibold pb-[15px]">{title}</h2>
      </div>
      <div
        className={`collapsible ${isOpen ? "block" : "hidden"}`}
        aria-expanded={isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
