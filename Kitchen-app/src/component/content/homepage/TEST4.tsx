import React, { useState, useEffect } from "react";

import CardOrder from "../../card/CardOrder";
import { Order } from "../../models/order";
import { getOrder } from "../../API/order";
function TEST4() {
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
      <div className="bg-[#F9F7F7] rounded-xl">
        <p className="p-6 text-xl">รายการอาหารใหม่ -บิล</p>
        <div className="flex flex-wrap justify-center w-full gap-4 ">
          {orders?.map((data) => (
            <>
              <div>
                <CardOrder key={data.id} data={data} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default TEST4;
