// import { useState } from "react";
import { Tab, initTE } from "tw-elements";

initTE({ Tab });

import Sidebar from "./component/Sidebar";
import { GoDotFill } from "react-icons/Go";
import { BiSearchAlt2 } from "react-icons/Bi";
import Todo from "./component/content/Bill/Todo";
import Complete from "./component/content/Bill/Complete";
import Problem from "./component/content/Bill/Problem";
import TabStatus from "./component/content/Bill/TabStatus";
import TodoTest from "./component/content/Bill/TodoTest";
const tabContenStatus = [
  {
    label: (
      <p className="flex justify-center gap-2">
        <GoDotFill className="text-[#ED7E46]" />
        กำลังทำ
      </p>
    ),
    content: (
      <div className="h-screen p-6 ">
        <Todo />
        {/* <TodoTest /> */}
      </div>
    ),
  },
  {
    label: (
      <p className="flex justify-center gap-2">
        <GoDotFill className="text-[#0AEA49]" />
        ทำเสร็จแล้ว
      </p>
    ),
    content: (
      <div className="h-screen p-6">
        <Complete />
      </div>
    ),
  },
  {
    label: (
      <p className="flex justify-center gap-2">
        <GoDotFill className="text-[#EC1C24]" />
        มีปัญหา
      </p>
    ),
    content: (
      <div className="h-screen p-6">
        <Problem />
      </div>
    ),
  },
];
function Homebill() {
  return (
    <>
      <div className="w-full h-screen bg-[#FFFFFF] font-Kanit">
        <div className="p-5">
          <div className="grid grid-cols-2 gap-6 p-2 lg:grid-cols-4">
            <div className="items-center text-2xl px-14">รายการบิลทั้งหมด</div>

            <div className="flex flex-row bg-[#F9F7F7] gap-3 rounded-full p-1 ">
              <BiSearchAlt2 className="text-[#999999] text-2xl w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#F9F7F7] "
              ></input>
            </div>
            <div></div>
            <div className="flex flex-row items-center justify-end w-full gap-2">
              <GoDotFill className="text-[#ED7E46]" />
              กำลังทำ
              <GoDotFill className="text-[#0AEA49]" />
              ทำเสร็จแล้ว
              <GoDotFill className="text-[#EC1C24]" />
              มีปัญหา
            </div>
          </div>
        </div>
        <div className="flex ">
          <Sidebar />

          <div className="w-screen rounded-xl bg-[#F9F7F7] p-6  ">
            <TabStatus tabs={tabContenStatus} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homebill;
