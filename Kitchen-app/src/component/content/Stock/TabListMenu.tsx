
import React, { useState } from 'react';
const TabListMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };



  return (
    <div className="w-full h-screen p-4">
      <div className="flex gap-5 lg:gap-20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              activeTab === index ? 'bg-[#ED7E46] text-white rounded-xl' : 'bg-gray-200 text-gray-700'
            } px-4 py-2 rounded-xl w-32 text-center`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>


    </div>
  );
};

export default TabListMenu;

