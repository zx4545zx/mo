import React, { useState } from "react";
import { Order, ZoneId, PriceList } from "../models/order";
import { formatTime } from "../utils/formatTime";
import OrderDetail from "../API/OrderDetail";
import { LuClock3 } from "react-icons/Lu";

type OrderProps = {
  data: Order;
};

function CardTotal(props: OrderProps) {
  const { data } = props;

  return (
    <>
      <table className="w-full bg-white rounded-xl">
        <tbody>
          <tr>
            {data.orderDetail != null &&
              data.orderDetail.map((v) => (
                <div className="flex justify-between gap-2 p-3">
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="text-[#ED7E46]">x{v.qty}</td>
                  <td>{v.priceList != null && v.priceList.food.name}</td>
                  <td>
                    {v.optionDetail.map((i) => (
                      <div className="text-[#5F5F5F] ">
                        {i.optionDetail.name}
                      </div>
                    ))}
                  </td>
                  <td className="text-[#5F5F5F] ">
                    {v.priceList != null && v.priceList.name}
                  </td>

                  <td>
                    {data.table != null &&
                      data.table.map((v) => (
                        <>
                          <div className="text-xs text-[#0198DD] ">
                            {v.name}- {v.seat}
                          </div>
                        </>
                      ))}
                  </td>
                </div>
              ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CardTotal;
