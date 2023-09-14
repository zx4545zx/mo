import React, { useState } from "react";
import {
  Order,
  ZoneId,
  PriceList,
  OrderDetailStatus,
  OptionDetail,
} from "../models/order";
import { formatTime } from "../utils/formatTime";
import { LuClock3 } from "react-icons/Lu";

type OrderProps = {
  data: Order;
};

function CardOrder(props: OrderProps) {
  const { data } = props;

  return (
    <>
      <div className="h-auto p-6 bg-white rounded-xl w-96 ">
        <div className="flex justify-between p-3 card-body">
          {data.table != null &&
            data.table.map((v) => (
              <>
                <div>
                  {v.name}- {v.seat}, {v.zoneId.name}
                </div>
                <div className="flex gap-2 text-[#868889] text-sm ">
                  <LuClock3 />
                  <div>{formatTime(data.timestamp, "Asia/Bangkok")} น.</div>
                </div>
              </>
            ))}
        </div>
        <div>
          {data.orderDetail != null &&
            data.orderDetail.map((v) => (
              <>
                <div className="flex justify-between ">
                  <div>{v.priceList != null && v.priceList.food.name}</div>
                  <div>x {v.qty}</div>
                </div>

                <div className="text-sm text-[#D9D9D9] flex gap-3">
                  <div>
                    {v.optionDetail.map((i) => (
                      <div>{i.optionDetail.name}</div>
                    ))}
                  </div>
                  <div></div>
                  <div>{v.priceList != null && v.priceList.name}</div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default CardOrder;
