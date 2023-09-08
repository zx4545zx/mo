
import React, { useState } from 'react';
const TabMenuAndMaterials = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };



  return (
    <div className="w-full h-screen p-4 ">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              activeTab === index ? 'bg-white rounded-t-full  border-2 border-[#ED7E46]' : 'bg-[#E3E3E3] rounded-t-full'
            } px-4 py-2`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>

    </div>
  );
};

export default TabMenuAndMaterials;
