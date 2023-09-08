
import React, { useState } from 'react';
const TabStatus = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="grid w-full h-screen gap-3 p-3 justify-items-center">
      <div className="grid grid-cols-3 gap-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              activeTab === index ? 'bg-[#FAEEE8] text-[#585858] rounded-full' : 'bg-white text-gray-700'
            } px-4 py-2 rounded-xl w-40 text-center`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>


    </div>
  );
};

export default TabStatus;

