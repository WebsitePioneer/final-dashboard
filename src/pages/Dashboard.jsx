import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
// Pie Charts
import DonutChartForPie from "../components/DonutChartForPie";
import BarChartForPie from "../components/BarChartForPie";
import PieChartCards from "../cards/PieChartCards";
// Line Charts
import BarChartForLine from "../components/BarChartForLine";
import LineChartCards from "../cards/LineChartCards";
import LineChartForLine from "../components/LineChart";
// Table Charts
import TableOneForTable from "../components/TableOneForTable";
import PieChartForTable from "../components/PieChartForTable";
import TableTwoForTable from "../components/TableTwoForTable";


const Dashboard = ({data}) => {
    useEffect(() => {
        AOS.init({
             duration: 1200,
             once: false,
           })
     }, [])
  return (
    <div data-aos="fade-up" className={`sm:w-11/12 w-full mx-auto bg-gradient-to-r ${data ? "from-[#161616] to-[#282828]" : "from-[#eae8e7] to-[#d6beaf]"} drop-shadow-xl scroll-smooth my-8 max-sm:my-6 px-6 py-6 rounded-[25px]`}>
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-[15px]">
        
        {/* Pie Charts */}
        <div data-aos="fade-up" className={`lg:col-span-4 drop-shadow-lg w-full bg-gradient-to-r ${data ? "from-[#b03a10] to-[#e6741d]" : "from-[#bd3f12] to-[#fa852b]"} rounded-[15px] p-[20px]`}>
          <DonutChartForPie dark={data} />
        </div>

        <div data-aos="fade-up" className="lg:col-span-2 w-full ">
          <PieChartCards />
        </div>

        <div data-aos="fade-up" className={`lg:col-span-5  w-full drop-shadow-lg bg-gradient-to-r  ${data ? "from-[#136c66] to-[#05c2c2]" : "from-[#105752] to-[#099797] "} rounded-[15px] p-[20px]`}>
          <BarChartForPie dark={data}  />
        </div>
        {/* --------- End ----------- */}


        {/* Line Charts */}
        <div data-aos="fade-up" className={`lg:col-span-4 bg-gradient-to-r  ${data ? "from-[#425959] to-[#394545]" : "from-[#425959] to-[#394545]"} drop-shadow-lg rounded-[15px] p-[20px]`}>
          <BarChartForLine dark={data}  />
        </div>
        <div data-aos="fade-up" className="lg:col-span-2">
          <LineChartCards />
        </div>
        <div data-aos="fade-up" className={`lg:col-span-5 drop-shadow-lg bg-gradient-to-r ${data ? "from-[#7a5416] to-[#b7873c]" : "from-[#7a5416] to-[#b7873c]"} rounded-[15px] p-[20px]`}>
          <LineChartForLine dark={data}  />
        </div>
        {/* ------------End--------- */}

        {/* Table Charts */}
        <div data-aos="fade-up" className={`lg:col-span-4 bg-gradient-to-r ${data ? "from-[#353535] to-[#525263]" : "from-[#313030] to-[#4d4d56]"} rounded-[15px] px-3 py-3`}>
          <TableOneForTable />
        </div>
        <div data-aos="fade-up" className={`lg:col-span-4 bg-gradient-to-r ${data ? "from-[#544c12] to-[#6e6416]" : "from-[#91821d] to-[#54631e]"} rounded-[15px] px-3 py-2`}>
          <PieChartForTable dark={data}  />
        </div>
        <div data-aos="fade-up" className={`lg:col-span-3 bg-gradient-to-r ${data ? "from-[#4b4444] to-[#353548]" : "from-[#4b4444] to-[#353548]"} rounded-[15px] px-3 py-3 `}>
          <TableTwoForTable />
        </div>
        {/* ---------------- End -------------- */}
      </div>
    </div>
  );
};

export default Dashboard;
