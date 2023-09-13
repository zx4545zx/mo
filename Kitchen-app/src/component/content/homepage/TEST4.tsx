import React, { useState } from "react";

interface MockData {
  id: number;
  quantity: number;
  name_menu: string;
  detail: String;
  type: String;
  table: String;
  status: String;
}

const TEST4: React.FC = () => {
  const [items, setItems] = useState<MockData[]>([
    {
      id: 1,
      quantity: 3,
      name_menu: "ข้าวผัดกุ้ง",
      detail: "ไม่พริก",
      type: "พิเศษ",
      table: "A1-1",
      status: "waiting",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleItemSelection = (itemId: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        // Item is already selected, so deselect it
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        // Item is not selected, so select it
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const deleteSelectedItems = () => {
    // Remove selected items from the items list
    setItems((prevItems) =>
      prevItems.filter((item) => !selectedItems.includes(item.id))
    );
    // Clear the selectedItems array
    setSelectedItems([]);
  };

  return (
    <div>
      <h1>Multi-Select Delete</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleItemSelection(item.id)}
              />
              {item.name_menu}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={deleteSelectedItems}>Delete Selected Items</button>
    </div>
  );
};

export default TEST4;
