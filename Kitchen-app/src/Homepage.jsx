import "./App.css";

import Sidebar from "./component/Sidebar";
import Header from "./component/header";
import NewFood from "./component/content/homepage/NewFood";
// import TotalFood from "./component/content/homepage/TotalFood";
// import TodoFood from "./component/content/homepage/TodoFood.tsx";

// import TestTable from "./component/content/homepage/TestTable";
import TEST2 from "./component/content/homepage/TEST2";
import TEST3 from "./component/content/homepage/TEST3";

// import Dropdown from "./component/content/homepage/Dropdown";
function App() {
  return (
    <div className="w-full h-screen bg-[#FFFFFF] font-Kanit">
      <Header />
      <div className="flex ">
        <Sidebar />
        <div className="grid w-screen grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl">
            <NewFood />
            {/* <Dropdown /> */}
          </div>

          <div className="grid grid-rows-2 gap-5 rounded-xl">
            <div className="bg-[#F9F7F7] rounded-xl text-xl p-5">
              สรุปรายการอาหารทั้งหมด
              <TEST2 />
              <TEST3 />
            </div>
            {/* <TotalFood />

            <TodoFood /> */}
            <div className="bg-[#F9F7F7] rounded-xl text-xl p-5 ">
              รายการที่กำลังทำ
              <div className="flex flex-row items-center justify-end w-full gap-8 px-5 py-8">
                <button className="rounded-xl bg-[#AEAEAE] w-28 h-10 text-[#FFFFFF] text-sm">
                  ล้างทั้งหมด
                </button>
                <button className="rounded-xl bg-[#ED7E46] text-[#FFFFFF] w-28 h-10 text-sm">
                  เริ่มทำ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
