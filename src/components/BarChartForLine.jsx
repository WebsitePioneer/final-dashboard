import React from "react";
import Chart from "react-apexcharts";

const BarChartForLine = () => {

  // Defining month names in order from May to September
  const months = ["May", "June", "July", "August", "September"];
  const values = [0, 0, 5, 39,0]

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      theme: {
        mode: 'light', 
        palette: 'palette3', 
        monochrome: {
            enabled: true,
            color: '#FF4560',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
      },
      xaxis: {
        categories: months,
      },
      title: {
        text: "Posts Per Month",
        align: "left",
        margin: 40,
        offsetY: 0,
        style: {
          fontSize: "25px",
        },
      },
    },
  };

  const chartSeries = [
    {
      data: values,
    },
  ];
  return (
    <>
      <Chart options={chartOptions.options} series={chartSeries} type="bar" height="300" />
    </>
  );
};

export default BarChartForLine;
