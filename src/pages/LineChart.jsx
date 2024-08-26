import React from "react";
import { useLineChartData } from "../hooks/useLineChartData";
import LineChartCards from "../cards/LineChartCards";
import LineChartForLine from "../components/LineChart";
import BarChartForLine from "../components/BarChartForLine";

const LineChart = () => {
  const { data, isLoading, error } = useLineChartData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        <div className=" bg-white drop-shadow-lg border rounded-[15px] p-[20px]">
            <BarChartForLine data={data} />
        </div>
        <div className="">
            <LineChartCards data={data} />
        </div>
        <div className=" drop-shadow-lg bg-white border rounded-[15px] p-[20px]">
            <LineChartForLine data={data} />
        </div>
        <div className="max-lg:block hidden drop-shadow-lg bg-white border rounded-[15px] p-[20px]">
            <LineChartForLine data={data} />
        </div>
      </div>
    </>
  );
};

export default LineChart;
