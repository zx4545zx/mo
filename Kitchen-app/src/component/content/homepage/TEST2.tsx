import React, { useState } from "react";
import { Order, ZoneId, PriceList } from "../../models/order";
import { getOrder } from "../../API/order";
interface MockData {
  id: number;
  quantity: number;
  name_menu: string;
  detail: String;
  type: String;
  table: String;
  status: String;
}

function TEST2() {
  const [data, setData] = useState([
    {
      id: 1,
      quantity: 3,
      name_menu: "ข้าวผัดกุ้ง",
      detail: "ไม่พริก",
      type: "พิเศษ",
      table: "A1-1",
      status: "waiting",
    },
    {
      id: 2,
      quantity: 3,
      name_menu: "ข้าวผัดกุ้ง2",
      detail: "ไม่พริก",
      type: "พิเศษ",
      table: "A1-1",
      status: "waiting",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<MockData[]>([]);
  const [newSelectedItems, setNewSelectedItems] = useState<MockData[]>([]);

  const [selectedItemsFinish, setSelectedItemsFinish] = useState<MockData[]>(
    []
  );
  const [newSelectedItemsFinish, setNewSelectedItemsFinish] = useState<
    MockData[]
  >([]);

  const handleCheckboxChange = (item: MockData) => {
    if (selectedItems.some((d) => d.id === item.id)) {
      const newData = selectedItems.filter((d) => d.id !== item.id);
      setSelectedItems(newData);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCheckboxChangeFinish = (item: MockData) => {
    if (selectedItemsFinish.some((d) => d.id === item.id)) {
      const newDataFinish = selectedItemsFinish.filter((d) => d.id !== item.id);
      setSelectedItemsFinish(newDataFinish);
    } else {
      const newDataFinish = [...selectedItemsFinish, item];
      setSelectedItemsFinish(newDataFinish);
    }
  };

  const handleStart = () => {
    const updatedData = data.filter(
      (item) => !selectedItems.some((selected) => selected.id === item.id)
    );
    setData(updatedData);

    setNewSelectedItems([...selectedItems]);
    // setSelectedItems([]);
    console.log("selectedItems", selectedItems);
  };

  const handleFinish = () => {
    const updatedData = newSelectedItems.filter(
      (item) => !selectedItemsFinish.some((selected) => selected.id === item.id)
    );
    setNewSelectedItems(updatedData);
    setNewSelectedItemsFinish([...selectedItemsFinish]);
    console.log("selectedItemsFinish", selectedItemsFinish);
  };

  const handleClean = () => {
    setNewSelectedItems([]);
    setNewSelectedItemsFinish([]);
  };

  return (
    <>
      <div className="h-full rounded-xl bg-[#F9F7F7]">
        <div className="px-3 py-5 text-xl">
          <div className="grid gap-6 p-4 mx-auto">
            <div className="p-5 text-xl rounded-xl ">
              สรุปรายการอาหารทั้งหมด
              <table className="min-w-full bg-white rounded-full ">
                <tbody className="text-base ">
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 ">
                        <input
                          type="checkbox"
                          checked={selectedItems.some((d) => d.id === item.id)}
                          onChange={() => handleCheckboxChange(item)}
                        />
                      </td>

                      <td className="text-[#ED7E46]">x{item.quantity}</td>
                      <td>{item.name_menu}</td>
                      <td className=" text-[#868889] text-xs">{item.detail}</td>
                      <td className=" text-[#868889] text-xs">{item.type}</td>
                      <td className="px-4 py-2 text-[#0198DD] text-xs">
                        {item.table}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 text-xl rounded-xl ">
              รายการที่กำลังทำ
              <div>
                <table className="min-w-full bg-white rounded-full">
                  <tbody className="text-base ">
                    {newSelectedItems.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-2 ">
                          <input
                            type="checkbox"
                            checked={selectedItemsFinish.some(
                              (d) => d.id === item.id
                            )}
                            onChange={() => handleCheckboxChangeFinish(item)}
                          />
                        </td>
                        <td className="text-[#ED7E46]">x{item.quantity}</td>
                        <td>{item.name_menu}</td>
                        <td className=" text-[#868889] text-xs">
                          {item.detail}
                        </td>
                        <td className=" text-[#868889] text-xs">{item.type}</td>
                        <td className="px-4 py-2 text-[#0198DD] text-xs">
                          {item.table}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-row items-center justify-end w-full gap-8 px-5 py-8">
                <button
                  className="rounded-xl bg-[#AEAEAE] w-28 h-10 text-[#FFFFFF] text-sm"
                  onClick={() => handleClean()}
                >
                  ล้างทั้งหมด
                </button>
                <button
                  className="rounded-xl bg-[#ED7E46] text-[#FFFFFF] w-28 h-10 text-sm"
                  onClick={() => handleStart()}
                >
                  เริ่มทำ
                </button>
                <button
                  className="rounded-xl bg-[#ED7E46] text-[#FFFFFF] w-28 h-10 text-sm"
                  onClick={() => handleFinish()}
                >
                  เสร็จสิ้น
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TEST2;
