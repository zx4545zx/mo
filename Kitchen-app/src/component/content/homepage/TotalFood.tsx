import React from 'react'

type Props = {}
import RowSelections from './RowSelections'

export default function TotalFood({}: Props) {
  return (
    <> 
    <div className="bg-[#F9F7F7] rounded-xl text-xl p-5">สรุปรายการอาหารทั้งหมด
    <RowSelections/>
    </div>
  
    </>
   
  )
}