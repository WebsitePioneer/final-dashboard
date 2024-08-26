import React from "react";
// Pie Charts
import DonutChartForPie from "../components/DonutChartForPie";
import BarChartForPie from "../components/BarChartForPie";
import PieChartCards from "../cards/PieChartCards";
// Line Charts
import BarChartForLine from "../components/BarChartForLine";
import LineChartCards from "../cards/LineChartCards";
import LineChartForLine from "../components/LineChart";
// Table Charts
import TableOneForTable from '../components/TableOneForTable'
import PieChartForTable from '../components/PieChartForTable'
import TableTwoForTable from '../components/TableTwoForTable'

const Dashboard = () => {
  return (
    <div className="sm:w-11/12 w-full mx-auto bg-gradient-to-r from-[#f0f0f0] to-[#e1e1e1] drop-shadow-xl scroll-smooth my-8 max-sm:my-6 px-4 py-4 rounded-[25px] ">
      {/* Chart Area */} 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {/* Pie Charts */}
        <div className=" drop-shadow-lg w-full bg-white border rounded-[15px] p-[20px]">
            <DonutChartForPie />
        </div>
        <div className=" w-full ">
            <PieChartCards />
        </div>
        <div className=" w-full drop-shadow-lg bg-white  border rounded-[15px] p-[20px]">
            <BarChartForPie />
        </div>
        {/* --------- End ----------- */}

        {/* Line Charts */}
        <div className=" bg-white drop-shadow-lg border rounded-[15px] p-[20px]">
            <BarChartForLine  />
        </div>
        <div className="">
            <LineChartCards/>
        </div>
        <div className=" drop-shadow-lg bg-white border rounded-[15px] p-[20px]">
            <LineChartForLine />
        </div>
        {/* ------------End--------- */}

        {/* Table Charts */}
        <div className="bg-white border rounded-[15px] px-3 py-3 ">
            <TableOneForTable />
        </div>
        <div className="bg-white border rounded-[15px] px-3 py-2 ">
            <PieChartForTable />
        </div>
        <div className="bg-white border rounded-[15px] px-3 py-3 ">
            <TableTwoForTable />
        </div>
        {/* ---------------- End -------------- */}


        {/* <LineChart /> */}
        {/* <TableChart /> */}
      </div>
    </div>
  );
};

export default Dashboard;
