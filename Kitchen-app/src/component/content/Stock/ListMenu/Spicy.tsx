import React from 'react'
import Switch from './Switch'
function Spicy() {
  return (
    <>
      <div className='h-12 p-3 bg-[#FFFFFF] rounded-full w-96'>
        <div className='grid grid-cols-2'>
          <div>ต้มยำกุ้ง</div>
          <div className='grid justify-end'>
            <Switch/>
          </div>
        </div>

      </div>
    </>

  )
}

export default Spicy