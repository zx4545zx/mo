import React, { useState } from "react";
import { Order, ZoneId, PriceList, OrderDetail } from "../models/order";
type OrderProps = {
  data: Order;
};

function CardTotal(props: OrderProps) {
  const { data } = props;

  const [selectedItems, setSelectedItems] = useState<OrderDetail[]>([]);
  //--------
  const handleCheckboxChange = (item: OrderDetail) => {
    if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      console.log("uncheck");

      const unCheck = selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
      setSelectedItems(unCheck);
    } else {
      const d = [...selectedItems, item];

      console.log(d);

      setSelectedItems(d);
    }
    console.log("selectItem", selectedItems);
  };
  //----------------------
  return (
    <>
      <div>
        <table className="w-full bg-white rounded-xl">
          <tbody>
            {data.orderDetail != null &&
              data.orderDetail.map((v) => (
                <tr key={v.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedItems.some((d) => d.id === v.id)}
                      onChange={() => handleCheckboxChange(v)}
                    />
                  </td>
                  <td className="text-[#ED7E46]">x{v.qty}</td>
                  <td>{v.priceList != null && v.priceList.food.name}</td>
                  <td>
                    {v.optionDetail.map((i) => (
                      <div
                        className="text-[#5F5F5F] "
                        key={i.optionDetail.name}
                      >
                        {i.optionDetail.name}
                      </div>
                    ))}
                  </td>
                  <td className="text-[#5F5F5F] ">
                    {v.priceList != null && v.priceList.name}
                  </td>
                  <td>
                    {data.table != null &&
                      data.table.map((tableItem) => (
                        <div
                          className="text-xs text-[#0198DD] "
                          key={tableItem.name}
                        >
                          {tableItem.name} - {tableItem.seat}
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CardTotal;
