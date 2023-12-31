import React from "react";
import Switch from "./Switch";
import { CiClock2 } from "react-icons/Ci";
import { BiSolidCheckbox } from "react-icons/Bi";
import Toggle from "../Toggle";
function BoilCurry() {
  // const data = [
  //   {
  //     TypeMenu: 1, table: 'A1-1', zone_name: 'โซนบาร์ห้องแอร์', billStatus: 'waiting', time: '20.00', Order_detail: [
  //       { menuId: 1, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'complete' },
  //     ]
  //   },
  // ]

  const data = [
    { menuID: 1, nameMenu: "ต้มยำไข่น้ำ" },
    { menuID: 1, nameMenu: "ต้มยำรวมมิตร" },
    { menuID: 1, nameMenu: "แกงส้ม" },
    { menuID: 1, nameMenu: "โป๊ะแตก" },
    { menuID: 1, nameMenu: "ซุปกิมจิ" },
  ];

  const Card = ({ menuID, nameMenu }) => {
    const a = false;
    return (
      <>
        <div className="p-4 ">
          <div className="w-2/4 p-3 bg-white border-2 rounded-full border-[#ED7E46] card-content">
            <div className="grid grid-cols-2 ">
              <div className={a ? "text-red-600" : "text-green-500"}>
                {nameMenu}
              </div>
              <Toggle label=""></Toggle>
              {/* <div className="text-right">
                <Toggle label="" />
              </div> */}
            </div>
          </div>
        </div>
        {/* 
        <div className="w-2/4 p-2 mx-auto ">
          <table className="min-w-full bg-white">
            <tbody>
              <tr>
                <td className="px-6 py-4 border-2  border-[#ED7E46]">
                  {nameMenu}
                  <Toggle label=""></Toggle>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </>
    );
  };

  return (
    <>
      <div className="j">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default BoilCurry;
