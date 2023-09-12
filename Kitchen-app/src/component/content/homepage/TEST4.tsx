import React, { useState } from 'react';

const TEST4: React.FC = () => {


  const initialData  = [
    { id: 1, quantity: 3, name_menu: 'ข้าวผัดกุ้ง', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
    { id: 2, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
    { id: 3, quantity: 3, name_menu: 'ข้าวผัดไก่', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-1', status: 'waiting' },
  ];

  const [data, setData] = useState(initialData);


  const saveToNewArray = () => {
   
    const newData = [...data];

    
    newData.push({ id: 3, quantity: 2, name_menu: 'ข้าวผัดไก่', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-2', status: 'waiting' },{ id: 3, quantity: 2, name_menu: 'ข้าวผัดไก่6', detail: 'ไม่พริก', type: 'พิเศษ', table: 'A1-2', status: 'waiting' });

    
    setData(newData);
  };
  console.log("data",data);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Quantity</th>
            <th>Name Menu</th>
            <th>Detail</th>
            <th>Type</th>
            <th>Table</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.quantity}</td>
              <td>{item.name_menu}</td>
              <td>{item.detail}</td>
              <td>{item.type}</td>
              <td>{item.table}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={saveToNewArray}>
        Save to New Array
      </button>
    </div>
  );
};

export default TEST4;