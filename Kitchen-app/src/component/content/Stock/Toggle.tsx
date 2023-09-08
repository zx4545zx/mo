// ToggleSwitch.tsx
import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
}

const Toggle: React.FC<ToggleSwitchProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-end space-x-2 bg-green-600">
      <span className="text-gray-700">{label}</span>
      <label className="relative inline-flex items-end cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={toggleSwitch}
        />
        <span className="relative w-12 h-6 transition-colors duration-300 ease-in-out bg-gray-300 rounded-full cursor-pointer">
          <span
            className={`absolute left-0 top-0 w-6 h-6 transition-transform duration-300 ease-in-out transform ${
              isChecked ? 'translate-x-6' : ''
            } bg-white rounded-full shadow-md`}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default Toggle;
