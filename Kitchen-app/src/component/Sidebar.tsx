import React, { useState } from 'react';
import { VscHome } from "react-icons/Vsc";
import { LuClock3 } from "react-icons/Lu";
import { CgBox } from "react-icons/Cg";
import {Link} from "react-router-dom";
// import TabSideBar from './TabSideBar';
import { GoDotFill } from "react-icons/Go";
import { BiSearchAlt2 } from "react-icons/Bi";
import TabSideBar from './TabSideBar';
import Homebill from '../Homebill';
import App from '../Homepage';
import Homestock from '../Homestock';

const Sidebar: React.FC = () => {
  const tabContenSideBar = [
    {
      label:
      <p className="flex justify-center gap-2">
      <VscHome className="text-4xl" />
    </p>,
      content: <div>l</div>,
    },
    {
      label:
      <p className="flex justify-center gap-2">
      <LuClock3 className="text-4xl" />
    </p>,
      content: <div>รายการบิลทั้งหมด</div>,
    },
    {
      label:
      <p className="flex justify-center gap-2">
      <CgBox className="text-4xl" />
    </p>,
      content: <div>สต็อก</div>,
    },
  ];

  return (
<>
<div className='h-screen'>
      <nav className="flex-1">
        <ul className="p-4 text-4xl text-red-600">

          <li className="mb-9">
            <Link to="/" className="block"><VscHome/></Link>
          </li>

          <li className="mb-9">
            <Link to="/bill" className="block" ><LuClock3/></Link>
          </li>

          <li className="mb-9">
            <Link to="/stock" className="block"><CgBox/></Link>
          </li>

          <li className="mb-9">
            <Link to="/home" className="block"><CgBox/></Link>
          </li>

        

        </ul>
      </nav>

    </div>

    {/* <div className="container p-4 mx-auto">
    <TabSideBar tabs ={tabContenSideBar} />
    </div> */}

    </>
  );
};

export default Sidebar;
// import React, { useState } from 'react';
// const Sidebar = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div className="w-full p-4 bg-white">
//       <div className="flex space-x-4">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             className={`${
//               activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//             } px-4 py-2 rounded-md`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div className="mt-4">{tabs[activeTab].content}</div>
//     </div>
//   );
// };

// export default Sidebar;