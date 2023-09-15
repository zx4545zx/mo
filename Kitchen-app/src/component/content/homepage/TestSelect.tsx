import React, { useState, useEffect } from "react";
import axios from "axios";
import { Order } from "../../models/order";

const DropdownSelect: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://restaurantapi.bubblethailand.com/order")
      .then((response) => {
        const data = response.data;
        setOrders(data);
      });
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOrder(Number(selectedValue));
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="orderSelect" className="text-gray-700">
        Select an order:
      </label>
      <select
        id="orderSelect"
        className="p-2 border rounded-md"
        value={selectedOrder || ""}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Choose an order
        </option>
        {orders.map((order) => (
          <option key={order.id} value={order.id}>
            {order.orderNumber} - {order.timestamp}
          </option>
        ))}
      </select>
      {selectedOrder !== null && (
        <div>
          <h2>Selected Order</h2>
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
