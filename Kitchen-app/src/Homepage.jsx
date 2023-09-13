import "./App.css";

import Sidebar from "./component/Sidebar";
import Header from "./component/header";
// import NewFood from "./component/content/homepage/NewFood";
import TEST2 from "./component/content/homepage/TEST2";
import TNewFood from "./component/content/homepage/TNewFood";
// import TEST4 from "./component/content/homepage/TEST4";
import ApiTest from "./component/content/homepage/ApiTest";
function App() {
  return (
    <div className="w-full h-screen bg-[#FFFFFF] font-Kanit">
      <Header />
      <div className="flex ">
        <Sidebar />
        <div className="grid w-screen grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl">
            <TNewFood />
          </div>

          <div className="rounded-xl">
            <TEST2 />
          </div>
          {/* <div className="rounded-xl">
            <ApiTest />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
