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
  const [selectedZone, setSelectedZone] = useState("");

  return (
    <>
      <div className="bg-[#F9F7F7] rounded-xl h-screen">
        <p className="flex gap-20 p-6 text-xl">
          <p>รายการอาหารใหม่ -บิล</p>
          <select
            className="w-48 p-1 rounded-xl"
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
          >
            <option value="">ทั้งหมด</option>
            {orders && orders.length > 0 ? (
              Array.from(
                new Set(
                  orders
                    .map((data) => data.table.map((v) => v.zoneId.name))
                    .flat()
                )
              ).map((zoneName) => (
                <option key={zoneName} value={zoneName}>
                  {zoneName}
                </option>
              ))
            ) : (
              <option disabled>ไม่พบข้อมูล</option>
            )}
          </select>
        </p>

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

export default TEST4;
