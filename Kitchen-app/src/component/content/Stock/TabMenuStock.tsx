import React from 'react'
import TabListMenu from './TabListMenu';
import TabListRawMaterial from './TabListRawMaterial';
import { Tab, initTE } from "tw-elements";
import { useEffect } from "react";
import TabMenuAndMaterial from './TabMenuAndMaterial';
import { PiCookingPotFill } from "react-icons/Pi";
import { FaMortarPestle } from "react-icons/Fa";
import { MdFastfood } from "react-icons/Md";
import { FaFishFins } from "react-icons/fa6";
import { TbMeat } from "react-icons/Tb";
import BoilCurry from './ListMenu/BoilCurry';
function TabMenuStock() {

  useEffect(() => {
    initTE({ Tab });
  }, []);

  const tabsContentMeneu = [
    {
      label: <p className='flex justify-center gap-2'><PiCookingPotFill className='text-2xl'/> ต้ม/แกง</p>,
      content: <div className='h-screen '><BoilCurry/></div>
    },
    {
      label: <p className='flex justify-center gap-2'> ผัด/ทอด</p>,
      content: <div className='h-screen'> ผัด/ทอด</div>,
    },
    {
      label: <p className='flex justify-center gap-2'><FaMortarPestle className='text-2xl'/> แซ่บ</p>,
      content: <div className='h-screen'> แซ่บ</div>,
    },
    {
      label: <p className='flex justify-center gap-2'><MdFastfood className='text-2xl'/>ทานเล่น</p>,
      content: <div className='h-screen'> ทานเล่น</div>,
    },
    {
      label: 'อื่นๆ',
      content: <div> อื่นๆ</div>,
    },

  ];


  const tabsContentMaterial = [
    {
      label: <p className='flex justify-center gap-2'><FaFishFins className='text-2xl'/> ทะเล </p>,
      content: <div className='h-screen'>ทะเล</div>
    },
    {
      label: <p className='flex justify-center gap-2'><TbMeat className='text-2xl'/> เนื้อสัตว์ </p>,
      content: <div className='h-screen'> เนื้อสัตว์</div>,
    },
    {
      label: 'ผัก',
      content: <div className='h-screen'>ผัก</div>,
    },
    {
      label: 'เครื่องปรุง',
      content: <div className='h-screen'> เครื่องปรุง</div>,
    },
    {
      label: 'อื่นๆ',
      content: <div className='h-screen'> อื่นๆ</div>,
    },

  ];


  const tabMenuAndMaterial = [
    {
      label:<p className='w-32 '>รายการอาหาร</p>,
      content: <div className='p-6 bg-white rouynded-full'> <TabListMenu tabs={tabsContentMeneu} /></div>
    },
    {
      label: <p className='w-32'>วัตถุดิบ</p>,
      content: <div className='p-6 bg-white'> <TabListRawMaterial tabs={tabsContentMaterial} /></div>,
    },

  ];

  return (
    <>
      <div>
        <TabMenuAndMaterial  tabs={tabMenuAndMaterial} />
      </div>
    </>

  )
}

export default TabMenuStock