
import React, { useState } from 'react';
import { GoDotFill } from "react-icons/Go";
import { BiSearchAlt2 } from "react-icons/Bi";
import Sidebar from './Sidebar';
const Header: React.FC = () => {
const [namePage, setNamePage] = useState("หน้าแรก");

    return (

            <div className="p-5">
                <div className="grid grid-cols-2 gap-6 p-2 lg:grid-cols-3">
                    <div className="items-center text-2xl px-14">{namePage}</div>

                    <div className="flex flex-row bg-[#F9F7F7] gap-3 rounded-full p-1 ">
                        <BiSearchAlt2 className="text-[#999999] text-2xl w-4" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-[#F9F7F7] "
                        ></input>
                    </div>
                    <div className="block lg:hidden"></div>
                    <div className="flex flex-row items-center justify-end w-full gap-2">
                        <GoDotFill className="text-[#ED7E46]" />
                        กำลังทำ
                        <GoDotFill className="text-[#0AEA49]" />
                        ทำเสร็จแล้ว
                        <GoDotFill className="text-[#EC1C24]" />
                        มีปัญหา
                    </div>

                </div>


            </div>






    );
};

export default Header;