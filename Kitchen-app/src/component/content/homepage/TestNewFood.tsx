import React from 'react'
import { CiClock2 } from "react-icons/Ci";
import { BiSolidCheckbox } from "react-icons/Bi";
function TestNewFood() {

  const data = [
    {
      ZoneDetail: 
      [{zoneId:1,zoneName:'บาร์ห้องแอร์'}],
      BillDetail: [
        {billId:1,billName:"A1-1",time:'20.00'},
      ],
      MenuDetail:[
        {menuId:1,menuName:"ข้าวผัดหมู",quantity:3,detail:'-',type:'-',status:'todo'}
      ]
    },

  ]


  const Card = ({ ZoneDetail,BillDetail,MenuDetail }) => {
    return (
      <>
        <div className='p-3'>
          <div className='card-content bg-[#FFFFFF] max-w-sm p-6 text-black-600 border rounded-lg shadow w-80 h-auto '>

            {/* START CARD-HEADER */}

            <div className='flex justify-between'>
              {/* <div>{table}, {zone_name}</div>
              <div className='flex text-xs'><CiClock2 />{time} น.</div> */}
            </div>

            {/* END CARD-HEADER */}

            {/*START CARD-BODY */}
            <div>
              <div className="order-details">
                {ZoneDetail.map((item, index) => (
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

      <div className='grid grid-cols-2 lg:grid-cols-4'>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>


    </>

  )
}

export default TestNewFood