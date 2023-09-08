import React, { useState } from 'react';

function TEST2() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const data = [
    { id: 1, quantity: 3, name_menu: 'ข้าวผัดกุ้ง', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
    { id: 2, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
    { id: 3, quantity: 3, name_menu: 'ข้าวผัดไก่', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
  ];
  const [listdData, setListData] = useState<number[]>([]);
  const handleCheckboxChange = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
    const  setListData = selectedData
  };

  const selectedData = data.filter((item) => selectedItems.includes(item.id)
  )
  console.log('select',selectedData)

 




  // const [dataTodo, setDataTodo] = useState({
  //   dataType: [] as {
  //     id: number,
  //     quantity: number,
  //     name_menu: string,
  //     detail: string,
  //     type: string,
  //     table: string,
  //     status: string
  //   }[]
  // })


  return (
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
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
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
      <h2>Selected Items:</h2>
      <ul>
        {selectedData.map((item) => (
          <li key={item.id}>{item.name_menu}</li>
        ))}
      </ul>

      <div>




        <div>
        </div>

      </div>


    </div>

  );
}

export default TEST2;
