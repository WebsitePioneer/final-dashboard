import React from "react";
import Chart from "react-apexcharts";
import AOS from "aos";
import "aos/dist/aos.css";

const BarChartForLine = ({ dark }) => {
  // Defining month names in order from May to September
  const months = ["May", "June", "July", "August", "September"];
  const values = [0, 0, 5, 39, 0];

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
        background: "transparent", // Gradient background
        foreColor: `${dark ? "#ffffff" : "#ffffff"}`,
      },
      theme: {
        mode: 'dark', // Sets the toolbar theme to dark (affects toolbar color)
      },
      colors: ["#845ec2", "#926c00", "#845ec2", "#EDDD3F", "#926c00"],
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          color: `${dark ? "#ffffff" : "#ffffff"}`,
        },
      },
      xaxis: {
        categories: months,
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
        text: "Posts Per Month",
        align: "left",
        margin: 40,
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
      data: values,
    },
  ];
  return (
    <>
      <Chart
        data-aos="fade-up"
        options={chartOptions.options}
        series={chartSeries}
        type="bar"
        height="300"
      />
    </>
  );
};

export default BarChartForLine;
