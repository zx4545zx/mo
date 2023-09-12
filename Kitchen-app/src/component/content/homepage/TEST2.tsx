import React, { useState } from 'react';

interface MockData {
  "id": number,
  quantity: number,
  name_menu: string,
  "detail": String,
  "type": String,
  "table": String,
  "status": String,
}

function TEST2() {
  const data = [
    { id: 1, quantity: 3, name_menu: 'ข้าวผัดกุ้ง', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
    { id: 2, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
    { id: 3, quantity: 3, name_menu: 'ข้าวผัดไก่', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
  ];

  const [selectedItems, setSelectedItems] = useState<MockData[]>([]);
  const [newSelectedItems, setNewSelectedItems] = useState<MockData[]>([]);
  const [newSelectedItemsStart, setNewSelectedItemsStart] = useState<MockData[]>([]);


  const handleCheckboxChange = (item: MockData) => {
    if (selectedItems.some((d) => d.id === item.id)) {
      const newData = selectedItems.filter((d) => d.id !== item.id);
      setSelectedItems(newData);
    } else {
      const newData = [...selectedItems, item];
      setSelectedItems(newData);
    }
  };

  const handleCheckboxChangeStart = (item: MockData) => {
    if (newSelectedItemsStart.some((d) => d.id === item.id)) {
      const newData = newSelectedItemsStart.filter((d) => d.id !== item.id);
      setNewSelectedItemsStart(newData);
    } else {
      const newData = [...newSelectedItemsStart, item];
      setNewSelectedItemsStart(newData);
    }
  };

  const handleStart = () => {
    setNewSelectedItems([...selectedItems]);

  };

  const handleClean =() => {
    setNewSelectedItems([]);
    setSelectedItems([]);
  }



  // // --------------------------------------
  return (
    <>
      <div className="container mx-auto mt-5">
        <table className="min-w-full">
          <thead>
            <tr>
              {/* <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Menu Name</th>
            <th className="px-4 py-2">Detail</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Zone</th> */}
            </tr>
          </thead>
          <tbody className='text-base '>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-2 ">
                  <input
                    type="checkbox"
                    checked={selectedItems.some((d) => d.id === item.id)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                </td>
                <div className='flex justify-between'>
                  <div className=" mr-4 py-2 text-[#ED7E46] "><td>x{item.quantity}</td></div>
                  <div className="py-2 "><td>{item.name_menu}</td></div>
                  <div className="px-4 py-2 text-[#868889] text-xs"><td >{item.detail}</td></div>
                  <div className='px-4 py-2 text-[#868889] text-xs'> <td >{item.type}</td></div>
                  <div className='px-4 py-2 text-[#0198DD] text-xs'> <td >{item.table}</td></div>

                </div>
              </tr>
            ))}
          </tbody>
        </table>
        <div>

        </div>

      </div>

      <div className="bg-[#F9F7F7] rounded-xl text-xl p-5 ">
        รายการที่กำลังทำ

        <div >
          <table className="min-w-full">
            <tbody className='text-base '>
              {newSelectedItems.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 ">
                  <input
                    type="checkbox"
                    // checked={()}
                    // onChange={()}
                  />



                  </td>
                  <div className='flex justify-between'>
                    <div className=" mr-4 py-2 text-[#ED7E46] "><td>x{item.quantity}</td></div>
                    <div className="py-2 "><td>{item.name_menu}</td></div>
                    <div className="px-4 py-2 text-[#868889] text-xs"><td >{item.detail}</td></div>
                    <div className='px-4 py-2 text-[#868889] text-xs'> <td >{item.type}</td></div>
                    <div className='px-4 py-2 text-[#0198DD] text-xs'> <td >{item.table}</td></div>

                  </div>
                </tr>

              ))}

            </tbody>
          </table>
        </div>


        <div className="flex flex-row items-center justify-end w-full gap-8 px-5 py-8">

          <button className="rounded-xl bg-[#AEAEAE] w-28 h-10 text-[#FFFFFF] text-sm" onClick={() => handleClean()}>
            ล้างทั้งหมด
          </button>
          <button
            className="rounded-xl bg-[#ED7E46] text-[#FFFFFF] w-28 h-10 text-sm" onClick={() => handleStart()}>
            เริ่มทำ
          </button>

        </div>
      </div>
    </>




  );
}

export default TEST2;
