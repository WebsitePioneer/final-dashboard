import React from "react";
import Chart from "react-apexcharts";
import { usePieBarChartData } from "../hooks/usePieBarChartData";

const BarChartForPie = ({ dark }) => {
  // Pie chart
  const { data, isLoading, pieerror } = usePieBarChartData();
  if (isLoading) return <div>Loading...</div>;
  if (pieerror) return <div>Error: {error.message}</div>;

  const labels = data.labels;
  const value = data.data;

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
        background: "transparent", // Gradient background
        foreColor: `${dark ? "#ffffff" : "#ffffff"}`, // Color of text inside the chart (axis labels, data labels, etc.)
      },
      tooltip: {
        theme: 'dark', // Controls the overall theme of the tooltip
        style: {
          fontSize: '14px', // Sets the font size for tooltip text
          fontWeight: 'bold', // Sets the font weight for tooltip text
          background: "#ffffff",
          colors: "#000000",
        },
      },
      colors: ["#E97224", "#9A6F2A", "#DDB64F", "#616A1E", "#926c00"],
      plotOptions: {
        bar: {
          distributed: false,
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: false,
          barHeight: "70%",
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          color: `${dark ? "#ffffff" : "#ffffff"}`,
        },
      },
      xaxis: {
        categories: labels,
        labels: {
          style: {
            colors: `${dark ? "#ffffff" : "#ffffff"}`, // Color of x-axis labels
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: `${dark ? "#ffffff" : "#ffffff"}`, // Color of y-axis labels
            fontSize: "13px",
          },
        },
      },
      title: {
        text: "Tasks Status",
        align: "left",
        margin: 20,
        offsetY: 0,
        style: {
          fontSize: "25px",
          color: `${dark ? "#ffffff" : "#ffffff"}`,
        },
      },
    },
  };

  const chartSeries = [
    {
      data: value,
    },
  ];

  return (
    <div>
      <Chart
        options={chartOptions.options}
        series={chartSeries}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default BarChartForPie;
