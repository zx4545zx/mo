import React, { useState, useEffect } from "react";

import CardTotal from "../../card/CardTotal";
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
      <div className="bg-[#F9F7F7] rounded-xl h-full">
        <p className="p-6 text-xl">สรุปรายการอาหารทั้งหมด</p>
        <div className="justify-start w-full gap-4 p-6 ">
          {orders?.map((data) => (
            <>
              <div>
                <CardTotal key={data.id} data={data} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Total;
