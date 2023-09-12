// ToggleSwitch.tsx
import React, { useState } from "react";

interface ToggleSwitchProps {
  label: string;
}

const Toggle: React.FC<ToggleSwitchProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    // <div className="flex items-end space-x-2 bg-green-600">
    //   <span className="text-gray-700">{label}</span>
    //   <label className="relative inline-flex items-end cursor-pointer">
    //     <input
    //       type="checkbox"
    //       className="sr-only"
    //       checked={isChecked}
    //       onChange={toggleSwitch}
    //     />
    //     <span className="relative w-12 h-6 transition-colors duration-300 ease-in-out bg-gray-300 rounded-full cursor-pointer">
    //       <span
    //         className={`absolute left-0 top-0 w-6 h-6 transition-transform duration-300 ease-in-out transform ${
    //           isChecked ? "translate-x-6" : ""
    //         } bg-white rounded-full shadow-md`}
    //       ></span>
    //     </span>
    //   </label>
    // </div>
    <div className="flex justify-end">
      <input
        type="checkbox"
        className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#ED7E46] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent checked:hover:bg-[#ED7E46] checked:focus:bg-[#ED7E46] focus:border-[#ED7E46] focus:ring-[#ED7E46] ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-green-600 dark:focus:ring-offset-gray-800

before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-[#FFFFFF] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-[#FFFFFF]"
      ></input>
      <label className="ml-3 text-sm text-gray-500 dark:text-gray-400"></label>
    </div>
  );
};

export default Toggle;
