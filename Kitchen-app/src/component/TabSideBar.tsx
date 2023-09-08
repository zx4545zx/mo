import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface VerticalTabProps {
  tabs: Tab[];
}

const TabSideBar: React.FC<VerticalTabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex">
      <div className="grid p-6 bg-green-600">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer ${
                index === activeTab ? 'bg-[#ED7E46] rounded-full text-[#FFFFFF]' : 'bg-white text-[#5F5F5F]'
              } px-4 py-4 rounded-full text-center text-[#5F5F5F]`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4 wh-full w-screen bg-[#F9F7F7] rounded-xl">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabSideBar;