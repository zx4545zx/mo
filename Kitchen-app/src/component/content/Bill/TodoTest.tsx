import React, { useState, useEffect } from "react";
import CardOrder from "../../card/CardOrder";
import { Order } from "../../models/order";
import { getOrder } from "../../API/order";
function TodoTest() {
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
  const [selectedZone, setSelectedZone] = useState("");

  return (
    <>
      <div className="bg-[#F9F7F7] rounded-xl ">
        <div className="flex flex-wrap justify-center w-full gap-4 ">
          {orders ? (
            orders
              .filter(
                (data) =>
                  selectedZone === "" ||
                  (data.table &&
                    data.table.some((v) => v.zoneId.name === selectedZone))
              )
              .map((data) => (
                <div key={data?.id}>{data && <CardOrder data={data} />}</div>
              ))
          ) : (
            <div>ไม่พบข้อมูล</div>
          )}
        </div>
      </div>
    </>
  );
}

export default TodoTest;
