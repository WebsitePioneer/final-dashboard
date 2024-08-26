import React from "react";
import Chart from "react-apexcharts";
import { usePieBarChartData } from "../hooks/usePieBarChartData";

const DonutChartForPie = ({ dark }) => {
  const { data, isLoading, pieerror } = usePieBarChartData();
  if (isLoading) return <div>Loading...</div>;
  if (pieerror) return <div>Error: {error.message}</div>;

  const labels = data.labels;
  const value = data.data;

  const chartOptions = {
    options: {
      chart: {
        type: "donut",
        background: "transparent", // Background color of the entire chart
        foreColor: `${dark ? "#ffffff" : "#ffffff"}`, // Default color for all text in the chart (like axis labels)
      },
      dataLabels: {
        enabled: true,
        style: {
          color: `${dark ? "#ffffff" : "#ffffff"}`,
        },
      },
      plotOptions: {
        pie: {
          customScale: 1,
          donut: {
            size: "50%",
          },
          offsetY: 0,
        },
        stroke: {
          color: `${dark ? "#ffffff" : "#ffffff"}`,
        },
      },
      title: {
        text: "Tasks Status in %",
        align: "left",
        margin: 40,
        offsetY: 0,
        style: {
          fontSize: "24px",
          fontWeight: "800",
          color: `${dark ? "#ffffff" : "#ffffff"}`,
        },
      },
      labels: labels,
      style: {
        color: `${dark ? "#ffffff" : "#ffffff"}`,
      },
      legend: {
        position: "right",
        offsetY: 70,
      },
    },
  };

  const chartSeries = value;

  return (
    <div>
      <div className="">
        <Chart
          options={chartOptions.options}
          series={chartSeries}
          type="donut"
          height={300}
        />
      </div>
    </div>
  );
};

export default DonutChartForPie;
