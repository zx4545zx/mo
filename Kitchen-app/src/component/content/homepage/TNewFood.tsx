
import React, { useState } from 'react';
import { CiClock2 } from "react-icons/Ci";
import { BiSolidCheckbox } from "react-icons/Bi";
interface Zone {
  zoneId: number;
  zoneName: string;
  Bills: [
    {
      billsId: number;
      tableName: string;
      time: string;
      Menus:
        {
          menusId: number;
          menusName: string;
          quantity: number;
          details: string
          type: string;
          status: string;
        }[]

    }
  ]

}


const data: Zone[] = [
  {
    zoneId: 1,
    zoneName: "โต๊ะริมน้ำ",
    Bills: [
      {
        billsId: 1,
        tableName: "A1-1",
        time: "20.00",
        Menus: [
          {
            menusId: 1,
            menusName: "ข้าวผัดไก่",
            quantity: 2,
            details: "อกไก่",
            type: "พิเศษ",
            status: "todo",
          }
        ]
      },

    ]
  },
  {
    zoneId: 2,
    zoneName: "บาร์ห้องแอร์",
    Bills: [
      {
        billsId: 1,
        tableName: "A1-2",
        time: "20.00",
        Menus: [{
          menusId: 2,
          menusName: "ข้าวผัดหมู",
          quantity: 2,
          details: "อกไก่",
          type: "พิเศษ",
          status: "todo",
        },{
          menusId: 3,
          menusName: "ข้าวผัดหมู+2",
          quantity: 4,
          details: "อกไก่+2",
          type: "พิเศษ",
          status: "todo",
        },
      ]
      },

    ]
  },
  {
    zoneId: 4,
    zoneName: "โซนเด็ก",
    Bills: [
      {
        billsId: 1,
        tableName: "A1-3",
        time: "20.00",
        Menus: [{
          menusId: 5,
          menusName: "ข้าวต้มไก่",
          quantity: 2,
          details: "อกไก่",
          type: "พิเศษ",
          status: "todo",
        },{
          menusId: 6,
          menusName: "ข้าวต้มเห็ด",
          quantity: 1,
          details: "",
          type: "พิเศษ",
          status: "todo",
        },
      ]
      },

    ]
  }

]


const DropdownSelect: React.FC<{ data: Zone[] }> = ({ data }) => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedZoneID = parseInt(e.target.value);
    const selectedZoneData = data.find((zone) => zone.zoneId === selectedZoneID);
    setSelectedZone(selectedZoneData || null);
  };


  return (
    <>

      <div className='grid w-32 '>
   
        <select
          className="block w-full px-4 py-2 leading-tight bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-400 focus:outline-none focus:shadow-outline"
          id="billDropdown"
          value={selectedZone?.zoneId || ''}
          onChange={handleSelectChange}
          
        >
          {/* <option value="">โซน</option> */}
          
          {data.map((zone) => (
            <option key={zone.zoneName} value={zone.zoneId}>
              {zone.zoneName}
            </option>
          ))}
        </select>
        {selectedZone && (
          <div className="mt-4">
            <div className='p-3'>
              <div className='card-content bg-[#FFFFFF] max-w-sm p-6 text-black-600 border rounded-lg shadow w-80 h-auto '>
                {selectedZone.Bills.map((item, index) => (
                  <div key={index} >
                    <div className='grid grid-cols-2'>
                      <div>{item.tableName},{selectedZone.zoneName}</div>
                      <div className='flex justify-end text-sm text-[#868889]'><CiClock2/> น.</div>
                    </div>
                  </div>
                ))

                }

                {selectedZone.Bills[0].Menus.map((item, index) => (
                  <div key={index} >
                    <div className='grid grid-cols-2'>
                      <div className='flex gap-3'> <BiSolidCheckbox className="text-[#0AEA49]" />{item.menusName}
                      </div>

                      <div className='ml-24'>x{item.quantity}</div>
                      <div className='grid grid-cols-2 gap-5 px-8'>
                   <div className='text-sm text-[#5F5F5F]'> {item.details}</div>
                   <div className='text-sm text-[#5F5F5F]'> {item.type}</div>

                   </div>
                    </div>
                  </div>
                ))}



              </div>


            </div>


            {/* <pre>{JSON.stringify(selectedZone, null, 2)}</pre> */}
          </div>
        )}





      </div>


    </>



  );
};







const TNewFood: React.FC = () => {

  return (
    <>

      <div className='h-full rounded-xl bg-[#F9F7F7]'>
        <div className='grid grid-cols-2 p-5'>
        
   <div className='px-3 py-5 text-xl'>รายการอาหารใหม่ -บิล
          
          
          

          </div>
          <div className="container flex p-4 mx-auto ">
           
            
            <DropdownSelect data={data} />
          </div>
        </div>

      </div>
    </>

  );
};

export default TNewFood;