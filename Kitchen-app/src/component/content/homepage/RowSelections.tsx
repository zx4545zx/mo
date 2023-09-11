import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
function RowSelections() {

    const column = [
        {
            name: 'ID',
            selector: row => row.ID
        },
        {
            name: 'Quantity',
            selector: row => row.Quantity
        },
        {
            name: 'NameMenu',
            selector: row => row.NameMenu
        },
        {
            name: 'Detail',
            selector: row => row.Detail
        },
        {
            name: 'Type',
            selector: row => row.Type
        },
        {
            name: 'Status',
            selector: row => row.Status
        },
        {
            name: 'Zone',
            selector: row => row.Zone
        }
    ]

    interface DataType {
        ID: number,
        Quantity: number,
        NameMenu: string,
        Detail: string,
        Type: string,
        Status: string,
        Zone: string
    }
    // Connect API (Find data)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         axios.get('http://restaurantapi.bubblethailand.com/foods')
    //             .then(res => setRecords(res.data))
    //             .catch(err => console.log(err))
    //     }
    //     fetchData()
    // }, [])


    // Mock Data
    const [data, setData] = useState
        ([
            {
                ID: 1,
                Quantity: 3,
                NameMenu: 'ผัดกระเพรา',
                Detail: 'ไม่พริก',
                Type: 'พิเศษ',
                Status: 'waiting',
                Zone: 'A1-1'
            },
            {
                ID: 2,
                Quantity: 1,
                NameMenu: 'หมูผัดกระเทียม',
                Detail: '',
                Type: 'พิเศษ',
                Status: 'waiting',
                Zone: 'A1-1'
            }
        ])

    const [newData, setNewData] = useState<Array<DataType>>([])

    function handleClick(data2: DataType) {
        // data2.Status = 'doing'
        // const filData = data.filter(v => v.ID !== data2.ID)
        setNewData([...newData, data2])
        console.log(newData);

    }

 




    return (
        <>
            {/* <div className='p-'>
                <DataTable columns={column} data={records} pagination selectableRows></DataTable></div> */}

            {/* <div className='p-' onClick={() => handleClick({
                ID: 1,
                Quantity: 3,
                NameMenu: 'ผัดกระเพรา',
                Detail: 'ไม่พริก',
                Type: 'พิเศษ',
                Status: 'waiting',
                Zone: 'A1-1'
            })}>
                <DataTable columns={column} data={data}
                    // pagination
                    selectableRows
                ></DataTable></div> */}

            {/* <DataTable columns={column} data={data} onRowClicked={handleClick}
                    // pagination
                    selectableRows
                ></DataTable> */}





    </>

    )
}

export default RowSelections