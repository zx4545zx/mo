// import React from 'react'
// import { useState } from "react";
// import { GoDotFill } from "react-icons/Go";
// import { CiClock2 } from "react-icons/Ci";
// import { BiSolidCheckbox } from "react-icons/Bi";
// import { LuTable } from "react-icons/Lu";

// type Props = {}

// function NewFood({ }: Props) {

//   const data = [
//     {
//       billID: 1, table: 'A1-1', zone_name: 'โซนบาร์ห้องแอร์', billStatus: 'waiting', time: '20.00', Order_detail: [
//         { menuId: 1, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'waiting' },
//       ]
//     },
//     {
//       billID: 2, table: 'A1-2', zone_name: 'โซนโต๊ะริมน้ำ', billStatus: 'waiting', time: '20.00', Order_detail: [
//         { menuId: 1, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'waiting' },
//       ]
//     },
//   ]

//   const handleSelectChange = (e) => {
//     setSelectedData(e.target.value);
//   };

//   const Card = ({ billID, table, zone_name, billStatus, time, Order_detail }) => {
//     return (
//       <>
//         <div className='p-3'>
//           <div className='card-content bg-[#FFFFFF] max-w-sm p-6 text-black-600 border rounded-lg shadow w-80 h-auto '>

//             {/* START CARD-HEADER */}

//             <div className='flex justify-between'>
//               <div>{table}, {zone_name}</div>
//               <div className='flex text-xs'><CiClock2 />{time} น.</div>
//             </div>

//             {/* END CARD-HEADER */}

//             {/*START CARD-BODY */}
//             <div>
//               <div className="order-details">
//                 {Order_detail.map((item, index) => (
//                   <div key={index} >
//                     <div className='grid grid-cols-2'>
//                       <div className='flex gap-3'> <BiSolidCheckbox className="text-[#EC1C24]" />{item.name_menu}
//                       </div>
//                       <div className='ml-24'>x{item.quantity}</div>
//                       <div className='flex px-5 text-[#5F5F5F] text-sm'>{item.detail} {item.type}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/*END CARD-BODY */}

//           </div>


//         </div>
//       </>



//     );
//   };
//   return (
//     <div className=' h-full rounded-xl bg-[#F9F7F7]'>

//       <div className='grid grid-cols-3 p-5'>
//         <div className='px-3 py-5 text-xl'>รายการอาหารใหม่-บิล
//         </div>
//         <div className="mt-4">
//       <select
//         className="block w-full px-4 py-2 leading-tight bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-400 focus:outline-none focus:shadow-outline"
//         id="sampleDropdown"
//         value={selectedData}
//         onChange={handleSelectChange}
//       >
//         <option value="">โซน</option>
//         {data.map((option) => (
//           <option key={option.zone_name} value={option.zone_name}>
//             {option.zone_name}

//           </option>
//         ))}
//       </select>
//       {selectedData && (
//         <p className="mt-2 text-gray-600">

//           You selected: {selectedData}</p>
//       )}
//     </div>
//       </div>


//       <div className='grid grid-cols-2 lg:grid-cols-2'>
//         {data.map((item, index) => (
//           <Card key={index} {...item} />
//         ))}
//       </div>





//     </div>
//   )
// }

// export default NewFood

import React, { useState } from 'react';
import { CiClock2 } from "react-icons/Ci";
import { BiSolidCheckbox } from "react-icons/Bi";
interface Bill {
  billID: number;
  table: string;
  zone_name: string;
  billStatus: string;
  time: string;
  Order_detail: {
    menuId: number;
    quantity: number;
    name_menu: string;
    detail: string;
    type: string;
    menuStatus: string;
  }[];
}

const DropdownSelect: React.FC<{ data: Bill[] }> = ({ data }) => {
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBillID = parseInt(e.target.value);
    const selectedBillData = data.find((bill) => bill.billID === selectedBillID);
    setSelectedBill(selectedBillData || null);
  };

  const Card = ({ billID, table, zone_name, billStatus, time, Order_detail }) => {
    return (
      <>
        <div className='p-3'>
          <div className='card-content bg-[#FFFFFF] max-w-sm p-6 text-black-600 border rounded-lg shadow w-80 h-auto '>

            {/* START CARD-HEADER */}

            <div className='flex justify-between'>
              <div>{table}, {zone_name}</div>
              <div className='flex text-xs'><CiClock2 />{time} น.</div>
            </div>

            {/* END CARD-HEADER */}

            {/*START CARD-BODY */}
            <div>
              <div className="order-details">
                {Order_detail.map((item, index) => (
                  <div key={index} >
                    <div className='grid grid-cols-2'>
                      <div className='flex gap-3'> <BiSolidCheckbox className="text-[#0AEA49]" />{item.name_menu}
                      </div>
                      <div className='ml-24'>x{item.quantity}</div>
                      <div className='flex px-5 text-[#5F5F5F] text-sm'>{item.detail} {item.type}</div>
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
      <div className='w-32'>
        <select
          className="block w-full px-4 py-2 leading-tight bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-400 focus:outline-none focus:shadow-outline"
          id="billDropdown"
          value={selectedBill?.billID || ''}
          onChange={handleSelectChange}
        >
          {/* <option value="">โซน</option> */}
          {data.map((bill) => (
            <option key={bill.zone_name} value={bill.billID}>
              {bill.zone_name}
            </option>
          ))}
        </select>
        {selectedBill && (
          <div className="mt-4">
              <div className='bg-green-600'>{selectedBill.zone_name}</div>

              <div className='p-3'>
                <div className='card-content bg-[#FFFFFF] max-w-sm p-6 text-black-600 border rounded-lg shadow w-80 h-auto '>

                  {/* START CARD-HEADER */}

                  <div className='flex justify-between'>
                    <div>{selectedBill.table}, {selectedBill.zone_name}</div>
                    <div className='flex text-xs'><CiClock2 />{selectedBill.time} น.</div>
                  </div>

                  {/* END CARD-HEADER */}

                  {/*START CARD-BODY */}
                  <div>
                    <div className="order-details">
                      {selectedBill.Order_detail.map((item, index) => (
                        <div key={index} >
                          <div className='grid grid-cols-2'>
                            <div className='flex gap-3'> <BiSolidCheckbox className="text-[#0AEA49]" />{item.name_menu}
                            </div>
                            <div className='ml-24'>x{item.quantity}</div>
                            <div className='flex px-5 text-[#5F5F5F] text-sm'>{item.detail} {item.type}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/*END CARD-BODY */}

                </div>


              </div>


            <pre>{JSON.stringify(selectedBill, null, 2)}</pre>
          </div>
        )}



        {/* <div className='w-32'>
        <select
          className="block w-full px-4 py-2 leading-tight bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-400 focus:outline-none focus:shadow-outline"
          id="billDropdown"
          value={selectedBill?.billID || ''}
          onChange={handleSelectChange}
        >
          <option value="">โซน</option>
          {data.map((bill) => (
            <option key={bill.billID} value={bill.billID}>
              {bill.zone_name}
            </option>
          ))}
        </select>
        {selectedBill && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Selected Bill:



            </h2>

            <pre>{JSON.stringify(selectedBill, null, 2)}</pre>
          </div>
        )}
      </div> */}



      </div>


    </>



  );
};

const NewFood: React.FC = () => {
  const data: Bill[] = [
  
    {
      billID: 1,
      table: 'A1-1',
      zone_name: 'บาร์ห้องแอร์',
      billStatus: 'waiting',
      time: '20.00',
      Order_detail: [
        { menuId: 1, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'waiting' },
        { menuId: 1, quantity: 5, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'waiting' },
      ],
    }, 
    {
      billID: 2,
      table: 'A1-1',
      zone_name: 'บาร์ห้องแอร์',
      billStatus: 'waiting',
      time: '20.00',
      Order_detail: [
        { menuId: 1, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'waiting' },
      ],
    },
    {
      billID: 3,
      table: 'A1-2',
      zone_name: 'โต๊ะริมน้ำ',
      billStatus: 'waiting',
      time: '20.00',
      Order_detail: [
        { menuId: 1, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'waiting' },
      ],
    },
  ];

  return (
    <>

      <div className='h-full rounded-xl bg-[#F9F7F7]'>
        <div className='grid grid-cols-2 p-5'>
          <div className='px-3 py-5 text-xl'>รายการอาหารใหม่ -บิล
          </div>

          <div className="container p-4 mx-auto">
            <DropdownSelect data={data} />

          </div>
        </div>

      </div>
    </>

  );
};

export default NewFood;