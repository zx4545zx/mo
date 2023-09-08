import React from 'react'
import { GoDotFill } from "react-icons/Go";
import { BiSolidCheckbox } from "react-icons/Bi";
type Props = {}

export default function TodoFood({}: Props) {
  return (
    
            
    <div className="bg-[#F9F7F7] rounded-xl text-xl p-5 ">รายการที่กำลังทำ<div>
    <div className='bg-[#FFFFFF] rounded-xl hy-5'>
      <table className="table-auto ">
  <thead>
    {/* <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
      <th>Year2</th>
    </tr> */}
  </thead>
  <tbody>
    <tr className="h-10 text-sm w-28 ">
      <td className='w-1 px-2 '>
        <BiSolidCheckbox className="text-[#0AEA49] text-sm" /></td>
        <td className='w-1 px-5 text-[#ED7E46]'><p>x1</p>
        </td>
      <td className='w-1/3 px-5 text-xl '> ทอดมันกุ้ง</td>
      <td className='w-11/12 text-sm text-right text-[#0198DD] '>A1-1</td>
    </tr>

    <tr className="h-10 text-sm w-28 ">
      <td className='w-1 px-2 '>
        <BiSolidCheckbox className="text-[#0AEA49]" /></td>
        <td className='w-1 px-5 text-[#ED7E46]'><p>x1</p>
        </td>
      <td className='w-1/3 px-5 text-xl '> ทอดมันกุ้ง</td>
      <td className='w-11/12 text-sm text-right text-[#0198DD] '>A1-1</td>
    </tr>

    

  </tbody>
</table>
</div>
      

      {/* <div className="flex flex-row items-center justify-end w-full gap-8 px-5 py-8">
                        
      <button className="rounded-xl bg-[#AEAEAE] w-28 h-10 text-[#FFFFFF] text-sm">ล้างทั้งหมด</button>
    <button className="rounded-xl bg-[#ED7E46] text-[#FFFFFF] w-28 h-10 text-sm">เริ่มทำ</button>
                    </div> */}


   
    
    </div>
    
    </div>
    
  )
}