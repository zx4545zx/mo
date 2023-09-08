import React from 'react'
import Header from './header'
import { VscHome } from "react-icons/Vsc";
import { LuClock3 } from "react-icons/Lu";
import { CgBox } from "react-icons/Cg";
import TabSideBar from './TabSideBar'
import TabMenuStock from './content/Stock/TabMenuStock';
import TabStatus from './content/Bill/TabStatus';
import { GoDotFill } from "react-icons/Go";
import Todo from './content/Bill/Todo';
import Complete from './content/Bill/Complete';
import Problem from './content/Bill/Problem';
import { BiSearchAlt2 } from "react-icons/Bi";
function Home() {
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
  const tabContenSideBar = [
    {
      label:
        <p className="flex justify-center gap-2 ">
          <VscHome className="text-4xl" />
        </p>,
      content: <div>l</div>,
    },
    {
      label:
        <p className="flex justify-center gap-2">
          <LuClock3 className="text-4xl" />
        </p>,
      content: <div>  <TabStatus tabs={tabContenStatus} /></div>,
    },
    {
      label:
        <p className="flex justify-center gap-2">
          <CgBox className="text-4xl" />
        </p>,
      content: <div><TabMenuStock /></div>,
    },
  ];
  return (
    <>
      <div className="w-full h-screen bg-[#FFFFFF] font-Kanit">
        <div className="p-5">
          <Header />
        </div>
        <div className="flex w-full h-screen">
          <TabSideBar tabs={tabContenSideBar} />
        </div>
      </div>


    </>
  )
}

export default Home