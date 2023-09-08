import Sidebar from "./component/Sidebar";

import TabMenuStock from "./component/content/Stock/TabMenuStock";

import { BiSearchAlt2 } from "react-icons/Bi";

function Homestock() {
  return (
    <>
      <div className="font-Kanit">
        <div className="p-5">
          <div className="grid grid-cols-2 gap-6 p-2 lg:grid-cols-3">
            <div className="items-center text-2xl px-14">สต็อกอาหาร</div>

            <div className="flex flex-row bg-[#F9F7F7] gap-3 rounded-full p-1 ">
              <BiSearchAlt2 className="text-[#999999] text-2xl w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#F9F7F7] "
              ></input>
            </div>
          </div>
        </div>

        <div className="flex ">
          <Sidebar />
          <div className="grid w-screen grid-cols-1">
            <div className=" w-screen rounded-xl bg-[#F9F7F7] p-3 ">
              <TabMenuStock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homestock;
