import React from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import TableChart from "./TableChart";

const Dashboard = () => {
  return (
    <div className="w-[91%] mx-auto bg-[#ECF2FF] drop-shadow-xl scroll-smooth my-8 max-sm:my-6 rounded-[15px] ">
      {/* Chart Area */} 
      <div className=" flex flex-col gap-[15px] px-4 py-5">
        <PieChart />
        <LineChart />
        <TableChart />
      </div>
    </div>
  );
};

export default Dashboard;
