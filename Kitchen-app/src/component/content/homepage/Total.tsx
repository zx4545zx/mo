import React, { useState, useEffect } from "react";

import CardTotal from "../../card/CardTotal";
import CardTestTotal from "../../card/CardTestTotal";
import { Order } from "../../models/order";
import { getOrder } from "../../API/order";
function Total() {
  const [orders, setOrders] = useState<Order[] | undefined>([]);

  useEffect(() => {
    async function getAll() {
      try {
        const order = await getOrder();
        console.log(order);

        setOrders(order);
      } catch (error) {
        console.error(error);
      }
    }

    getAll();
  }, []);

  return (
    <>
      <div className="grid gap-6">
        <div className="">
          <div className="justify-start bg-[#F9F7F7] rounded-xl h-96 ">
            <p className="p-6 text-xl">สรุปรายการอาหารทั้งหมด</p>
            {orders?.map((data) => (
              <>
                <div className="px-3">
                  <CardTotal key={data.id} data={data} />
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="bg-[#F9F7F7] rounded-xl h-96 ">
          <p className="p-6 text-xl">รายการที่กำลังทำ</p>
          <div className="flex justify-end gap-6 p-6 ">
            <div>
              <button
                className="rounded-xl bg-[#AEAEAE] w-28 h-10 text-[#FFFFFF] text-sm"
                // onClick={() => handleClean()}
              >
                ล้างทั้งหมด
              </button>
            </div>
            <div>
              <button
                className="rounded-xl bg-[#ED7E46] text-[#FFFFFF] w-28 h-10 text-sm"
                // onClick={() => handleStart()}
              >
                เริ่มทำ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Total;
