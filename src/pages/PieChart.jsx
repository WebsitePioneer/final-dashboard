import React from "react";
import DonutChartForPie from "../components/DonutChartForPie";
import BarChartForPie from "../components/BarChartForPie";
import { usePieBarChartData } from "../hooks/usePieBarChartData";
import PieChartCards from "../cards/PieChartCards";

const PieChart = () => {
  const { data, isLoading, error } = usePieBarChartData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        <div className=" drop-shadow-lg w-full bg-white border rounded-[15px] p-[20px]">
            <DonutChartForPie data={data} />
        </div>
        <div className=" w-full ">
            <PieChartCards data={data} />
        </div>
        <div className=" w-full drop-shadow-lg bg-white  border rounded-[15px] p-[20px]">
            <BarChartForPie data={data} />
        </div>
        <div className="max-lg:block hidden w-full drop-shadow-lg bg-white  border rounded-[15px] p-[20px]">
            <BarChartForPie data={data} />
        </div> 
      </div>
    </>
  );
};

export default PieChart;
