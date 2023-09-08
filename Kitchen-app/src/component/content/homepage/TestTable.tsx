import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/Go';

function TestTable() {

  interface TypeBillData {
    id:number,
    quantity:number,
    name_menu:string,
    detail:string,
    type:string,
    status:string,
    zone:string
  }

  // Mock Data
  const [newdata,setNewData]=useState<Array<TypeBillData>>([
    {
      id:1,
      quantity:1,
      name_menu:"ผัดกระเพราะ",
      detail:"ไม่พริก",
      type:"พิเศษ",
      status:"waiting",
      zone:'A1-1'
    }
  ])

  function handleClick(data: TypeBillData) {
    data.status = "doing"

    const filData = newdata.filter(v => v.id !== data.id)
    filData.push(data)

    setNewData(filData)
  }

  function successClick(data:TypeBillData){
    data.status = 'complete'

    const filData = newdata.filter(v=> v.id !== data.id)
    filData.push(data)

    setNewData(filData)
  }

  return (
    <>
    <div className="flex ">
        <div className="w-full h-screen bg-red-500">
          {newdata.map(v => {
            if (v.status === "waiting") {
              return <div key={v.id} onClick={() => handleClick(v)}>{v.name_menu} {v.status}</div>
            }
          })}
        </div>
        <div className="w-full h-screen bg-green-500">
          {newdata.map(v => {
            if (v.status === "doing") {
              return <div key={v.id} onClick={() => successClick(v)}>{v.name_menu} {v.status}</div>
            }
          })}
        </div>
      </div>
    </>
  )
}

export default TestTable