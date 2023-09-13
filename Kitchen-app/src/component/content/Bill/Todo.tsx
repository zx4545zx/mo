import React from "react";
import { CiClock2 } from "react-icons/Ci";
import { BiSolidCheckbox } from "react-icons/Bi";
import OrderDetail from "../../API/OrderDetail";

function Todo() {
  const data = [
    {
      billID: 1,
      table: "A1-1",
      zone_name: "โซนบาร์ห้องแอร์",
      billStatus: "waiting",
      time: "20.00",
      Order_detail: [
        {
          menuId: 1,
          quantity: 3,
          name_menu: "ข้าวผัดหมู",
          detail: "ไม่ผัก",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 2,
          quantity: 3,
          name_menu: "ข้าวผัดกุ้ง",
          detail: "ไม่ผัก",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 3,
          quantity: 1,
          name_menu: "ส้มตำ",
          detail: "ไม่ปลาร้า",
          type: "",
          menuStatus: "todo",
        },
        {
          menuId: 4,
          quantity: 2,
          name_menu: "ข้าวไข่เจียว",
          detail: "",
          type: "ธรรมดา",
          menuStatus: "todo",
        },
        {
          menuId: 5,
          quantity: 1,
          name_menu: "ข้าวหมูทอด",
          detail: "",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 5,
          quantity: 1,
          name_menu: "ข้าวหมูทอด",
          detail: "",
          type: "พิเศษ",
          menuStatus: "todo",
        },
      ],
    },
    {
      billID: 1,
      table: "A1-1",
      zone_name: "โซนบาร์ห้องแอร์",
      billStatus: "waiting",
      time: "20.00",
      Order_detail: [
        {
          menuId: 1,
          quantity: 3,
          name_menu: "ข้าวผัดหมู",
          detail: "ไม่ผัก",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 2,
          quantity: 3,
          name_menu: "ข้าวผัดกุ้ง",
          detail: "ไม่ผัก",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 3,
          quantity: 1,
          name_menu: "ส้มตำ",
          detail: "ไม่ปลาร้า",
          type: "",
          menuStatus: "todo",
        },
        {
          menuId: 4,
          quantity: 2,
          name_menu: "ข้าวไข่เจียว",
          detail: "",
          type: "ธรรมดา",
          menuStatus: "todo",
        },
        {
          menuId: 5,
          quantity: 1,
          name_menu: "ข้าวหมูทอด",
          detail: "",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 5,
          quantity: 1,
          name_menu: "ข้าวหมูทอด",
          detail: "",
          type: "พิเศษ",
          menuStatus: "todo",
        },
      ],
    },
    {
      billID: 2,
      table: "A1-2",
      zone_name: "โซนบาร์ห้องแอร์",
      billStatus: "waiting",
      time: "22.00",
      Order_detail: [
        {
          menuId: 1,
          quantity: 3,
          name_menu: "ข้าวต้ม",
          detail: "",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 2,
          quantity: 3,
          name_menu: "ข้าวไข่เจียว",
          detail: "",
          type: "ธรรมดา",
          menuStatus: "todo",
        },
      ],
    },
    {
      billID: 3,
      table: "A1-3",
      zone_name: "โซนบาร์ห้องแอร์",
      billStatus: "waiting",
      time: "22.00",
      Order_detail: [
        {
          menuId: 1,
          quantity: 3,
          name_menu: "ข้าวต้ม",
          detail: "",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 2,
          quantity: 3,
          name_menu: "ข้าวไข่เจียว",
          detail: "",
          type: "ธรรมดา",
          menuStatus: "todo",
        },
      ],
    },
    {
      billID: 4,
      table: "A1-4",
      zone_name: "โซนบาร์ห้องแอร์",
      billStatus: "waiting",
      time: "22.00",
      Order_detail: [
        {
          menuId: 1,
          quantity: 3,
          name_menu: "ข้าวต้ม",
          detail: "",
          type: "พิเศษ",
          menuStatus: "todo",
        },
        {
          menuId: 2,
          quantity: 3,
          name_menu: "ข้าวไข่เจียว",
          detail: "",
          type: "ธรรมดา",
          menuStatus: "todo",
        },
      ],
    },
  ];

  const Card = ({
    billID,
    table,
    zone_name,
    billStatus,
    time,
    Order_detail,
  }) => {
    return (
      <>
        <div className="p-3">
          <div className="card-content bg-[#FFFFFF] max-w-sm p-6 text-black-600 border rounded-lg shadow w-80 h-auto ">
            {/* START CARD-HEADER */}

            <div className="flex justify-between">
              <div>
                {table}, {zone_name}
              </div>
              <div className="flex text-xs">
                <CiClock2 />
                {time} น.
              </div>
            </div>

            {/* END CARD-HEADER */}

            {/*START CARD-BODY */}
            <div>
              <div className="order-details">
                {Order_detail.map((item, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-2">
                      <div className="flex gap-3">
                        {" "}
                        <BiSolidCheckbox className="text-[#ED7E46]" />
                        {item.name_menu}
                      </div>
                      <div className="ml-24">x{item.quantity}</div>
                      <div className="flex px-5 text-[#5F5F5F] text-sm">
                        {item.detail} {item.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*END CARD-BODY */}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      {/* <OrderDetail /> */}
    </>
  );
}

export default Todo;
