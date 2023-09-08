import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Sample data for the dropdown
  // const options = [
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },

    
  // ];

  const options = [
    {
      billID: 1, table: 'A1-1', zone_name: 'โซนบาร์ห้องแอร์', billStatus: 'waiting', time: '20.00', Order_detail: [
        { menuId: 1, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'complete' },
      ]
    },
    {
      billID: 1, table: 'A1-1', zone_name: 'โซนบาร์ห้องแอร์', billStatus: 'waiting', time: '20.00', Order_detail: [
        { menuId: 1, quantity: 3, name_menu: 'ข้าวผัดหมู', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'complete' },
        { menuId: 2, quantity: 3, name_menu: 'ข้าวผัดกุ้ง', detail: 'ไม่ผัก', type: 'พิเศษ', menuStatus: 'complete' },
        { menuId: 3, quantity: 1, name_menu: 'ส้มตำ', detail: 'ไม่ปลาร้า', type: '', menuStatus: 'complete' },
        { menuId: 4, quantity: 2, name_menu: 'ข้าวไข่เจียว', detail: '', type: 'ธรรมดา', menuStatus: 'complete' },
        { menuId: 5, quantity: 1, name_menu: 'ข้าวหมูทอด', detail: '', type: 'พิเศษ', menuStatus: 'complete' },
        { menuId: 5, quantity: 1, name_menu: 'ข้าวหมูทอด', detail: '', type: 'พิเศษ', menuStatus: 'complete' },
      ]
    },
    {
      billID: 2, table: 'A1-2', zone_name: 'โซนบาร์ห้องแอร์', billStatus: 'waiting', time: '22.00', Order_detail: [
        { menuId: 1, quantity: 3, name_menu: 'ข้าวต้ม', detail: '', type: 'พิเศษ', menuStatus: 'complete' },
        { menuId: 2, quantity: 3, name_menu: 'ข้าวไข่เจียว', detail: '', type: 'ธรรมดา', menuStatus: 'complete' },
      ]
    },
    {
      billID: 3, table: 'A1-3', zone_name: 'โซนบาร์ห้องแอร์', billStatus: 'waiting', time: '22.00', Order_detail: [
        { menuId: 1, quantity: 3, name_menu: 'ข้าวต้ม', detail: '', type: 'พิเศษ', menuStatus: 'complete' },
        { menuId: 2, quantity: 3, name_menu: 'ข้าวไข่เจียว', detail: '', type: 'ธรรมดา', menuStatus: 'complete' },
      ]
    },
    {
      billID: 4, table: 'A1-4', zone_name: 'โซนบาร์ห้องแอร์', billStatus: 'waiting', time: '22.00', Order_detail: [
        { menuId: 1, quantity: 3, name_menu: 'ข้าวต้ม', detail: '', type: 'พิเศษ', menuStatus: 'complete' },
        { menuId: 2, quantity: 3, name_menu: 'ข้าวไข่เจียว', detail: '', type: 'ธรรมดา', menuStatus: 'complete' },
      ]
    }
  ]

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative w-48">
      <select
        className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
        value={selectedOption || ''}
        onChange={handleSelectChange}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.zone_name} value={option.billID}>
            {option.zone_name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;